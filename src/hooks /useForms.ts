import React, { useState } from "react"

interface IForm {
  name: string,
  age: number,
  password: string
}

export const useForms = (): [IForm, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [form, setForm] = useState<IForm>({
    name: "",
    age: 0,
    password: ""
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'age') {
      setForm({ ...form, [e.target.name]: Number(e.target.value) })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }
  const onSubmit = (): void => {
    console.log(form);
  }

  return [form, onChange, onSubmit]
}