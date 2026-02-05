
import React, { useState, useEffect } from 'react';

interface Timer {
  id: string;
  type: 'active' | 'scheduled';
  duration: number; // em segundos
  remaining: number;
  label: string;
  isRunning: boolean;
}

interface HomeViewProps {
  onNotify: (title: string, message: string, type: 'info' | 'warning' | 'success') => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNotify }) => {
  const [activeTimer, setActiveTimer] = useState<Timer | null>(null);
  const [scheduledTimer, setScheduledTimer] = useState<Timer | null>(null);
  const [customMinutes, setCustomMinutes] = useState('15');
  const [delayMinutes, setDelayMinutes] = useState('5');

  useEffect(() => {
    const interval = setInterval(() => {
      // Lógica da Pausa Ativa
      if (activeTimer?.isRunning && activeTimer.remaining > 0) {
        const nextRemaining = activeTimer.remaining - 1;
        setActiveTimer(prev => prev ? { ...prev, remaining: nextRemaining } : null);

        // Notificação de 30 segundos
        if (nextRemaining === 30) {
          onNotify("Atenção: 30 Segundos", "Sua pausa está quase no fim! Prepare-se para retornar.", "warning");
        }
      } else if (activeTimer?.isRunning && activeTimer.remaining === 0) {
        setActiveTimer(null);
        onNotify("Pausa Finalizada", "Seu tempo de pausa acabou. Retorne ao posto imediatamente!", "warning");
      }

      // Lógica do Agendamento
      if (scheduledTimer?.isRunning && scheduledTimer.remaining > 0) {
        const nextRemaining = scheduledTimer.remaining - 1;
        setScheduledTimer(prev => prev ? { ...prev, remaining: nextRemaining } : null);
        
        if (nextRemaining === 30) {
           onNotify("Início em breve", "Sua pausa agendada começará em 30 segundos.", "info");
        }
      } else if (scheduledTimer?.isRunning && scheduledTimer.remaining === 0) {
        const duration = scheduledTimer.duration;
        setScheduledTimer(null);
        startActivePause(duration / 60);
        onNotify("Pausa Iniciada", "O tempo de espera acabou e sua pausa começou agora!", "success");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTimer, scheduledTimer, onNotify]);

  const startActivePause = (mins: number) => {
    const duration = Math.max(1, mins) * 60;
    setActiveTimer({
      id: 'active',
      type: 'active',
      duration,
      remaining: duration,
      label: 'Pausa em Curso',
      isRunning: true
    });
    onNotify("Cronômetro Ativado", `Sua pausa de ${mins} minutos foi iniciada.`, "info");
  };

  const schedulePause = (delay: number, durationMins: number) => {
    const delaySecs = Math.max(1, delay) * 60;
    setScheduledTimer({
      id: 'scheduled',
      type: 'scheduled',
      duration: durationMins * 60,
      remaining: delaySecs,
      label: 'Aguardando Início',
      isRunning: true
    });
    onNotify("Pausa Agendada", `Sua pausa iniciará automaticamente em ${delay} minutos.`, "info");
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const isUrgent = activeTimer && activeTimer.remaining <= 60;

  return (
    <div className="flex-1 flex flex-col p-8 lg:p-12 overflow-y-auto custom-scrollbar bg-slate-950 relative">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 blur-[100px] rounded-full"></div>
      </div>

      <header className="relative z-10 mb-12">
        <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase leading-none">GESTOR DE PAUSAS</h1>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 mt-2">Controle de Produtividade e Descanso</p>
      </header>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CARD: INICIAR PAUSA IMEDIATA */}
        <section className={`bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl shadow-2xl space-y-8 flex flex-col transition-all duration-500 ${isUrgent ? 'animate-urgent' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${isUrgent ? 'bg-red-600/20 text-red-400 border-red-500/20' : 'bg-blue-600/20 text-blue-400 border-blue-500/20'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h2 className="text-xl font-black italic text-white uppercase tracking-tight">Pausa Imediata</h2>
                {isUrgent && <span className="text-[8px] font-black text-red-500 uppercase tracking-widest animate-pulse">Retorne ao posto em breve!</span>}
              </div>
            </div>
            {activeTimer && (
              <span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${isUrgent ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}>
                Ativo
              </span>
            )}
          </div>

          {!activeTimer ? (
            <div className="space-y-6 flex-1">
              <div className="grid grid-cols-3 gap-4">
                {[10, 15, 20].map(m => (
                  <button 
                    key={m}
                    onClick={() => startActivePause(m)}
                    className="group relative py-6 rounded-2xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10">{m} Min</span>
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Tempo Customizado (Minutos)</label>
                <div className="flex space-x-3">
                  <input 
                    type="number"
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(e.target.value)}
                    className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-bold"
                  />
                  <button 
                    onClick={() => startActivePause(Number(customMinutes))}
                    className="bg-blue-600 px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:bg-blue-500 active:scale-95 transition-all"
                  >
                    Iniciar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 py-6">
              <div className="relative w-56 h-56 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                  <circle 
                    cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="12" fill="transparent" 
                    className={`transition-all duration-1000 ${isUrgent ? 'text-red-500' : 'text-blue-500'}`}
                    strokeDasharray={628}
                    strokeDashoffset={628 - (628 * activeTimer.remaining) / activeTimer.duration}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex flex-col items-center">
                  <span className={`text-5xl font-black italic tracking-tighter ${isUrgent ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                    {formatTime(activeTimer.remaining)}
                  </span>
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-2">Restantes</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setActiveTimer(null);
                  onNotify("Pausa Cancelada", "O temporizador foi interrompido manualmente.", "info");
                }}
                className="group flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-red-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>Encerrar Pausa</span>
              </button>
            </div>
          )}
        </section>

        {/* CARD: AGENDAR INÍCIO AUTOMÁTICO */}
        <section className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl shadow-2xl space-y-8 flex flex-col">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight">Agendamento</h2>
          </div>

          {!scheduledTimer ? (
            <div className="space-y-6 flex-1">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Começar em (Minutos)</label>
                  <input 
                    type="number"
                    value={delayMinutes}
                    onChange={(e) => setDelayMinutes(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Duração da Pausa</label>
                  <select 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-bold appearance-none cursor-pointer"
                    id="schedule-duration"
                  >
                    <option value="10">10 Minutos</option>
                    <option value="15" defaultValue="15">15 Minutos</option>
                    <option value="20">20 Minutos</option>
                  </select>
                </div>
              </div>
              <button 
                onClick={() => {
                  const duration = Number((document.getElementById('schedule-duration') as HTMLSelectElement).value);
                  schedulePause(Number(delayMinutes), duration);
                }}
                className="group w-full bg-indigo-600 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 active:scale-95 transition-all mt-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10">Agendar Agora</span>
              </button>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 py-10">
              <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-full px-10 py-5 flex items-center space-x-6">
                <div className="w-4 h-4 bg-indigo-500 rounded-full animate-ping"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white italic">{formatTime(scheduledTimer.remaining)}</span>
                  <span className="text-[7px] font-black text-indigo-400 uppercase tracking-widest">Para o Início</span>
                </div>
              </div>
              <p className="text-center text-slate-400 text-xs font-medium max-w-[240px] leading-relaxed">
                Relaxe. Sua pausa começará automaticamente assim que o contador chegar a zero.
              </p>
              <button 
                onClick={() => {
                  setScheduledTimer(null);
                  onNotify("Agendamento Removido", "O início automático foi cancelado.", "info");
                }}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-red-500 transition-colors"
              >
                Cancelar Agendamento
              </button>
            </div>
          )}
        </section>
      </div>

      <div className="mt-12 bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
         <div className="relative z-10 flex items-center justify-between">
            <div className="space-y-2">
               <h3 className="text-base font-black text-white uppercase italic tracking-widest">Protocolo de Descanso</h3>
               <p className="text-xs text-slate-500 font-medium max-w-xl">
                 O uso de pausas regulares aumenta a eficiência em até 40%. Nosso sistema notifica você faltando <span className="text-white">30 segundos</span> para garantir um retorno tranquilo às atividades.
               </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-12">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HomeView;
