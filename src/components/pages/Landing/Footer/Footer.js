import React from "react";
import PropTypes from "prop-types";
import { Flex } from "../../../ui-kit/Flex";
import { Anchor, VARIANTS } from "../../../ui-kit/Anchor";
import cx from 'classnames';
import s from "./Footer.css";

const propTypes = {
  footerData: PropTypes.arrayOf(PropTypes.object)
};

function Footer(props) {
  const { footerData } = props;
  return (
    <footer className={s.footer}>
        <Flex className={s.footerContainer} justifyContent="space-between">
            <Flex justifyContent="space-between" alignItems="center">
                <img
                    src={require("../img/odigo-Logo@2x.png")}
                    alt="Odigo"
                />
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
                <ul
                    className={cx(s.itemsList, s.ul)}
                >
                    {footerData.map((item, i) => (
                        <li key={i} className={s.itemsListLi}>
                            <span className={s.subListTitle}>{Object.keys(item)[0]}</span>
                            <ul className={cx(s.ul)}>
                                {item[Object.keys(item)[0]].map((link, index) => (
                                    <li key={index} className={s.subItemsListLi}>
                                        <Anchor style={{ fontSize: "1rem" }} variant={VARIANTS.inverted} href={link.href}>
                                            {link.text}
                                        </Anchor> 
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Flex>
        </Flex>    
    </footer>
  );
}

Footer.propTypes = propTypes;

export { Footer };