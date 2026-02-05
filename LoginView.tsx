
import React, { useState, useEffect, useRef } from 'react';

interface LoginViewProps {
  onLogin: (user: string, level: string) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(() => {
    return localStorage.getItem('nexus_remember_me') === 'true';
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [userList, setUserList] = useState<string[]>(['ADMINISTRADOR', 'VISITANTE']);
  const [userLevelMap, setUserLevelMap] = useState<Record<string, string>>({});
  const [userPasswordMap, setUserPasswordMap] = useState<Record<string, string>>({});
  const [loginError, setLoginError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const DEFAULT_SHEET_URL = "https://docs.google.com/spreadsheets/d/10bW-QsfQ6gRWqfsDSVZ-2OjBRe9X-zUYEgg1CfpzMFo/edit";
  const backgroundImage = "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=100&w=1920";

  useEffect(() => {
    const savedLink = localStorage.getItem('nexus_login_bank_url') || DEFAULT_SHEET_URL;
    fetchUsersFromSheet(savedLink);

    const savedUser = localStorage.getItem('nexus_saved_user');
    if (rememberMe && savedUser) setSelectedUser(savedUser.toUpperCase());

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [rememberMe]);

  const fetchUsersFromSheet = async (url: string) => {
    setIsLoadingUsers(true);
    try {
      let fetchUrl = url;
      if (url.includes('docs.google.com/spreadsheets')) {
        const idMatch = url.match(/\/d\/([^/]+)/);
        if (idMatch) {
          fetchUrl = `https://docs.google.com/spreadsheets/d/${idMatch[1]}/export?format=csv&gid=0`;
        }
      }

      const response = await fetch(fetchUrl);
      if (!response.ok) throw new Error("Erro ao carregar banco de dados");
      
      const text = await response.text();
      const rows = text.split(/\r?\n/);
      
      const levelMapping: Record<string, string> = {};
      const passwordMapping: Record<string, string> = {};
      const names: string[] = [];

      rows.forEach(row => {
        const cols = row.split(/[,;]/);
        const name = cols[0]?.replace(/"/g, '').trim().toUpperCase();
        const pwd = cols[1]?.replace(/"/g, '').trim(); // Coluna B (Senha)
        const level = cols[2]?.replace(/"/g, '').trim() || "Operador"; // Coluna C (Nível)
        
        if (name && !['NOME', 'USUARIO', 'USER', 'LOGIN', 'PERFIL'].includes(name.toUpperCase())) {
          names.push(name);
          levelMapping[name] = level;
          passwordMapping[name] = pwd || "";
        }
      });

      if (names.length > 0) {
        setUserList(Array.from(new Set(names)));
        setUserLevelMap(levelMapping);
        setUserPasswordMap(passwordMapping);
      }
    } catch (error) {
      console.error("Falha ao sincronizar usuários e níveis da planilha:", error);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    if (selectedUser && password.trim()) {
      const finalUser = selectedUser.toUpperCase();
      const correctPassword = userPasswordMap[finalUser];
      const userLevel = userLevelMap[finalUser] || "Operador";

      // VALIDAÇÃO DA SENHA CONTIDA NA COLUNA B
      if (password === correctPassword) {
        if (rememberMe) {
          localStorage.setItem('nexus_saved_user', finalUser);
          localStorage.setItem('nexus_remember_me', 'true');
        } else {
          localStorage.removeItem('nexus_saved_user');
          localStorage.setItem('nexus_remember_me', 'false');
        }
        onLogin(finalUser, userLevel);
      } else {
        setLoginError("Senha incorreta para este operador.");
      }
    } else {
      setLoginError("Preencha todos os campos.");
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black overflow-hidden font-sans uppercase">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover opacity-100 shadow-inner" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-4 animate-in fade-in zoom-in-95 duration-700">
        <div className="bg-[#111318]/80 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)]">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-black tracking-tighter italic text-white leading-none">
              NEXUS<span className="text-blue-500">DECK</span>
            </h1>
            <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_#f59e0b]"></div>
          </header>

          <form onSubmit={handleLogin} className="space-y-7">
            <div className="space-y-2 relative" ref={dropdownRef}>
              <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] ml-4 block">Operador</label>
              <div 
                onClick={() => !isLoadingUsers && setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full bg-black/60 border rounded-2xl px-6 py-4 text-white flex items-center justify-between cursor-pointer transition-all ${
                  isDropdownOpen ? 'border-amber-500 ring-4 ring-amber-500/10' : 'border-white/5'
                }`}
              >
                <span className={`font-black text-sm tracking-widest truncate mr-4 ${selectedUser ? 'text-white' : 'text-slate-600'}`}>
                  {isLoadingUsers ? "Sincronizando..." : (selectedUser || "Selecionar Perfil")}
                </span>
                {!isLoadingUsers && (
                  <svg className={`w-4 h-4 text-amber-500 transition-transform shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-[#16181d]/95 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50">
                  <div className="max-h-52 overflow-y-auto custom-scrollbar p-2">
                    {userList.map((username) => (
                      <div 
                        key={username}
                        onClick={() => {
                          setSelectedUser(username);
                          setLoginError(null);
                          setIsDropdownOpen(false);
                        }}
                        className={`px-5 py-3.5 rounded-xl text-[10px] font-black tracking-[0.2em] cursor-pointer transition-all ${
                          selectedUser === username ? 'bg-amber-600 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {username}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] ml-4 block">Senha</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => { setPassword(e.target.value); setLoginError(null); }}
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-all font-black text-sm tracking-[0.5em]"
                placeholder="••••••••"
              />
            </div>

            {loginError && (
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl animate-in slide-in-from-top-2">
                <p className="text-[9px] font-black text-red-500 text-center uppercase tracking-widest">{loginError}</p>
              </div>
            )}

            <button 
              type="submit"
              disabled={!selectedUser || !password || isLoadingUsers}
              className="w-full py-5 rounded-2xl font-black text-[11px] tracking-[0.5em] bg-[#f08a00] hover:bg-[#ff9500] text-white shadow-xl shadow-orange-950/20 active:scale-[0.98] disabled:opacity-50"
            >
              {isLoadingUsers ? 'Sincronizando...' : 'Entrar no Sistema'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
