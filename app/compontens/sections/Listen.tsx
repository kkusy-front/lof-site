'use client';
import React from 'react'

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const Listen = () => {
    return (
        <section id="posluchaj">
            <div className="container mx-auto">
                <h2 className="pt-20 mb-5 text-3xl font-semibold tracking-tighter text-center text-white lg:text-7xl md:text-6xl">
                    Posłuchaj
                </h2>
                <p className="mx-auto text-xl text-center text-gray-200 font-normal leading-relaxed fs521 lg:w-2/3">
                    Posłuchaj naszych sampli!
                </p>
                <div className='pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3'>
                    <div className="ktq4 shadow-2xl">
                        <h3 className='text-white font-bold text-3xl mb-4 text-center'>Składanka Jazzowa</h3>
                        <LiteYouTubeEmbed
                            webp={true}
                            cookie={true}
                            id="cXDgdt6KFxA"
                            title="Posłuchaj naszej składanki jazzowej"
                        />
                    </div>
                    <div className="ktq4 shadow-2xl">
                        <h3 className='text-white font-bold text-3xl mb-4 text-center'>Składanka Rockowa</h3>
                        <LiteYouTubeEmbed
                            webp={true}
                            id="SmPOCW0Qs8Y"
                            title="Posłuchaj nas z koncertu na żywo"
                        />
                    </div>
                    <div className="ktq4 shadow-2xl">
                        <h3 className='text-white font-bold text-3xl mb-4 text-center'>Fragment z koncertu</h3>
                        <LiteYouTubeEmbed
                            webp={true}
                            id="wo85Lr3Q_SI"
                            title="Posłuchaj nas z koncertu na żywo"
                        />
                    </div>
                    <div className="ktq4 shadow-2xl">
                        <h3 className='text-white font-bold text-3xl mb-4 text-center'>Fragment z koncertu</h3>
                        <LiteYouTubeEmbed
                            webp={true}
                            id="dce3SyH8hlM"
                            title="Posłuchaj nas z koncertu na żywo"
                        />
                    </div>
                    <div className="ktq4 shadow-2xl">
                        <h3 className='text-white font-bold text-3xl mb-4 text-center'>Fragment z koncertu</h3>
                        <LiteYouTubeEmbed
                            webp={true}
                            id="LI2gnIIMO8U"
                            title="Posłuchaj nas z koncertu na żywo"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Listen