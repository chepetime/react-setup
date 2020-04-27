import React from "react";
import { useForm } from "react-hook-form";

function FormLogin() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const loginForm = [
    {
      name: "username",
      type: "text",
      label: "Username",
      placeholder: "Username",
      defaultValue: "",
      validations: { required: true, minLength: 5 },
      errorMessage: () => <span>This field is required</span>,
    },
    {
      name: "password",
      type: "text",
      label: "Contraseña",
      placeholder: "Contraseña",
      defaultValue: "",
      validations: { required: true, minLength: 8 },
      errorMessage: () => <span>This field is required</span>,
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginForm.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              defaultValue={field.defaultValue}
              ref={register(field.validations)}
            />
            {errors[field.name] && field.errorMessage()}
          </div>
        ))}

        <button type="submit">Login</button>
      </form>
      <br />
    </div>
  );
}

export default FormLogin;
