import React, { FC } from 'react';

import { CheckboxChecked } from './icons/checkbox-checked';
import { Checkbox } from './icons/checkbox';

const icons = [Checkbox, CheckboxChecked];

export const Sprite: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'none' }}>
    {icons.map((Icon, index) => (
      <Icon key={index} />
    ))}
  </svg>
);
