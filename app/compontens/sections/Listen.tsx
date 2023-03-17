'use client';
import React, { useRef } from 'react'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Listen = () => {
    const jazzRef = useRef<AudioPlayer>(null);
    const rockRef = useRef<AudioPlayer>(null);

    const handleStopPlayer = (name: string) => {
        if (name === 'jazz') {
            rockRef?.current?.audio?.current?.pause();
        }
        if (name === 'rock') {
            jazzRef?.current?.audio?.current?.pause();
        }
    }
    return (
        <section id="posluchaj">
            <div className="container mx-auto">
                <h2 className="pt-20 mb-5 text-3xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
                    Posłuchaj
                </h2>
                <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
                    Posłuchaj naszych sampli!
                </p>
                <div className='pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3'>
                    <div className="ktq4">
                        <h3 className='text-white font-bold text-3xl mb-4 text-center'>Jazz</h3>
                        <AudioPlayer
                            ref={jazzRef}
                            autoPlay={false}
                            src="/musics/jazz.mp3"
                            onPlay={() => handleStopPlayer('jazz')}
                        />
                    </div>
                    <div className="ktq4">
                        <h3 className='text-white font-bold text-3xl mb-4 text-center'>Rockowa składanka</h3>
                        <AudioPlayer
                            ref={rockRef}
                            autoPlay={false}
                            src="/musics/rock_skladanka.mp3"
                            onPlay={() => handleStopPlayer('rock')}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Listen