import React from "react";
import EditIcon from "@mui/icons-material/Edit";
const EditButton = (props) => {
  const { Active, style, setActive, type, value, initial } = props;
  const fontWeight = style.fontWeight;
  return (
    <>
      <button
        className={`${type}${Active ? "-disabled" : "-active"} button-start`}
        onClick={() => {
          setActive(true);
        }}
        style={style}
      >
        {value ? value : initial}
      </button>
      <div className={`icon-edit ${type}${Active ? "-disabled" : "-active"}`}>
        <EditIcon
          onClick={() => {
            setActive(true);
          }}
          style={{
            fontSize: "18px",
            display: "flex",
            fontWeight: fontWeight,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "3px",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
};

export default EditButton;
