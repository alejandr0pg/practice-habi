import React from 'react'
import { useMobileMediaQuery } from '../../../hooks/MediaQueryHook';
import Button from '../../atoms/Button/Button'
import HeaderNavigation from '../../molecules/headerNavigation/HeaderNavigation'
import styles from './SellHouseForm.module.scss';

function SellHouseForm({ onSubmit, children, onSaveDraft, useFormHook }) {
  const { handleSubmit } = useFormHook;
  const isMobile = useMobileMediaQuery();

  return (
    <React.Fragment>
      <header>
        <HeaderNavigation color='blue'>
          <Button size='middle' onClick={onSaveDraft}>
            💾{!isMobile && ` Guardar progreso`}
          </Button>
        </HeaderNavigation>
      </header>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {children}
        </form>
      </div>
    </React.Fragment>
  )
}

export default SellHouseForm