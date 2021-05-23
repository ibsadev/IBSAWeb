import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";


export default function NewSignIn() {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    // return (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <input {...register("firstName")} />
    //       <select {...register("gender")}>
    //         <option value="female">female</option>
    //         <option value="male">male</option>
    //         <option value="other">other</option>
    //       </select>
    //       <button type="submit">sign in</button>
    //     </form>
    //   );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                placeholder = "First Name"
                {...register("firstName", { required: true })}
                key={1} />
            <input 
                placeholder = "Last Name"
                {...register("lastName", { required: true })} />
            <input 
                placeholder = "Email"
                {...register("email", { 
                    required: true,
                    // validate: {
                    //     validEmail : value => value.includes("@"),
                    //     isUCLAEmail : value => value.includes("g.ucla.edu") || value.includes("ucla.edu")
                    // }
                })} />
            <input 
                placeholder = "Password" 
                {...register("password", { required: true })} />
            <input 
                placeholder = "Major"
                {...register("major")} />
            <input 
                placeholder = "Year of Graduation"
                {...register("gradYear")} />
            <input 
                placeholder = "Phone"
                {...register("phone")} />
            <input type="submit" />
        </form>
    )
}
