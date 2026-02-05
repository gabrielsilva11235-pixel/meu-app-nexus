
import React, { useState } from 'react';
import { GAMES } from '../constants';
import GameCard from './GameCard';

const StoreView: React.FC = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  return (
    <div className="flex-1 flex flex-col p-8 overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black italic tracking-tighter">STORE</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold text-sm">FREE TO PLAY</button>
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-bold text-sm">ON SALE</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GAMES.concat(GAMES).map((game, index) => (
          <GameCard
            key={`${game.id}-${index}`}
            game={game}
            isFocused={focusedIndex === index}
            onFocus={() => setFocusedIndex(index)}
            variant="landscape"
          />
        ))}
      </div>
    </div>
  );
};

export default StoreView;
