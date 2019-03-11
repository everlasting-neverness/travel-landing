import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./Articles.css";
import { H3, VARIANTS as H3VARIANTS } from "../../../ui-kit/H3";
import { Anchor, VARIANTS as AnchorVARIANTS } from "../../../ui-kit/Anchor";

import images from "./img/*.jpg";

const propTypes = {
  places: PropTypes.arrayOf(PropTypes.string)
};

function Articles(props) {
  const { places } = props;
  return (
    <section id="articles">
      <div className={s.header}>
        <H3 variant={H3VARIANTS.underlined}>Get inspired for your next trip</H3>
        <Anchor href={'#'} variant={AnchorVARIANTS.default}>View All →</Anchor>
      </div>
      <div className={s.collage}>
        {places.map((place, i) => {
          return (
            <div className={cx(
              s.collageItem,
              i === 0 || i === 1 ? s.collageItemBig : '',
              i === 0 || i === 1 || i === 2 ? s.collageItemClearMargin : ''
              )}
              key={i}
            >
              <h5 className={s.imageTitle}>{place}</h5>
              <div className={s.imageCover}></div>
              <img className={s.image} src={images[place]} alt={place}/>
            </div>)
        })}
      </div>
    </section>
  );
}

Articles.propTypes = propTypes;

export { Articles };
