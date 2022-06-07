import React from 'react'
import { Controller } from 'react-hook-form';
import NumberFormat from "react-number-format";
import Input from '../../organisms/Input/Input';

const CurrencyWrapper = React.forwardRef(({ name, onBlur, onChange, useFormHook }: any, ref) => {
  return (
    <NumberFormat
      onBlur={onBlur}
      thousandSeparator={true}
      value={useFormHook.watch(name)}
      onValueChange={(values) => {
        onChange({
          target: {
            name: name,
            value: values.floatValue,
          },
        });
      }}
      prefix="$ "
    />
  )
});

const CurrencyInput = ({ name, useFormHook, rules }) => {
  return (
    <Controller
      name={name}
      control={useFormHook.control}
      render={() => (
        <Input
          name={name}
          rules={rules}
          useFormHook={useFormHook}
          inputComponent={
            (props) => <CurrencyWrapper useFormHook={useFormHook} {...props} />
          }
        />
      )}
    />
  )
}

export default CurrencyInput