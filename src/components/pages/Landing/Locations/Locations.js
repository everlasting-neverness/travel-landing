import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Locations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { H3, VARIANTS as H3VARIANTS } from '../../../ui-kit/H3';
import { Card } from '../../../ui-kit/Card';
import { Flex } from '../../../ui-kit/Flex';
import { VARIANTS as AnchorVARIANTS } from '../../../ui-kit/Anchor';

import images from './img/*.png';

const propTypes = {
    locations: PropTypes.arrayOf(PropTypes.object)
};

function Locations(props) {
    const { locations } = props;
    return (
        <section>
            <div className={s.header}>
                <H3 variant={H3VARIANTS.underlined}>
                    Today top places to visit
                </H3>
            </div>
            <div className={s.collage}>
                {locations.map((location, i) => (
                    <Flex
                        justifyContent={'space-between'}
                        flexDirection={'column'}
                        key={i}
                        className={s.collageItem}
                    >
                        <div className={s.imageWrapper}>
                            <img
                                className={s.image}
                                src={images[location.image]}
                                alt={location.title}
                                style={{
                                    marginBottom: '1.3rem'
                                }}
                            />
                            <div className={s.imageInfo}>
                                <span>{location.title}</span>
                                <div className={s.imageInfoButtonsSection}>
                                    <div className={s.imageInfoButtonWrapper}>
                                        <span>{location.likes}</span>
                                        <a
                                            href='#'
                                            className={s.imageInfoButton}
                                        >
                                            <FontAwesomeIcon
                                                icon={['fas', 'heart']}
                                            />
                                        </a>
                                    </div>
                                    <div className={s.imageInfoButtonWrapper}>
                                        <span>{location.comments}</span>
                                        <a
                                            href='#'
                                            className={s.imageInfoButton}
                                        >
                                            <FontAwesomeIcon
                                                icon={['far', 'comment-alt']}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Card
                            content={location}
                            anchor={{
                                text: 'See More',
                                href: '#',
                                variant: AnchorVARIANTS.anchorButton,
                                style: {
                                    fontSize: '1rem',
                                    padding: '12px 20px',
                                    textTransform: 'uppercase'
                                }
                            }}
                            noTitle={true}
                        />
                    </Flex>
                ))}
            </div>
        </section>
    );
}

Locations.propTypes = propTypes;

export { Locations };
