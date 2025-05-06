
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface TabButtonProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const TabButton = ({ icon: Icon, label, isActive = false, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 px-5 py-3 rounded-md transition-colors",
        isActive 
          ? "bg-white text-igram-pink" 
          : "bg-white/20 text-white hover:bg-white/30"
      )}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );
};

export default TabButton;
