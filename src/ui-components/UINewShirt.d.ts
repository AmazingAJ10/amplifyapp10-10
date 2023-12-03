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
export declare type UINewShirtOverridesProps = {
    UINewShirt?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 443"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    "New Shirt"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4041652?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4041653?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4041655?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4041654?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4041692?: PrimitiveOverrideProps<TextFieldProps>;
    "Button/default/false/primary"?: ButtondefaultfalseprimaryProps;
} & EscapeHatchProps;
export declare type UINewShirtProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UINewShirtOverridesProps | undefined | null;
}>;
export default function UINewShirt(props: UINewShirtProps): React.ReactElement;
