import { Button } from "./style";

export function ButtonStandard(props: {title: string | undefined}){
    return(
        <Button>{props.title}</Button>
    )
}