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
        <label htmlFor="name">Name:</label>
        <input id="name" autoComplete="name" {...register("name", { required: "Name is required" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" autoComplete="email" {...register("email", { required: "Email is required" })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div >
        <label htmlFor="age">Age:</label>
        <input id="age"
          type="number"
         {...register("age", { required: "Age is required" , valueAsNumber: true })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" {...register("bio")} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
