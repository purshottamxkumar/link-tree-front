import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormik } from "formik";
import "./LinkCard.css";
import { useState, useEffect, useRef } from "react";
import EditButton from "./EditButton";
import { IOSSwitch } from "./iosSwitchconfig";
import axios from "axios";
/*switch material ui inbuild handler */

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

const Linkcard = (props) => {
  const [labelActive, setLabelActive] = useState(false);
  const [linkActive, setLinkActive] = useState(false);
  const labelRef = useRef(null);
  const linkRef = useRef(null);
  const { _id, label, link } = props;
  useEffect(() => {
    if (linkActive) linkRef.current.focus();
    if (labelActive) labelRef.current.focus();
  }, [linkActive, labelActive]);

  const formik = useFormik({
    initialValues: {
      label: label,
      link: link,
      isActive: false,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const deleteLink = async (linkId) => {
    console.log(linkId);
    await axios.delete(`http://localhost:5000/links/delete`, {
      data: {
        linkId,
        userId: "62b5e8b499d84dc7271cf478",
      },
    });
    console.log("deleted");
  };

  const updateLink = async () => {
    await axios.patch(`http://localhost:5000/links/update/${_id}`, {
      label: formik.values.label,
      link: formik.values.link,
      userId: "62b5e8b499d84dc7271cf478",
    });
  };
  return (
    <div className="link-wrapper" key={_id}>
      <form
        action="submit"
        className="link-form"
        onSubmit={(e) => {
          updateLink();
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
              onBlur={() => {
                updateLink();
                setLabelActive(false);
              }}
            />
            <EditButton
              type="label"
              style={{ fontSize: "15px", fontWeight: "600", cursor: "pointer" }}
              Active={labelActive}
              value={formik.values.label}
              setActive={setLabelActive}
              initial="Title"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Link"
              name="link"
              style={{ fontSize: "40" }}
              ref={linkRef}
              className={`link-input link-input${
                linkActive ? "-active" : "-disabled"
              }`}
              onChange={formik.handleChange}
              value={formik.values.link}
              onBlur={() => {
                updateLink();
                setLinkActive(false);
              }}
            />
            <EditButton
              type="link"
              style={{ fontSize: "13px", fontWeight: "600", cursor: "pointer" }}
              Active={linkActive}
              value={formik.values.link}
              initial="Url"
              setActive={setLinkActive}
            />
          </div>
        </div>
        <div className="switch">
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} disabled={true} />}
          />
        </div>
      </form>
      <div className="link-bottom">
        <div className="others-field"></div>
        <div className="delete-button">
          <DeleteIcon onClick={() => deleteLink(_id)} />
        </div>
      </div>
    </div>
  );
};

export default Linkcard;
