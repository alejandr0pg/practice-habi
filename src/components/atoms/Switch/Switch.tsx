import React from 'react';
import { Controller } from 'react-hook-form';
import Input from '../../organisms/Input/Input';
import styles from './Switch.module.scss';

const SwitchWrapper = React.forwardRef(({ name, onChange, useFormHook, value }: any, ref) => {
  return (
    <div>
      <input
        className={styles["react-switch-checkbox"]}
        id={`switch-${name}`}
        type="checkbox"
        name={name}
        value={value}
        onChange={(e) => {
          onChange({
            target: {
              name: name,
              value: e.target.checked,
            },
          });
        }}
        checked={useFormHook.watch(name)}
      />
      <label
        className={styles["react-switch-label"]}
        htmlFor={`switch-${name}`}
      >
        <span className={styles[`react-switch-button`]} />
      </label>
    </div>
  )
});

const Switch = ({ label, name, useFormHook, rules, value }) => {
  return (
    <Controller
      name={name}
      control={useFormHook.control}
      render={() => (
        <Input
          value={value}
          name={name}
          rules={rules}
          useFormHook={useFormHook}
          inputComponent={
            (props) => (
              <SwitchWrapper
                {...props}
                name={name}
                label={label}
                value={value}
                useFormHook={useFormHook}
              />
            )
          }
        />
      )}
    />
  );
};

export default Switch;