
import React, { useState, useEffect, useRef, useMemo } from 'react';

interface ChatMessage {
  id: string;
  from: string;
  to: string;
  content: string;
  timestamp: number;
  isImportant: boolean;
  readBy: string[];
}

interface CommunicationViewProps {
  currentUser: string | null;
  currentUserLevel: string | null;
  onNotify: (title: string, message: string, type: 'info' | 'warning' | 'success') => void;
}

const CommunicationView: React.FC<CommunicationViewProps> = ({ currentUser, currentUserLevel, onNotify }) => {
  const [allMessages, setAllMessages] = useState<ChatMessage[]>([]);
  const [activeChat, setActiveChat] = useState<string>('GERAL');
  const [newMessage, setNewMessage] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [userList, setUserList] = useState<string[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  
  const DEFAULT_MESSAGES_URL = "https://script.google.com/macros/s/AKfycbyMtLWavIqevd2PUt3vT9CCYM-bj1VXUTIi10yhsLxuVHPGejqvmhPr15oMeNrbOxOirg/exec";
  const CHAT_SCRIPT_URL = localStorage.getItem('nexus_messages_bridge_url') || DEFAULT_MESSAGES_URL;

  const COMMON_EMOJIS = ['😀', '😂', '😍', '👍', '🙏', '🔥', '👏', '✅', '⚠️', '🚀', '⭐', '❤️', '🤔', '👀', '😎', '💡', '📢', '📌', '🤝', '📅'];

  const syncMessages = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    try {
      const response = await fetch(`${CHAT_SCRIPT_URL}?cb=${Date.now()}`);
      if (!response.ok) return;
      const data = await response.json();
      
      const synced: ChatMessage[] = data.map((item: any) => ({
        id: item.ID || `msg_${Date.now()}_${Math.random()}`,
        from: String(item.REMETENTE || '').toUpperCase(),
        to: String(item.DESTINATARIO || 'GERAL').toUpperCase(),
        content: item.CONTEUDO || '',
        isImportant: item.URGENTE === 'SIM',
        timestamp: new Date(item.DATA).getTime() || Date.now(),
        readBy: item.LIDO_POR ? String(item.LIDO_POR).split('|').map(u => u.trim().toUpperCase()) : []
      }));

      const myMessages = synced.filter(m => 
        m.to === 'GERAL' || 
        m.from === currentUser?.toUpperCase() || 
        m.to === currentUser?.toUpperCase()
      );

      setAllMessages(myMessages.sort((a, b) => a.timestamp - b.timestamp));
    } catch (e) {
      console.error("Erro ao sincronizar chat:", e);
    } finally {
      setIsSyncing(false);
    }
  };

  const fetchUsers = async () => {
    const url = localStorage.getItem('nexus_login_bank_url') || "https://docs.google.com/spreadsheets/d/10bW-QsfQ6gRWqfsDSVZ-2OjBRe9X-zUYEgg1CfpzMFo/edit";
    try {
      let fetchUrl = url;
      if (url.includes('docs.google.com/spreadsheets')) {
        const idMatch = url.match(/\/d\/([^/]+)/);
        if (idMatch) fetchUrl = `https://docs.google.com/spreadsheets/d/${idMatch[1]}/export?format=csv&gid=0`;
      }
      const response = await fetch(fetchUrl);
      const text = await response.text();
      const rows = text.split(/\r?\n/);
      const names: string[] = [];
      rows.forEach(row => {
        const cols = row.split(/[,;]/);
        const name = cols[0]?.replace(/"/g, '').trim().toUpperCase();
        if (name && !['NOME', 'USUARIO', 'USER', 'LOGIN', 'PERFIL'].includes(name)) names.push(name);
      });
      setUserList(['GERAL', ...Array.from(new Set(names)).filter(n => n !== currentUser?.toUpperCase())]);
    } catch (e) {
      console.error("Erro carregando usuários");
    }
  };

  const sortedUserList = useMemo(() => {
    return [...userList].sort((a, b) => {
      const getLastActivity = (user: string) => {
        const msgs = allMessages.filter(m => 
          user === 'GERAL' 
            ? m.to === 'GERAL'
            : (m.from === user && m.to === currentUser?.toUpperCase()) || 
              (m.from === currentUser?.toUpperCase() && m.to === user)
        );
        return msgs.length > 0 ? msgs[msgs.length - 1].timestamp : 0;
      };
      const lastA = getLastActivity(a);
      const lastB = getLastActivity(b);
      if (lastA === 0 && lastB === 0) return 0;
      return lastB - lastA;
    });
  }, [userList, allMessages, currentUser]);

  useEffect(() => {
    syncMessages();
    fetchUsers();
    const interval = setInterval(syncMessages, 7000);

    const handleClickOutside = (e: MouseEvent) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(e.target as Node)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearInterval(interval);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    fetch(CHAT_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        action: "MARK_READ",
        USUARIO: currentUser.toUpperCase(),
        CHAT: activeChat.toUpperCase()
      })
    }).catch(() => {});
    
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeChat, allMessages.length, currentUser, CHAT_SCRIPT_URL]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !currentUser) return;

    const payload = {
      action: "SEND_MESSAGE",
      REMETENTE: currentUser.toUpperCase(),
      DESTINATARIO: activeChat.toUpperCase(),
      CONTEUDO: newMessage,
      URGENTE: isImportant
    };

    setNewMessage('');
    setIsImportant(false);
    setShowEmojiPicker(false);

    try {
      await fetch(CHAT_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });
      syncMessages();
    } catch (e) {
      onNotify("Erro", "Falha ao enviar mensagem.", "warning");
    }
  };

  const handleEmojiClick = (emoji: string) => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart || 0;
      const end = inputRef.current.selectionEnd || 0;
      const text = newMessage;
      const before = text.substring(0, start);
      const after = text.substring(end, text.length);
      setNewMessage(before + emoji + after);
      
      setTimeout(() => {
        inputRef.current?.focus();
        const newPos = start + emoji.length;
        inputRef.current?.setSelectionRange(newPos, newPos);
      }, 0);
    } else {
      setNewMessage(prev => prev + emoji);
    }
  };

  const displayMessages = allMessages.filter(m => 
    (activeChat === 'GERAL' && m.to === 'GERAL') || 
    (m.from === currentUser?.toUpperCase() && m.to === activeChat.toUpperCase()) || 
    (m.from === activeChat.toUpperCase() && m.to === currentUser?.toUpperCase())
  );

  return (
    <div className="flex-1 flex bg-[#0b0e14] overflow-hidden animate-in fade-in duration-500">
      <aside className="w-80 border-r border-white/5 flex flex-col bg-black/20">
        <header className="p-6 border-b border-white/5">
          <h1 className="text-xl font-black text-white uppercase tracking-tighter">Nexus<span className="text-blue-500">Chat</span></h1>
          <p className="text-[7px] font-black text-slate-500 uppercase tracking-widest mt-1">Mensagens Privativas & Criptografadas</p>
        </header>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {sortedUserList.map(user => {
            const chatMsgs = allMessages.filter(m => 
              user === 'GERAL' 
                ? m.to === 'GERAL' 
                : (m.from === user && m.to === currentUser?.toUpperCase()) || 
                  (m.from === currentUser?.toUpperCase() && m.to === user)
            );
            const lastMsg = chatMsgs[chatMsgs.length - 1];
            const unread = chatMsgs.filter(m => m.from === user && !m.readBy.includes(currentUser?.toUpperCase() || '')).length;

            return (
              <div 
                key={user}
                onClick={() => setActiveChat(user)}
                className={`p-4 flex items-center space-x-4 cursor-pointer transition-all border-l-4 ${activeChat === user ? 'bg-blue-600/10 border-blue-500 shadow-inner' : 'border-transparent hover:bg-white/5'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border border-white/10 shadow-lg overflow-hidden ${user === 'GERAL' ? 'bg-blue-600/20' : 'bg-slate-800'}`}>
                   {user === 'GERAL' ? (
                     <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                   ) : (
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user}`} alt="" />
                   )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-white truncate">{user}</h3>
                    {lastMsg && <span className="text-[8px] text-slate-600">{new Date(lastMsg.timestamp).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>}
                  </div>
                  <div className="flex items-center justify-between">
                     <p className="text-[9px] text-slate-500 truncate font-medium flex-1">{lastMsg ? lastMsg.content : 'Nenhuma mensagem'}</p>
                     {unread > 0 && <div className="ml-2 w-4 h-4 rounded-full bg-blue-500 text-white text-[8px] font-black flex items-center justify-center shrink-0">{unread}</div>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative bg-[#0d1117]">
        <header className="h-20 border-b border-white/5 bg-black/40 backdrop-blur-xl flex items-center justify-between px-8 z-10">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 ${activeChat === 'GERAL' ? 'bg-blue-600/20' : 'bg-slate-800'}`}>
               {activeChat === 'GERAL' ? <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> : <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeChat}`} className="w-8 h-8" alt="" />}
            </div>
            <div>
              <h2 className="text-sm font-black text-white uppercase tracking-widest">{activeChat}</h2>
              <div className="flex items-center space-x-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                 <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Criptografia Ponta-a-Ponta</span>
              </div>
            </div>
          </div>
          <button onClick={syncMessages} className="text-slate-500 hover:text-white transition-colors p-2 bg-white/5 rounded-lg"><svg className={`w-4 h-4 ${isSyncing ? 'animate-spin text-blue-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 flex flex-col space-y-4 custom-scrollbar" ref={scrollRef}>
          {displayMessages.map((msg) => {
            const isMe = msg.from === currentUser?.toUpperCase();
            const isReadByOther = activeChat === 'GERAL' ? msg.readBy.length > 1 : msg.readBy.includes(activeChat.toUpperCase());

            return (
              <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[75%] p-4 rounded-2xl relative shadow-xl ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white/5 text-slate-200 rounded-tl-none border border-white/5'}`}>
                  {/* IDENTIFICAÇÃO DO REMETENTE NO GERAL NO TOPO DO BALÃO */}
                  {!isMe && activeChat === 'GERAL' && (
                    <div className="flex items-center space-x-2 mb-1.5 border-b border-white/10 pb-1">
                      <div className="w-4 h-4 rounded-full overflow-hidden bg-blue-500/20">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.from}`} alt="" />
                      </div>
                      <span className="text-[8px] font-black uppercase text-blue-400 tracking-wider font-sans">{msg.from}</span>
                    </div>
                  )}
                  
                  {/* TEXTO EM FORMATO NORMAL (SEM ITALIC) */}
                  <p className="text-xs font-medium leading-relaxed break-words font-sans">{msg.content}</p>
                  
                  <div className={`flex items-center justify-end space-x-2 mt-1 opacity-60`}>
                    <span className="text-[7px] font-black">{new Date(msg.timestamp).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
                    {isMe && (
                      <div className="flex items-center" title={isReadByOther ? "Visualizado" : "Enviado"}>
                        <svg className={`w-3 h-3 ${isReadByOther ? 'text-blue-200' : 'text-slate-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                           {isReadByOther && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M1 13l4 4L15 7" className="-translate-x-2" />}
                        </svg>
                      </div>
                    )}
                  </div>
                  {msg.isImportant && <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-500 rounded-full border border-black shadow-lg animate-pulse"></div>}
                </div>
              </div>
            );
          })}
          {displayMessages.length === 0 && (
             <div className="flex-1 flex flex-col items-center justify-center opacity-20 space-y-4 grayscale">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                <p className="text-[10px] font-black uppercase tracking-[0.4em]">Inicie esta conversa privativa</p>
             </div>
          )}
        </div>

        <footer className="p-6 bg-black/40 backdrop-blur-xl border-t border-white/5 z-10 relative">
           {showEmojiPicker && (
             <div 
               ref={emojiPickerRef}
               className="absolute bottom-full mb-4 left-6 bg-[#1a1d23] border border-white/10 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-2 duration-300 z-50 w-64"
             >
                <div className="grid grid-cols-5 gap-2">
                   {COMMON_EMOJIS.map(emoji => (
                     <button 
                       key={emoji}
                       onClick={() => handleEmojiClick(emoji)}
                       className="w-10 h-10 flex items-center justify-center text-xl hover:bg-white/10 rounded-lg transition-colors active:scale-90"
                     >
                       {emoji}
                     </button>
                   ))}
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 text-center">
                   <p className="text-[7px] font-black text-slate-500 uppercase tracking-widest">Emojis Rápidos Nexus</p>
                </div>
             </div>
           )}

           <form onSubmit={handleSend} className="max-w-4xl mx-auto flex items-center space-x-3">
              <button 
                type="button" 
                onClick={() => setIsImportant(!isImportant)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all border shrink-0 ${isImportant ? 'bg-red-600 border-red-500 text-white shadow-lg' : 'bg-white/5 border-white/10 text-slate-500 hover:text-white'}`}
                title="Mensagem Urgente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </button>

              <button 
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all border shrink-0 ${showEmojiPicker ? 'bg-blue-600 border-blue-500 text-white shadow-lg' : 'bg-white/5 border-white/10 text-slate-500 hover:text-white'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
              
              <input 
                ref={inputRef}
                type="text" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Digite sua mensagem privada..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />

              <button 
                type="submit" 
                disabled={!newMessage.trim()}
                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 active:scale-90 transition-all disabled:opacity-50 shrink-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
           </form>
        </footer>
      </main>
    </div>
  );
};

export default CommunicationView;
