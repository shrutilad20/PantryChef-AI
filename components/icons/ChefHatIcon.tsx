
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChefHatIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14 21h-4a2 2 0 0 1-2-2v-3h8v3a2 2 0 0 1-2 2Z" />
        <path d="M18 16h-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v1a2 2 0 0 1-2 2H8" />
        <path d="M12 2v5.5" />
        <path d="M12 7.5c2.33 0 4.5-1.5 5.5-3.5-1 2-3 3.5-5.5 3.5Z" />
        <path d="M12 7.5c-2.33 0-4.5-1.5-5.5-3.5 1 2 3 3.5 5.5 3.5Z" />
    </svg>
);
