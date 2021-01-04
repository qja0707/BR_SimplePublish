import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const textInputNormal = "#fafbfc";
const textInputDark = "#e1e4e8";
const normalBgc = "white";
const overBgc = "blue";

const normalTextColor = "black";
const overTextColor = "white";

function SelectButton(props) {
  const [textInputBGC, setTextInputBGC] = useState(textInputNormal);
  const [selectedValue, setSelectedValue] = useState(props.values[0]);
  const [optionBgc, setOptionBgc] = useState(
    props.values.map((item) => {
      return normalBgc;
    })
  );
  const [optionText, setOptionText] = useState(
    props.values.map((item) => {
      return normalTextColor;
    })
  );

  // const [isOpen, setIsOpen] = useState(props.isOpen);
  return (
    <View>
      <div
        onMouseOver={() => {
          setTextInputBGC(textInputDark);
        }}
        onMouseOut={() => {
          setTextInputBGC(textInputNormal);
        }}
      >
        <TouchableOpacity
          style={{
            width: 126,
            height: 33,
            backgroundColor: textInputBGC,
            borderColor: "#e1e4e8",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            flexDirection: "row",
          }}
          onPress={() => {
            props.setIsOpen(!props.isOpen);
          }}
        >
          <Text>{selectedValue}</Text>
        </TouchableOpacity>
      </div>
      {props.isOpen ? (
        <View style={{ position: "absolute", top: 43 }}>{makeOption()}</View>
      ) : null}
    </View>
  );
  function makeOption() {
    return (
      <View
        style={{
          borderColor: "#e1e4e8",
          borderRadius: 6,
          borderWidth: 1,
          overflow: "hidden",
          zIndex: 99,
        }}
      >
        {props.values.map((item, index) => {
          return (
            <div
              onMouseOver={() => {
                let newBgc = props.values.map((item) => {
                  return normalBgc;
                });
                newBgc[index] = overBgc;
                setOptionBgc(newBgc);
                let newText = props.values.map((item) => {
                  return normalTextColor;
                });
                newText[index] = overTextColor;
                setOptionText(newText);
              }}
            >
              <TouchableOpacity
                style={{
                  width: 300,
                  height: 36,
                  backgroundColor: optionBgc[index],
                  justifyContent: "center",
                }}
                onPress={() => {
                  setSelectedValue(item);
                  props.setIsOpen(false);
                }}
              >
                <Text style={{ color: optionText[index], paddingLeft: 10 }}>
                  {selectedValue == item ? "V" : null} {item}
                </Text>
              </TouchableOpacity>
            </div>
          );
        })}
      </View>
    );
  }
}

export default SelectButton;
