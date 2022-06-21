import React from "react";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./LinkCard.css";
const IOSSwitch = styled((props: SwitchProps) => (
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
const Linkcard = () => {
  return (
    <div className="link-wrapper">
      <form action="submit" className="link-form">
        <div className="input-field">
          <div className="input-wrapper">
            <div className="real-input-title">
              <input
                type="text"
                placeholder="Enter Title"
                className="input-field"
              />
            </div>
            <div className="virtual-display-title">
              <button className="text-edit"></button>
              <div className="icon-edit">
                <EditIcon />
              </div>
            </div>
          </div>
          <div className="input-wrapper">
            <div className="real-input-link">
              <input
                type="text"
                placeholder="Enter Title"
                className="input-field"
              />
            </div>
            <div className="virtual-display-link">
              <button className="text-edit"></button>
              <div className="icon-edit">
                <EditIcon />
              </div>
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
        <div className="others-filed"></div>
        <div className="delete-button">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default Linkcard;
