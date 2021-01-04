import { useState } from "react";

function CustomLink(props) {
  const textUnderLine = { textDecorationLine: "underLine" };
  const textNone = { textDecorationLine: "none" };
  const [hrefStyle, setHrefStyle] = useState(textNone);
  return (
    <a
      style={hrefStyle}
      href={props.href}
      onMouseOver={() => {
        setHrefStyle(textUnderLine);
      }}
      onMouseOut={() => {
        setHrefStyle(textNone);
      }}
    >
      {props.children}
    </a>
  );
}

export default CustomLink;
