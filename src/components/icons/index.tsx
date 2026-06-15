import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const formatIconName = (iconName: string): string => {
    return iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  };

  const pascalName = formatIconName(name);
  const IconComponent = (
    LucideIcons[name as keyof typeof LucideIcons] ||
    LucideIcons[pascalName as keyof typeof LucideIcons] ||
    LucideIcons.CircleDashed
  ) as React.ComponentType<LucideProps>;

  return <IconComponent {...props} />;
};

export default Icon;
