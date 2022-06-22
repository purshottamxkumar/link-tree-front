import React from "react";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormik } from "formik";
import "./LinkCard.css";
import { useState, useEffect, useRef } from "react";

/*switch material ui inbuild handler */
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

/* Error handling of form */
const validate = (values) => {
  const errors = {};
  if (!values.label) {
    errors.label = "Required";
  } else if (values.label.length > 20) {
    errors.firstName = "Must be 20 characters or less";
  }

  if (!values.link) {
    errors.link = "Required";
  }

  return errors;
};

const Linkcard = () => {
  const [labelActive, setLabelActive] = useState(false);
  const [linkActive, setLinkActive] = useState(false);
  const labelRef = useRef(null);
  const linkRef = useRef(null);
  useEffect(() => {
    if (linkActive) linkRef.current.focus();
    if (labelActive) labelRef.current.focus();
  }, [linkActive, labelActive]);
  const formik = useFormik({
    initialValues: {
      label: "",
      link: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="link-wrapper">
      <form
        action="submit"
        className="link-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="input-field">
          <div className="input-wrapper">
            <input
              type="text"
              name="label"
              placeholder="Enter Title"
              className={`label-input label-input${
                labelActive ? "-active" : "-disabled"
              }`}
              ref={labelRef}
              value={formik.values.label}
              onChange={formik.handleChange}
              onBlur={() => setLabelActive(false)}
            />
            <button
              className={`label${
                labelActive ? "-disabled" : "-active"
              } button-start`}
              onClick={() => {
                setLabelActive(true);
              }}
            >
              {formik.values.label}
            </button>
            <div className={`label${labelActive ? "-disabled" : "-active"}`}>
              <EditIcon onClick={() => setLabelActive(true)} />
            </div>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Link"
              name="link"
              ref={linkRef}
              className={`link-input link-input${
                linkActive ? "-active" : "-disabled"
              }`}
              onChange={formik.handleChange}
              value={formik.values.link}
              onBlur={() => {
                setLinkActive(false);
              }}
            />
            <button
              className={`link${
                linkActive ? "-disabled" : "-active"
              } button-start`}
              onClick={() => {
                setLinkActive(true);
              }}
            >
              {formik.values.link}
            </button>
            <div
              className={`icon-edit link${
                linkActive ? "-disabled" : "-active"
              }`}
            >
              <EditIcon
                onClick={() => {
                  setLinkActive(true);
                }}
              />
            </div>
          </div>
        </div>
        <div className="switch">
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          />
        </div>
      </form>
      <div className="link-bottom">
        <div className="others-field"></div>
        <div className="delete-button">
          <DeleteIcon onClick={() => formik.handleSubmit()} />
        </div>
      </div>
    </div>
  );
};

export default Linkcard;
