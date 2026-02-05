
import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  isFocused?: boolean;
  onFocus?: () => void;
  onClick?: () => void;
  variant?: 'portrait' | 'landscape';
}

const GameCard: React.FC<GameCardProps> = ({ game, isFocused, onFocus, onClick, variant = 'portrait' }) => {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onFocus}
      className={`
        relative overflow-hidden cursor-pointer transition-all duration-300 ease-out
        ${isFocused 
          ? 'scale-105 z-10 ring-4 ring-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]' 
          : 'scale-100 opacity-80'
        }
        ${variant === 'portrait' ? 'aspect-[2/3] w-48' : 'aspect-video w-80'}
        rounded-sm bg-slate-800
      `}
    >
      <img
        src={variant === 'portrait' ? game.image : game.background}
        alt={game.title}
        className="w-full h-full object-cover"
      />
      <div className={`
        absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent
        transition-opacity duration-300
        ${isFocused ? 'opacity-100' : 'opacity-0'}
      `}>
        <h3 className="text-sm font-bold truncate">{game.title}</h3>
        <p className="text-[10px] text-slate-300">
          {game.lastPlayed ? `Last played: ${game.lastPlayed}` : 'Ready to play'}
        </p>
      </div>
      
      {game.status === 'ready' && isFocused && (
        <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1 shadow-md">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default GameCard;
