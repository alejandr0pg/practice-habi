import React from 'react';
import { Controller } from 'react-hook-form';
import Input from '../../organisms/Input/Input';

const FileWrapper = React.forwardRef(({ name, onChange, value, multiple }: any, ref) => {
  return (
    <input
      type="file"
      name={name}
      onChange={(e) => {
        const files = e.target.files;

        let filesFormated = [];

        for (let i = 0; i < files.length; i++) {
          const file = files[i];

          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const base64 = reader.result;

            filesFormated.push({
              ...file,
              base64
            });

            if (filesFormated.length === files.length) {
              onChange({
                target: {
                  name: name,
                  value: multiple ? filesFormated : filesFormated[0],
                },
              })
            }
          }
        }
      }}
    />
  )
});

const File = ({ name, useFormHook, rules, value, multiple }) => {
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
              <FileWrapper
                {...props}
                name={name}
                value={value}
                multiple={multiple}
              />
            )
          }
        />
      )}
    />
  );
};

export default File;