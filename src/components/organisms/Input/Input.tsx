import React from "react";
import { UseFormReturn } from "react-hook-form";
import styles from "./Input.module.scss";

import { EnumInputTypesCustom } from "./Input.enum";
import { IRenderInputProps } from "../../../interfaces/IRenderInputProps.interface";
import CurrencyInput from '../../atoms/CurrencyInput/CurrencyInput';
import Switch from "../../atoms/Switch/Switch";
import SwitchGroup from "../../atoms/SwitchGroup/SwitchGroup";

interface IProps extends IRenderInputProps {
  value?: any;
  useFormHook: UseFormReturn;
  inputComponent?: (props) => React.ReactNode;
}

const inputByTypes = {
  [EnumInputTypesCustom.Switch]: (props) => <Switch {...props} />,
  [EnumInputTypesCustom.SwitchGroup]: (props) => <SwitchGroup {...props} />,
  [EnumInputTypesCustom.Currency]: (props) => <CurrencyInput {...props} />,
}

const Input: React.FunctionComponent<IProps> = ({
  value,
  name,
  label,
  useFormHook,
  rules,
  type,
  options,
  inputComponent
}) => {
  const { register, formState: { errors } } = useFormHook;

  const haveError = Object.keys(errors).includes(name);
  const isTypeCustom = Object.values(EnumInputTypesCustom).includes(type as any);

  const messagesErrorsGenerals = {
    required: `El campo es requerido`,
    max: `El campo no puede ser mayor de ${rules?.max}`,
  }

  const messagesErrorsByType = {
    email: {
      pattern: `Debes ingresar un correo electrónico valido`
    }
  }

  const getErrorMessage = () => {
    const typeValidation = errors[name].type;

    if (messagesErrorsByType[type] && messagesErrorsByType[type][typeValidation]) {
      return messagesErrorsByType[type][typeValidation];
    }

    return messagesErrorsGenerals[typeValidation]
  }

  const renderInput = () => {
    if (inputComponent) {
      return inputComponent({ ...register(name, rules) });
    }

    if (isTypeCustom) {
      return inputByTypes[type]({
        name,
        label,
        rules,
        useFormHook,
        options,
        value,
        ...register(name, rules)
      });
    }

    return (
      <input
        type={type}
        {...register(name, rules)}
      />
    )
  }

  return (
    <React.Fragment>
      <div className={`${styles.inputContainer} ${haveError ? styles.inputError : ''}`}>
        {label && (
          <label
            className={`${type === EnumInputTypesCustom.SwitchGroup ? styles.centerText : undefined}`}
          >
            {label}
          </label>
        )}
        {renderInput()}
      </div>
      {haveError && !isTypeCustom && (
        <p className={styles.errorMessage}>{getErrorMessage()}</p>
      )}
    </React.Fragment>
  )
};

export default Input