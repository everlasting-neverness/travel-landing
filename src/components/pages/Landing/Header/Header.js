import React from "react";
import PropTypes from "prop-types";
import { Flex } from "../../../ui-kit/Flex";
import { Anchor, VARIANTS } from "../../../ui-kit/Anchor";
import s from "./Header.css";

const propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.object)
};

function Header(props) {
  const { navLinks } = props;
  return (
    <header className={s.header}>
      <Flex justifyContent="space-between">
        <img
          src={require("../img/odigo-Logo.png")}
          srcSet={`${require("../img/odigo-Logo.png")} 1x, ${require("../img/odigo-Logo@2x.png")} 2x`}
          alt="Odigo"
        />
        <nav>
          <ul
            className={s.nav}
            style={{ margin: 0, padding: 0, listStyle: "none" }}
          >
            {navLinks.map((link, i) => (
              <li key={i}>
                <Anchor variant={VARIANTS.inverted} href={link.href}>
                  {link.text}
                </Anchor>
              </li>
            ))}
          </ul>
        </nav>
      </Flex>
    </header>
  );
}

Header.propTypes = propTypes;

export { Header };
