import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
function MouseOverButton(props) {
  const mouseOverBackgroundColor = props.mouseOverBackgroundColor;
  const backgroundColor = props.backgroundColor;

  const [bgc, setBgc] = useState(backgroundColor);
  return (
    <div
      onMouseOver={() => {
        setBgc(mouseOverBackgroundColor);
      }}
      onMouseOut={() => {
        setBgc(backgroundColor);
      }}
    >
      <TouchableOpacity
        style={[
          props.style,
          {
            backgroundColor: bgc,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        {props.children}
      </TouchableOpacity>
    </div>
  );
}

export default MouseOverButton;
