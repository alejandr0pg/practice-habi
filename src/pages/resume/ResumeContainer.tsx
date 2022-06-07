/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import HeaderNavigation from '../../components/molecules/headerNavigation/HeaderNavigation';
import styles from "./ResumeContainer.module.scss";
import StructureForm from "../../constants/formStructure";
import { TypesInput } from '../../interfaces/IRenderInputProps.interface';
import NumberFormat from 'react-number-format';
import FooterButtonList from '../../components/atoms/FooterButtonList/FooterButtonList';
import { useDispatch } from 'react-redux';
import { storeDraft } from '../../slices/rootSlice.slice';

const RenderItem = ({ item, state }) => {
  const renderByType = {
    [TypesInput.Switch]: () => state[item.name] ? `Si` : `No`,
    [TypesInput.Currency]: () => (
      <NumberFormat
        thousandSeparator={true}
        displayType='text'
        value={state[item.name]}
        prefix="$ "
      />
    ),
    [TypesInput.File]: () => (
      <img className={styles.previewImage} src={`${state[item.name].base64}`} />
    )
  }

  if (Object.keys(renderByType).includes(item.type)) {
    return renderByType[item.type]();
  }

  if (item.options) {
    return item.options.map(option => (
      <div>
        <strong>{option.label}: </strong>
        <span>
          {state[item.name][option.value] ? `✅` : `❌`}
        </span>
      </div>
    ))
  }

  return state[item.name]
}

const ResumeContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className={`container`}>
      <header>
        <HeaderNavigation color='blue'>
          <Button size='middle' to="/">
            ⬅️ Volver
          </Button>
        </HeaderNavigation>
      </header>

      <div className={styles.container}>
        <h1 className={styles.resumeTitle}>Resumen de tus datos</h1>
        <div className={styles.infoContainer}>
          <section>
            {StructureForm.sort((a, b) => a.order - b.order).map(item => (
              <div>
                <h2>{item.label}</h2>
                <RenderItem item={item} state={state} />
              </div>
            ))}
          </section>

          <footer>
            <FooterButtonList>
              <Button
                color="primary"
                onClick={() => {
                  dispatch(storeDraft(state))
                  navigate("/sell-house");
                }}
              >
                ✏️ Modificar
              </Button>
            </FooterButtonList>
          </footer>
        </div>
      </div>

    </div>
  )
}

export default ResumeContainer