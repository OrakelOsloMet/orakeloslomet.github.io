import {FormElementType} from "../constants/constants";

export type InputConfig = ITextConfig | IRadioConfig | ISelectConfig;

/* ----- Base ----- */

interface IInputConfig {
    name: string;
}

/* ----- Text Input ----- */

export interface ITextConfig extends IInputConfig{
    type: FormElementType.TEXT;
    placeholder: string;
    validation: IInputValidation
}

interface IInputValidation {
    minLength: number;
    errorMessage: string;
}

/* ----- Checkbox Input ----- */

export interface IRadioConfig extends IInputConfig{
    type: FormElementType.RADIO;
    buttons: Array<IRadioButton>;
}

export interface IRadioButton {
    label: string;
    value: number;
    defaultChecked: boolean;
}

/* ----- Select ----- */

export interface ISelectConfig extends IInputConfig{
    type: FormElementType.SELECT;
    options: Array<ISelectOptions>;
}

interface ISelectOptions {
    value: number | string | boolean | object;
    displayValue: string;
}