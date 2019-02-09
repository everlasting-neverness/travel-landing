import React from "react";
import PropTypes from "prop-types";
import s from "./Button.css";
import cx from "classnames";

const propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};

function Button(props) {
  const { className } = props;
  return <button className={cx(s.button, className && className)} {...props} />;
}

Button.propTypes = propTypes;

export { Button };
