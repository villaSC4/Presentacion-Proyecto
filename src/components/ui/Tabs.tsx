import React from 'react';
import { motion } from 'framer-motion';

export interface TabOption {
  id: string;
  label: string;
  count?: number;
}

interface TabsProps {
  tabs: TabOption[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap gap-2 p-1.5 bg-[#EFE7DD] rounded-full border border-[#CBB5A1] max-w-max mx-auto ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative px-5 py-2.5 text-xs sm:text-sm font-bold transition-colors duration-200 rounded-full cursor-pointer z-10 ${
              isActive ? 'text-white font-bold' : 'text-[#8C7D75] hover:text-[#4A3E3D]'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabBadge"
                className="absolute inset-0 bg-[#B88A75] rounded-full -z-10 shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {tab.label}
              {tab.count !== undefined && (
                <span className={`px-1.5 py-0.5 text-[10px] rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#CBB5A1]/40 text-[#4A3E3D]'}`}>
                  {tab.count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};
