/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubscriptionAppUpdateFormInputValues = {
    SubscriptionName?: string;
    NextPayment?: string;
    Cost?: string;
    Logo?: string;
};
export declare type SubscriptionAppUpdateFormValidationValues = {
    SubscriptionName?: ValidationFunction<string>;
    NextPayment?: ValidationFunction<string>;
    Cost?: ValidationFunction<string>;
    Logo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubscriptionAppUpdateFormOverridesProps = {
    SubscriptionAppUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SubscriptionName?: PrimitiveOverrideProps<TextFieldProps>;
    NextPayment?: PrimitiveOverrideProps<TextFieldProps>;
    Cost?: PrimitiveOverrideProps<TextFieldProps>;
    Logo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubscriptionAppUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubscriptionAppUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    subscriptionApp?: any;
    onSubmit?: (fields: SubscriptionAppUpdateFormInputValues) => SubscriptionAppUpdateFormInputValues;
    onSuccess?: (fields: SubscriptionAppUpdateFormInputValues) => void;
    onError?: (fields: SubscriptionAppUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubscriptionAppUpdateFormInputValues) => SubscriptionAppUpdateFormInputValues;
    onValidate?: SubscriptionAppUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubscriptionAppUpdateForm(props: SubscriptionAppUpdateFormProps): React.ReactElement;
