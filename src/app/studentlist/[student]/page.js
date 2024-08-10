"use client";
import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  // username: yup.string().required("Username is required"),
  email: yup.string().email("Enter proper email").required("email require"),
});
const Student = ({ params }) => {
  // const [user,setUser] = useState(""
  // )
  // const [Password,setPassword] =useState("")
  // const[userErr,setUserErr] = useState(false);
  // function userHandler(e){
  //     let item = e.target.value;
  //     if(item.length <3){
  //         setUserErr(true)
  //     }
  //     else setUserErr(false)

  //     setUser(item)
  // }
  // function handleLogin(e){
  //     e.preventDefault()
  //     if(user.length > 0 && Password != ''){
  //         alert("all Good")
  //     }
  //     else alert("Not good")
  // }
  // function passwordHandler(e){
  //     let item = e.target.value;
  //     setPassword(item)
  // }

  const form = useForm({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        username: data.name,
        password: "",
        email: "",
        social: {
          facebook: "",
          instagram: "",
        },
        phoneNumbers: ["", ""],
        phNumbers: [{ number: "" }],
        age: 0,
      };
    },
    resolver:yupResolver(schema),
    mode: "onBlur",
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
  } = form;
  const { errors, isDirty, isSubmitted, isSubmitting } = formState;
  console.log("---submit", isSubmitted);
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });
  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };
  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleGetValues = () => {
    console.log("---", getValues("social"));
  };
  const handleSetValues = () => {
    setValue("username", "", { shouldDirty: true });
  };
  const onError = (errors) => {
    console.log("error", errors);
  };
  useEffect(() => {
    if (isSubmitted) {
      reset();
    }
  }, [isSubmitted, reset]);
  return (
    <div>
      <h1>Student details : {params.student}</h1>
      {/* <h2>{JSON.stringify(watchUsername) }</h2> */}
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <input
          type="text"
          id="username"
          placeholder="Enter User Id"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        <p>{errors.username?.message}</p>
        <br></br>
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          {...register("email")}
        />
         <p>{errors.email?.message}</p>
        <br></br>
        <input
          type="text"
          id="password"
          placeholder="Enter User Password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            validate: (fieldvalue) => {
              return fieldvalue !== "123" || "Enter  different password";
            },
          })}
        />
        <p>{errors.password?.message}</p>
        <br></br>
        <input
          type="text"
          id="facebook"
          placeholder="Enter facebook"
          {...register("social.facebook", {
            disabled: watch("password") === "",
          })}
        />
        <br></br>
        <input
          type="text"
          id="instagram"
          placeholder="Enter instagram"
          {...register("social.instagram")}
        />
        <br></br>
        <input
          type="text"
          id="primary-phone"
          placeholder="Enter Primary number"
          {...register("phoneNumbers.0")}
        />
        <br></br>
        <input
          type="text"
          id="secondary-phone"
          placeholder="Enter Secondary number"
          {...register("phoneNumbers.1")}
        />
        <br></br>
        <label>List of phone number</label>
        <div>
          {fields.map((field, index) => (
            <div className="" key={field.id}>
              <input type="text" {...register(`phNumbers.${index}.number`)} />
              {index > 0 && (
                <button onClick={() => remove(index)}>Remove</button>
              )}
            </div>
          ))}
        </div>
        <button onClick={() => append({ number: "" })}>Add</button>
        <br></br>
        <input
          type="number"
          id="age"
          placeholder="Enter Age"
          {...register("age", { valueAsNumber: true })}
        />
        <br></br>
        <button type="submit" disabled={!isDirty || isSubmitting}>
          Login
        </button>
        <br></br>
        <button onClick={() => reset()}>Reset</button>
        <button type="button" onClick={handleGetValues}>
          Get values
        </button>
        <button type="button" onClick={handleSetValues}>
          Set values
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Student;
