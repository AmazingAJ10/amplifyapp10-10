/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { API } from "aws-amplify";
import { createNote } from "../graphql/mutations";
import MyIcon from "./MyIcon";
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
import Buttondefaultfalseprimary from "./Buttondefaultfalseprimary";
export default function UINewNote(props) {
  const { note, overrides, ...rest } = props;
  const [
    textFieldThreeEightFourSevenThreeFourOneFiveValue,
    setTextFieldThreeEightFourSevenThreeFourOneFiveValue,
  ] = useState("");
  const [
    textFieldThreeEightFourSevenThreeFourOneFourValue,
    setTextFieldThreeEightFourSevenThreeFourOneFourValue,
  ] = useState("");
  const [
    textFieldThreeEightFourSevenThreeFourOneSixValue,
    setTextFieldThreeEightFourSevenThreeFourOneSixValue,
  ] = useState("");
  const [
    textFieldThreeNineNineOneFiveTwoNineValue,
    setTextFieldThreeNineNineOneFiveTwoNineValue,
  ] = useState("");
  const editProfileOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonSlashdefaultSlashfalseSlashprimaryOnClick = async () => {
    await API.graphql({
      query: createNote.replaceAll("__typename", ""),
      variables: {
        input: {
          description: textFieldThreeEightFourSevenThreeFourOneFiveValue,
          name: textFieldThreeEightFourSevenThreeFourOneFourValue,
          author: textFieldThreeEightFourSevenThreeFourOneSixValue,
          image: textFieldThreeNineNineOneFiveTwoNineValue,
        },
      },
    });
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="616px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UINewNote")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            editProfileOnClick();
          }}
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="New Note"
            {...getOverrideProps(overrides, "New Note")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <View
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="48px"
            padding="0px 0px 0px 0px"
            backgroundImage="linear-gradient(-90deg, rgba(255,0,0,1), rgba(255,255,255,0))"
            {...getOverrideProps(overrides, "image")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload New Image"
            {...getOverrideProps(overrides, "Upload New Image")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Note Name"
            placeholder="note name"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFourSevenThreeFourOneFourValue}
            onChange={(event) => {
              setTextFieldThreeEightFourSevenThreeFourOneFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38473414")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Description"
            placeholder="blah blah"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFourSevenThreeFourOneFiveValue}
            onChange={(event) => {
              setTextFieldThreeEightFourSevenThreeFourOneFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38473415")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="link"
            placeholder="https://link.com"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeNineNineOneFiveTwoNineValue}
            onChange={(event) => {
              setTextFieldThreeNineNineOneFiveTwoNineValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField3991529")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="user"
            placeholder="@user"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFourSevenThreeFourOneSixValue}
            onChange={(event) => {
              setTextFieldThreeEightFourSevenThreeFourOneSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38473416")}
          ></TextField>
        </Flex>
        <Buttondefaultfalseprimary
          display="flex"
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(78,165,202,1)"
          onClick={() => {
            buttonSlashdefaultSlashfalseSlashprimaryOnClick();
          }}
          {...getOverrideProps(overrides, "Button/default/false/primary")}
        ></Buttondefaultfalseprimary>
      </Flex>
    </Flex>
  );
}
