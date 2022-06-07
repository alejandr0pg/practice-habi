import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

interface IProps {
  children: React.ReactNode;
  size?: 'small' | 'middle' | 'default';
  onClick?: () => void;
  to?: string;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
  color?: 'default' | 'primary' | 'gray';
  bordered?: boolean
}

const Button: React.FunctionComponent<IProps> = ({
  to,
  onClick,
  children,
  size = 'default',
  disabled,
  type = 'button',
  color = 'default',
  bordered
}) => {
  const className = `${styles.button} ${styles[`btn-${size}`]} ${styles[`btn-color-${color}`]} ${bordered ? 'bordered' : ''}`;

  const renderChildren = () => (
    <span>
      <div>{children}</div>
    </span>
  )

  return (
    <React.Fragment>
      {to && (
        <Link {...{ to, className }}>
          {renderChildren()}
        </Link>
      )}

      {!to && (
        <button {...{ onClick, disabled, className, type }}>
          {renderChildren()}
        </button>
      )}
    </React.Fragment>
  )
}

export default Button