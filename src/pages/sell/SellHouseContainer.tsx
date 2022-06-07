import React from "react";
import SellHouseForm from "../../components/templates/SellHouseForm/SellHouseForm";
import StructureForm from "../../constants/formStructure";
import { useParams, useNavigate } from 'react-router-dom';
import { Stepper } from "react-form-stepper";
import Button from "../../components/atoms/Button/Button";
import FooterButtonList from "../../components/atoms/FooterButtonList/FooterButtonList";
import { useForm } from "react-hook-form";
import { IFormStructure } from "../../interfaces/IFormStructure.interface";
import Input from "../../components/organisms/Input/Input";
import styles from "./SellHouseContainer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteDraft, storeDraft } from "../../slices/rootSlice.slice";
import { toast } from 'react-toastify';

const structure = StructureForm as IFormStructure[];
const totalSteps = structure.length;

const SellHouseContainer: React.FunctionComponent = () => {
  const { step } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const draft = useSelector((state: any) => state.draft);

  const form = useForm({
    mode: "onChange",
    shouldFocusError: false,
    defaultValues: draft as any
  });

  const { setValue, control, getValues, formState: { isValid } } = form;

  const searchIndex = structure.findIndex(item => item.path === step);
  const currentIndex = (searchIndex !== -1) ? searchIndex : 0;
  const isLast = totalSteps === (currentIndex + 1);
  const isFirst = currentIndex === 0;

  const next = structure[currentIndex + 1];
  const prev = structure[currentIndex - 1];

  const { order, path, ...current } = structure[currentIndex];

  const mapStepsByStructureForm = (structure: IFormStructure[]) => structure
    .sort((a, b) => a.order - b.order)
    .map(({ label }) => ({ label: label as string }))

  const handlePrevStep = () => {
    if (!isFirst) {
      const valuePrevInput = getValues()[prev.name];

      control.unregister(prev.name);

      setValue(prev.name, valuePrevInput);
      navigate(prev.path)
    }
  }

  const handleSubmitForm = (values) => {
    if (!isValid) return;

    if (!isLast) {
      const valuePrevInput = getValues()[next.name];

      control.unregister(next.name);

      setValue(next.name, valuePrevInput || "");
      navigate(next.path);
      return;
    }

    dispatch(deleteDraft())
    navigate('/resume-of-sell-house', {
      state: values
    });
  }

  return (
    <div className={`container ${styles.container}`}>
      <SellHouseForm
        onSubmit={handleSubmitForm}
        onSaveDraft={() => {
          dispatch(storeDraft(getValues()));
          toast.success("Borrador guardado exitosamente");

          setTimeout(() => {
            navigate("/");
          }, 500);
        }}
        useFormHook={form}
      >
        <Stepper
          steps={mapStepsByStructureForm(structure)}
          activeStep={currentIndex}
        />

        <div className={styles.form}>
          <div className={styles.inputContent}>
            <Input useFormHook={form} {...current} />
          </div>

          <FooterButtonList>
            <Button
              disabled={isFirst}
              onClick={handlePrevStep}
              color="gray"
              bordered
            >
              Anterior
            </Button>
            <Button
              type="submit"
              color="primary"
              bordered={!isLast}
              disabled={!isValid}
            >
              {!isLast ? `Siguiente` : `Finalizar`}
            </Button>
          </FooterButtonList>
        </div>
      </SellHouseForm>
    </div>
  );
}

export default SellHouseContainer;
