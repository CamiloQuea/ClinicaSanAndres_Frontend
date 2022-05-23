import React, { useState } from "react";

export const useForm = (initialState: Object = {}): [Object, Function] => {
  const [values, setValues] = useState(initialState);
  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange];
};
