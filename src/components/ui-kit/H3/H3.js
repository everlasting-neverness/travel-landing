import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./H3.css";

export const VARIANTS = {
  underlined: "underlined",
  default: "default"
};

const propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};

function H3(props) {
  const { variant, children, className, ...htmlProps } = props;
  return (
    <h3 className={cx(s.header, className)} {...htmlProps}>
      {children}
      {variant === VARIANTS.underlined ? <div className={s.line} /> : ""}
    </h3>
  );
}

H3.propTypes = propTypes;

export { H3 };
