'use client';

import { useLocale } from 'next-intl';
import { cn } from '@sevalink/utils';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const locale = useLocale();

  return (
    <select
      value={locale}
      onChange={(e) => {
        // Handle language change - in a real app, you'd navigate to the new locale
        const newLocale = e.target.value;
        window.location.pathname = `/${newLocale}`;
      }}
      className={cn(
        'bg-background border border-border rounded-lg px-3 py-2 text-sm font-medium cursor-pointer hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary',
        className
      )}
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
    </select>
  );
};

