import Image from 'next/image'
import React from 'react'

const Team = () => {
    return (
        <section id="sklad">
            <div className="container mx-auto">
                <h2 className="pt-20 mb-5 text-3xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
                    Nasz skład
                </h2>
                <div className='pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3'>
                    <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                        <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                            <div className="grid grid-cols-1">
                                <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-2xl">
                                    <div className="flex flex-col items-center">
                                        <Image width={50} height={50} alt=""
                                            src="/images/microphone.png" className="bg-white p-2 flex-shrink-0 object-cover object-center flex w-24 h-24 mr-auto ml-auto rounded-full shadow-xl" />
                                        <h3 className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl whitespace-nowrap">Svitlana Holichenko</h3>
                                        <p className="mt-3 text-base leading-relaxed text-center text-gray-200">Wokal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                        <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                            <div className="grid grid-cols-1">
                                <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-2xl">
                                    <div className="flex flex-col items-center">
                                        <Image width={50} height={50} alt=""
                                            src="/images/bass-guitar.png" className="bg-white p-2 flex-shrink-0 object-cover object-center flex w-24 h-24 mr-auto ml-auto rounded-full shadow-xl" />
                                        <h3 className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl whitespace-nowrap">Dave Dziarsky</h3>
                                        <p className="mt-3 text-base leading-relaxed text-center text-gray-200">Gitara basowa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                        <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                            <div className="grid grid-cols-1">
                                <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-2xl">
                                    <div className="flex flex-col items-center">
                                        <Image width={50} height={50} alt=""
                                            src="/images/melody.png" className="bg-white p-2 flex-shrink-0 object-contain object-center flex w-24 h-24 mr-auto ml-auto rounded-full shadow-xl" />
                                        <h3 className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl whitespace-nowrap">Dawid Dziadosz</h3>
                                        <p className="mt-3 text-base leading-relaxed text-center text-gray-200">Klawisze</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                        <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                            <div className="grid grid-cols-1">
                                <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-2xl">
                                    <div className="flex flex-col items-center">
                                        <Image width={50} height={50} alt=""
                                            src="/images/electric-guitar.png" className="bg-white p-2 flex-shrink-0 object-cover object-center flex w-24 h-24 mr-auto ml-auto rounded-full shadow-xl" />
                                        <h3 className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl whitespace-nowrap">Ryszard Kawczyński</h3>
                                        <p className="mt-3 text-base leading-relaxed text-center text-gray-200">Gitara</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                        <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                            <div className="grid grid-cols-1">
                                <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-2xl">
                                    <div className="flex flex-col items-center">
                                        <Image width={50} height={50} alt=""
                                            src="/images/drum-set.png" className="bg-white p-2 flex-shrink-0 object-cover object-center flex w-24 h-24 mr-auto ml-auto rounded-full shadow-xl" />
                                        <h3 className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl whitespace-nowrap">Adam Kwołek</h3>
                                        <p className="mt-3 text-base leading-relaxed text-center text-gray-200">Perkusja</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                        <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                            <div className="grid grid-cols-1">
                                <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-2xl">
                                    <div className="flex flex-col items-center">
                                        <Image width={50} height={50} alt=""
                                            src="/images/saxophone.png" className="bg-white p-2 flex-shrink-0 object-cover object-center flex w-24 h-24 mr-auto ml-auto rounded-full shadow-xl" />
                                        <h3 className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl whitespace-nowrap">Michał Kwołek</h3>
                                        <p className="mt-3 text-base leading-relaxed text-center text-gray-200">Saksofon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team