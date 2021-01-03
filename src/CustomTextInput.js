import { useState } from "react";
import { TextInput, View } from "react-native";

const textInputNormal = "#fafbfc";
const textInputFocus = "#ffffff";
const focusColor = "#005cc5";
const blurColor = "#e1e4e8";
function CustomTextInput(props) {
  const [bgc, setBgc] = useState(textInputNormal);
  const [borderOut, setBorderOut] = useState(0);
  const [borderColor, setBorderColor] = useState(blurColor);
  return (
    <View
      style={{
        borderWidth: borderOut,
        borderRadius: 9,
        borderColor: "#79b8ff",
      }}
    >
      <TextInput
        style={[
          props.style,
          {
            // width: 100,
            height: 33,
            backgroundColor: bgc,
            // padding:2,
            paddingLeft: 10,
            borderColor: borderColor,
            borderWidth: 1,
            borderRadius: 6,
            outlineWidth: 0,
          },
        ]}
        onFocus={() => {
          setBgc(textInputFocus);
          setBorderOut(3);
          setBorderColor(focusColor);
        }}
        onBlur={() => {
          setBgc(textInputNormal);
          setBorderOut(0);
          setBorderColor(blurColor);
        }}        
      ></TextInput>
    </View>
  );
}

export default CustomTextInput;
