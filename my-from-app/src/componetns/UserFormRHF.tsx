import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  age: number;
  bio?: string;
};


export const UserFormRHF = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = ( data: FormData ) => {
    console.log("Form submitted withRHF:", data);
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit)}>
      <div> 
        <label>Name:</label>
        <input {...register("name", { required: "Name is requierd" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input {...register("email", { required: "Email is requierd" })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div >
        <label>Age:</label>
        <input 
          type="number"
         {...register("age", { required: "Age is requierd" , valueAsNumber: true })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <label>Bio:</label>
        <textarea {...register("bio")} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
