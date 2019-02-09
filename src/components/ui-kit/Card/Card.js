import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Card.css';
import { Anchor, VARIANTS as AnchorVARIANTS } from '../Anchor';
import { H3, H3VARIANTS } from '../H3';
import { Button } from '../Button';

import images from '../../pages/Landing/Benefits/img/*.png';

const propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    content: PropTypes.object.isRequired,
    noTitle: PropTypes.bool,
    anchor: PropTypes.object,
    button: PropTypes.object,
    bigHeader: PropTypes.object,
    paragraph: PropTypes.object
};

function Card(props) {
    const { content, className, bigHeader, anchor, button, paragraph, noTitle = false } = props;
    return (
        <div className={cx(s.promo, className)}>
            {content.img && (
                <img src={images[content.img]} alt={content.imgDesc} />
            )}
            {!noTitle ? (content.title && bigHeader ? (
                <H3
                    variant={bigHeader.variant}
                    className={bigHeader.className}
                    children={bigHeader.children}
                />
            ) : (
                    <h5 className={s.title}>{content.title}</h5>
                )) : null}
            <p className={cx(s.content, paragraph && paragraph.className)}>
                {content.body}
            </p>
            {anchor && (
                <Anchor
                    href={anchor.href}
                    variant={anchor.variant ? anchor.variant : AnchorVARIANTS.default}
                >
                    {anchor.text}
                </Anchor>
            )}
            {button && <Button style={button.style}>{button.text}</Button>}
        </div>
    );
}

Card.propTypes = propTypes;

export { Card };
