import React, { forwardRef, ChangeEvent } from 'react';
import clsx from 'clsx';

import { Icon, IconNames } from '../icon';

import styles from './checkbox.module.scss';

export interface CheckboxProps {
  disabled?: boolean;
  className?: string;
  name?: string;
  id?: string;
  testId?: string;
  labelClassName?: string;
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { testId, id, name, labelClassName, className, label, onChange, checked, defaultChecked, disabled, children },
    ref,
  ) => (
    <label
      className={clsx(styles.checkboxBox, className, { [styles.disabled]: disabled })}
      htmlFor={id}
      data-test-id={testId}
    >
      <input
        id={id}
        name={name}
        ref={ref}
        className={styles.checkbox}
        onChange={onChange}
        defaultChecked={defaultChecked}
        checked={checked}
        type="checkbox"
      />
      <div className={styles.iconWrapper}>
        {checked ? (
          <Icon className={styles.icon} name={IconNames.CHECKBOX_CHECKED} />
        ) : (
          <Icon className={styles.icon} name={IconNames.CHECKBOX} />
        )}
      </div>
      <div className={clsx(labelClassName, styles.label)}>{children || label}</div>
    </label>
  ),
);
