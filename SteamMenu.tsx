
import React from 'react';

// NexusMenu (SteamMenu) is deprecated in favor of PersistentSidebar.
// This dummy default export is provided to resolve legacy import errors in components/App.tsx.
interface NexusMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: any) => void;
  activeTab: string;
}

const NexusMenu: React.FC<NexusMenuProps> = () => null;

export default NexusMenu;
