/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtondefaultfalseprimaryProps } from "./Buttondefaultfalseprimary";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UIEditNoteOverridesProps = {
    UIEditNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Edit Note"?: PrimitiveOverrideProps<TextProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ViewProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField3997711?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3997712?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3997713?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3997714?: PrimitiveOverrideProps<TextFieldProps>;
    "Button/default/false/primary"?: ButtondefaultfalseprimaryProps;
} & EscapeHatchProps;
export declare type UIEditNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    nx?: any;
} & {
    overrides?: UIEditNoteOverridesProps | undefined | null;
}>;
export default function UIEditNote(props: UIEditNoteProps): React.ReactElement;
