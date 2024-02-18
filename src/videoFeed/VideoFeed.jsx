import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import styles from "./VideoFeed.module.css";
import useLocalStorage from '../customHooks/useLocalStorage.js';
import { I18nContext } from '../context/I18nProvider.jsx';

function VideoFeed() {
    const [videoList, setVideoList] = useLocalStorage('videoList', []); 
    const [newVideoUrl, setNewVideoUrl] = useState('');
    const [playbackRate, setPlaybackRate] = useState(1);
    const [playingStates, setPlayingStates] = useState([]);

    useEffect(() => {
        setPlayingStates(new Array(videoList.length).fill(false)); 
    }, [videoList]); 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (ReactPlayer.canPlay(newVideoUrl)) {
            setVideoList([...videoList, newVideoUrl]);
            setPlayingStates([...playingStates, false]);
            setNewVideoUrl('');
        } else {
            alert('invalid URL: piensa pe chato');
        }
    };

    const handlePlaybackRateChange = (rate) => {
        setPlaybackRate(rate);
    };

    const handlePlayPause = (index) => {
        const newPlayingStates = [...playingStates];
        newPlayingStates[index] = !newPlayingStates[index];
        setPlayingStates(newPlayingStates);
    };
    const {t} = useContext(I18nContext);

    return (
        <div className={styles.containerVideoFeed}>            
            <form onSubmit={handleSubmit}>
                <h3>Youtube URL</h3>
                <input 
                    className={styles.textURL}
                    type="text" 
                    value={newVideoUrl} 
                    onChange={(e) => setNewVideoUrl(e.target.value)} 
                    placeholder={t("Add_an_YouTube_URL")} 
                    required 
                />
                <button className={styles.botonURL} type="submit">{t("Add_Video")}</button>
            </form>
            <div className={styles.cajaVideoFeed}>
                {videoList.map((url, index) => (
                    <div key={index}>
                        <div className={styles.cajaVideoURL}>
                            <ReactPlayer 
                                url={url} 
                                controls 
                                playbackRate={playbackRate}
                                playing={playingStates[index]} 
                                width="100%" 
                                height="350px" 
                            />
                        </div>
                        <div>
                        <div className={styles.botonesCrlVideo}>
                            <button 
                                className={`${styles.botonesCrlVideoPlay} ${playingStates[index] ? styles.activeButton : ''}`} 
                                onClick={() => handlePlayPause(index)}
                            >
                                {playingStates[index] ? 'Pause' : 'Play'}
                            </button>
                            <button 
                                className={`${styles.playbackRateButton} ${playbackRate === 1 ? styles.activeButton : ''}`} 
                                onClick={() => handlePlaybackRateChange(1)}
                            >
                                1x
                            </button>
                            <button 
                                className={`${styles.playbackRateButton} ${playbackRate === 1.5 ? styles.activeButton : ''}`} 
                                onClick={() => handlePlaybackRateChange(1.5)}
                            >
                                1.5x
                            </button>
                            <button 
                                className={`${playbackRate === 2 ? styles.activeButton : ''}`} 
                                onClick={() => handlePlaybackRateChange(2)}
                            >
                                2x
                            </button>
                        </div>                 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoFeed;
