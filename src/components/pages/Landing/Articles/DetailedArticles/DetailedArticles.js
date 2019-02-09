import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './DetailedArticles.css';
import { H3, VARIANTS as H3VARIANTS } from '../../../../ui-kit/H3';
import { Anchor, VARIANTS as AnchorVARIANTS } from '../../../../ui-kit/Anchor';
import { Card } from '../../../../ui-kit/Card';

import images from './img/*.png';

const propTypes = {
    detailedArticles: PropTypes.arrayOf(PropTypes.object)
};

function DetailedArticles(props) {
    const { detailedArticles } = props;
    return (
        <section>
            <div className={s.collage}>
                {detailedArticles.map((article, i) => {
                    return (
                        <article
                            className={cx(
                                s.articleContainer,
                                i === 1 ? s.articleContainerReverse : ''
                            )}
                            key={i}
                        >
                            <img
                                className={s.image}
                                src={images[article.image]}
                                alt={article.title}
                            />
                            <Card
                                className={s.card}
                                content={article}
                                anchor={{
                                    text:
                                        i === 0
                                            ? 'View Prefecture →'
                                            : 'View Neighborhood →',
                                    href: '#'
                                }}
                                bigHeader={{
                                    variant: H3VARIANTS.default,
                                    children: article.title,
                                    className: [
                                        i === 0
                                            ? s.marginBottomMax
                                            : s.marginBottomMin,
                                        s.fontSize,
                                        s.paddingTop
                                    ]
                                }}
                                paragraph={{
                                    className:
                                        i === 1
                                            ? s.marginBottomMax
                                            : s.marginBottomMin
                                }}
                            />
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

DetailedArticles.propTypes = propTypes;

export { DetailedArticles };
