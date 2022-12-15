import { forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    register: UseFormRegisterReturn;
}

// export const Input = forwardRef<HTMLInputElement, IInputProps>(
//     ({ label, id, ...rest }, ref) => {
//     return(
//         <>
//             <label htmlFor={id}>{label}</label>
//             <input type="text" id={id} ref={ref} {...rest} />
//         </>
//     )
// })

export const Input = ({ label, id, register, ...rest }: IInputProps) => {
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} {...register} {...rest} />
        </>
    )
}