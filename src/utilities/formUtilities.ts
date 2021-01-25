import {InputConfig} from "../models/inputModels";
import {Ref} from "react";
import {DeepMap, FieldError} from "react-hook-form";
import {FormElementType} from "../constants/constants";


//Add cases to this function if more input types in need of validation are added.
export const createUseFormRef = (inputConfig: InputConfig, register: any) => {
    let forwardRef: Ref<any> = register;

    switch (inputConfig.type) {
        case FormElementType.TEXT:
            forwardRef = register({
                required: inputConfig.validation.errorMessage,
                minLength: {
                    value: inputConfig.validation.minLength,
                    message: inputConfig.validation.errorMessage
                }
            })
            return forwardRef;

        default:
            return register;
    }
}

export const inputHasError = (errors: DeepMap<Record<string, any>, FieldError>, inputConfig: InputConfig) => {
    let errorInInput = false;
    for (const key of Object.entries(errors)) {
        if (key[0] === inputConfig.name) {
            errorInInput = true;
        }
    }

    return errorInInput;
}