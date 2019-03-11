import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import s from './Landing.css';
import { Header } from './Header';
import { Panel, VARIANTS as PanelVARIANTS } from '../../ui-kit/Panel';
import { Discover } from './Discover';
import { Benefits } from './Benefits';
import {
    benefits,
    places,
    detailedArticles,
    navLinks,
    locations,
    videoData,
    footerData
} from './data';
import { Articles } from './Articles';
import { DetailedArticles } from './Articles/DetailedArticles';
import { Locations } from './Locations';
import { Video } from './Video';
import { Footer } from './Footer';

library.add(far.faCircle, far.faCommentAlt, faHeart);

function Landing() {
    return (
        <div>
            <div id="home" className={s.intro}>
                <div className={s.introContent}>
                    <div className={s.container}>
                        <div className={s.padding1}>
                            <Header navLinks={navLinks} />
                            <Discover
                                className={s.introForm}
                                style={{ fontSize: '5em' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={s.container}
                style={{
                    marginTop: -200,
                    position: 'relative',
                    zIndex: 1,
                    marginBottom: 125
                }}
            >
                <Panel variant={PanelVARIANTS.boxShadow}>
                    <Benefits className={s.padding1} benefits={benefits} />
                </Panel>
                <Panel
                    className={s.panel}
                    style={{
                        marginTop: '6.5rem'
                    }}
                >
                    <Articles places={places} />
                </Panel>
                <Panel className={s.panel}>
                    <DetailedArticles detailedArticles={detailedArticles} />
                </Panel>
                <Panel className={s.panel}>
                    <Locations locations={locations} />
                </Panel>
            </div>
            <Video videoData={videoData} />
            <Footer footerData={footerData} />
        </div>
    );
}

export { Landing };
