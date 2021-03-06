import React from 'react'
import { UseFormReturn } from 'react-hook-form';
import { useMobileMediaQuery } from '../../../hooks/MediaQueryHook';
import { IRenderInputProps } from '../../../interfaces/IRenderInputProps.interface';
import Input from '../../organisms/Input/Input';
import styles from "./SwitchGroup.module.scss";
import clsx from "clsx";

interface IProps extends IRenderInputProps {
  useFormHook: UseFormReturn;
};

const SwitchInputWrapper = React.forwardRef(({ name, label, value, useFormHook }: any, ref) => {
  return (
    <Input
      useFormHook={useFormHook}
      label={label}
      name={name}
      value={value}
      type="switch"
    />
  )
});

const SwitchGroup: React.FunctionComponent<IProps> = (props) => {
  const { name, options, useFormHook } = props;
  const isMobile = useMobileMediaQuery();

  return (
    <div className={clsx(styles.wrapper, {
      [styles.wrapperMobile]: isMobile
    })}>
      {options?.map(({ value, label }) => (
        <SwitchInputWrapper
          key={`${value}`}
          name={`${name}[${value}]`}
          label={label}
          value={value}
          useFormHook={useFormHook}
        />
      ))}
    </div>
  )
}

export default SwitchGroup