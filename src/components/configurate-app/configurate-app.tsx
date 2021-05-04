import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectLocale } from '../../app/shared/configuration';
import { translations } from '../../translations';

interface ConfigurateAppProps {
  children: (
    configuration: {
      locale: string;
    },
    translations: {
      [key: string]: string;
    },
  ) => ReactElement;
}

export const ConfigurateApp = ({ children }: ConfigurateAppProps) => {
  const locale = useSelector(selectLocale);

  return <>{children({ locale }, translations[locale])}</>;
};
