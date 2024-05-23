import React from 'react'
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import './VideoPlayer.css'

const VideoPlayer = ({ captionData, url }) => {
    const content = {
        cues: captionData,
    };

    return (
        <>

            <div className="videoContainer">
                <MediaPlayer src={url} viewType='video' streamType='on-demand' logLevel='warn' crossOrigin playsInline title='Sprite Fight'>
                    <MediaProvider>
                        <Poster className="vds-poster" />
                        <Track content={content} label="English" kind="captions" lang="en-US" type="json" />
                    </MediaProvider>
                    <DefaultVideoLayout thumbnails='' icons={defaultLayoutIcons}/>
                </MediaPlayer>
            </div>

        </>
    )
}

export default VideoPlayer