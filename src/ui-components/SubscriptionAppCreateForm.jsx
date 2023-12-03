/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createSubscriptionApp } from "../graphql/mutations";
export default function SubscriptionAppCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    SubscriptionName: "",
    NextPayment: "",
    Cost: "",
    Logo: "",
  };
  const [SubscriptionName, setSubscriptionName] = React.useState(
    initialValues.SubscriptionName
  );
  const [NextPayment, setNextPayment] = React.useState(
    initialValues.NextPayment
  );
  const [Cost, setCost] = React.useState(initialValues.Cost);
  const [Logo, setLogo] = React.useState(initialValues.Logo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSubscriptionName(initialValues.SubscriptionName);
    setNextPayment(initialValues.NextPayment);
    setCost(initialValues.Cost);
    setLogo(initialValues.Logo);
    setErrors({});
  };
  const validations = {
    SubscriptionName: [],
    NextPayment: [],
    Cost: [],
    Logo: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          SubscriptionName,
          NextPayment,
          Cost,
          Logo,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createSubscriptionApp.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SubscriptionAppCreateForm")}
      {...rest}
    >
      <TextField
        label="Subscription name"
        isRequired={false}
        isReadOnly={false}
        value={SubscriptionName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SubscriptionName: value,
              NextPayment,
              Cost,
              Logo,
            };
            const result = onChange(modelFields);
            value = result?.SubscriptionName ?? value;
          }
          if (errors.SubscriptionName?.hasError) {
            runValidationTasks("SubscriptionName", value);
          }
          setSubscriptionName(value);
        }}
        onBlur={() => runValidationTasks("SubscriptionName", SubscriptionName)}
        errorMessage={errors.SubscriptionName?.errorMessage}
        hasError={errors.SubscriptionName?.hasError}
        {...getOverrideProps(overrides, "SubscriptionName")}
      ></TextField>
      <TextField
        label="Next payment"
        isRequired={false}
        isReadOnly={false}
        value={NextPayment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SubscriptionName,
              NextPayment: value,
              Cost,
              Logo,
            };
            const result = onChange(modelFields);
            value = result?.NextPayment ?? value;
          }
          if (errors.NextPayment?.hasError) {
            runValidationTasks("NextPayment", value);
          }
          setNextPayment(value);
        }}
        onBlur={() => runValidationTasks("NextPayment", NextPayment)}
        errorMessage={errors.NextPayment?.errorMessage}
        hasError={errors.NextPayment?.hasError}
        {...getOverrideProps(overrides, "NextPayment")}
      ></TextField>
      <TextField
        label="Cost"
        isRequired={false}
        isReadOnly={false}
        value={Cost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SubscriptionName,
              NextPayment,
              Cost: value,
              Logo,
            };
            const result = onChange(modelFields);
            value = result?.Cost ?? value;
          }
          if (errors.Cost?.hasError) {
            runValidationTasks("Cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("Cost", Cost)}
        errorMessage={errors.Cost?.errorMessage}
        hasError={errors.Cost?.hasError}
        {...getOverrideProps(overrides, "Cost")}
      ></TextField>
      <TextField
        label="Logo"
        isRequired={false}
        isReadOnly={false}
        value={Logo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SubscriptionName,
              NextPayment,
              Cost,
              Logo: value,
            };
            const result = onChange(modelFields);
            value = result?.Logo ?? value;
          }
          if (errors.Logo?.hasError) {
            runValidationTasks("Logo", value);
          }
          setLogo(value);
        }}
        onBlur={() => runValidationTasks("Logo", Logo)}
        errorMessage={errors.Logo?.errorMessage}
        hasError={errors.Logo?.hasError}
        {...getOverrideProps(overrides, "Logo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
