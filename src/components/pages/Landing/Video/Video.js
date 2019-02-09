import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Video.css';
import { Flex } from '../../../ui-kit/Flex';

import svgImages from '../img/*.svg';
import jpgImages from '../img/*.jpg';

const propTypes = {
    videoData: PropTypes.object.isRequired
};

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            youTubePath: 'https://www.youtube.com/embed/',
            youTubeQuery: '?rel=0&showinfo=0&autoplay=1',
            videoButtonEnabled: true
        };
        this.playVideo = this.playVideo.bind(this);
        this.generateURL = this.generateURL.bind(this);
    }

    generateURL(id) {
        return this.state.youTubePath + id + this.state.youTubeQuery;
    }

    playVideo(e) {
        e && e.preventDefault();

        const video = this.refs.video;
        video.style.height = '609px';

        this.setState({ videoButtonEnabled: false });
    }

    render() {
        return (
            <section className={s.videoContainer}>
                <div className={s.video} ref="video" onClick={this.playVideo}>
                    {this.state.videoButtonEnabled ? 
                        <React.Fragment>
                            <a className={s.videoLink}>
                                <img className={s.videoMedia} ref='videoMedia' src={jpgImages.VideoPlaceholder} alt="video" />
                            </a>
                            <button className={s.videoButton}>
                                <img className={s.videoButtonIcon} src={svgImages.PlayButton} alt="play video" />
                            </button>
                         </React.Fragment> 
                        : <iframe className={s.videoIframe} src={this.generateURL(this.props.videoData.id)} allow="autoplay" allowFullScreen></iframe>
                    }
                </div>
            </section>
        );
    }
}

Video.propTypes = propTypes;

export { Video };
