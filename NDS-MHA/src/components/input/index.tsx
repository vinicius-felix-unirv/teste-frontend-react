import { ContainerInput } from "./style";

export function Input(props: 
    {label: string | undefined, type: string | undefined, placeholder: string | undefined, id: string | undefined}){
    return(
        <ContainerInput>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} id={props.id}/>
        </ContainerInput>
    )
}