import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./Flex.css";

const propTypes = {
  justifyContent: PropTypes.oneOf(["space-between", "space-around"]),
  alignItems: PropTypes.oneOf(["center", "baseline"]),
  flexDirection: PropTypes.oneOf(["row", "column"]),
  className: PropTypes.string
};

function Flex(props) {
  const { justifyContent, alignItems, className = "", flexDirection, ...htmlProps } = props;
  return (
    <div
      className={cx(s.Flex, className, {
        [s["space-between"]]: justifyContent === "space-between",
        [s["space-around"]]: justifyContent === "space-around",
        [s["alignCenter"]]: alignItems === "center",
        [s["alignBaseline"]]: alignItems === "baseline",
        [s["flexDirectionRow"]]: flexDirection === "row",
        [s["flexDirectionColumn"]]: flexDirection === "column",
      })}
      {...htmlProps}
    />
  );
}

Flex.propTypes = propTypes;

export { Flex };
