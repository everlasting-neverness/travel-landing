import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./Anchor.css";

export const VARIANTS = {
  inverted: "inverted",
  anchorButton: "anchorButton",
  default: "default"
};

const propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  href: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
};

function Anchor(props) {
  const { variant, href, text, style, ...htmlProps } = props;
  return (
    <a
      className={cx(s.Anchor, {
        [s.inverted]: variant === VARIANTS.inverted,
        [s.anchorButton]: variant === VARIANTS.anchorButton,
        [s.default]: variant === VARIANTS.default
      })}
      href={href}
      text={text}
      style={style}
      {...htmlProps}
    />
  );
}

Anchor.propTypes = propTypes;

export { Anchor };
