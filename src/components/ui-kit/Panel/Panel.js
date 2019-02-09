import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./Panel.css";

export const VARIANTS = {
  boxShadow: "boxShadow"
};

const propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANTS))
};

function Panel(props) {
  const { variant, ...htmlProps } = props;
  return (
    <div
      className={cx(s.Panel, {
        [s.boxShadow]: variant === VARIANTS.boxShadow
      })}
      {...htmlProps}
    />
  );
}

Panel.propTypes = propTypes;

export { Panel };
