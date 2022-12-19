import { useField } from "formik";
import {StyledLabel,StyledTextInput} from './../components/Styles'

import React from 'react'

export const TextInput=({...props})=>{
    const [field,meta]=useField(props);

    return(
        <div>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            <StyledTextInput {...field} {...props}/>
        </div>
    ) 
}