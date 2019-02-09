import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./Input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const propTypes = {
  content: PropTypes.object.isRequired,
  handleUserInput: PropTypes.func.isRequired
};

function Input(props) {
  const { content, handleUserInput } = props;
  const id = "input-" + Math.random();
  return (
    <div className={s.inputContainer}>
      <label className={s.label} htmlFor={id}>
        <span>
          <FontAwesomeIcon icon={["far", "circle"]} />
          <span className={s.labelTextContent}>{content.labelText}</span>
        </span>
        <input
          className={s.input}
          id={id}
          onChange={handleUserInput}
          type="text"
        />
      </label>
    </div>
  );
}

Input.propTypes = propTypes;

export { Input };
