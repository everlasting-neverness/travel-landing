import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from './Benefits.css';
import { Card } from '../../../ui-kit/Card';

const propTypes = {
  className: PropTypes.string,
  benefits: PropTypes.arrayOf(PropTypes.object)
};

function Benefits(props) {
  const { benefits, className } = props;
  return (
    <section className={className} style={{ paddingTop: "4em", paddingBottom: "4em" }}>
      <h3 className={s.heading}>Benefits of Odigo</h3>
      <div className={s.content}>
        {benefits.map((benefit, i) => {
          return <Card content={benefit} anchor={{ text: "Learn more →", href: "#" }} key={i} />
        })}
      </div>
    </section>
  );
}

Benefits.propTypes = propTypes;

export { Benefits };
