import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../schema/userSchema";
import type { UserSchema } from "../../schema/userSchema";

export const UserFormRHFZod = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),  
  });

  const onSubmit = ( data: UserSchema ) => {
    console.log("Zod + RHF Data:", data);
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit)}>
      <div> 
        <label htmlFor="name">Name:</label>
        <input id="name" autoComplete="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" autoComplete="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div >
        <label htmlFor="age">Age:</label>
        <input id="age"
          type="number"
         {...register("age")}
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
