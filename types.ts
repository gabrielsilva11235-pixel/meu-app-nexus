
export interface Game {
  id: string;
  title: string;
  image: string;
  background: string;
  lastPlayed?: string;
  playtime?: string;
  status?: 'installed' | 'updating' | 'ready';
  genre?: string[];
}

export type NavTab = 'HOME' | 'INICIO' | 'INFORMATIVOS' | 'PAGINAS' | 'COMMUNITY' | 'PROFILE' | 'MEDIA' | 'SETTINGS' | 'POWER' | 'FRIENDS' | 'SIMULADOR' | 'CONTA' | 'BENEFITS' | 'SUPPORT' | 'SETORES' | 'ADMIN_INFORMATIVOS' | 'MESSAGES' | 'IMAGE_MANAGER';
