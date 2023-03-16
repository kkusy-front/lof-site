'use client';
import Image from 'next/image';


import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Home() {
  return (
    <main className="bg-[#040474]">
      <section id="hero">
        <div className="p-32 mx-auto bg-[url('/images/hero.png')] bg-no-repeat bg-cover bg-center">
          <div className="container mx-auto">
            <div className='w-fit mx-auto'>
              <h1 className="text-50 md:text-80  text-center font-4 lh-6 ld-04 font-bold text-white mb-6 border-y-2 border-white">
                Light Of Freedom
              </h1>
            </div>

            <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-white text-center">
              Zespół muzyczny z Bieszczad.
              <br />
              Zapraszamy do kontaktu
            </h2>
            <div className="ml-6 text-center">
              <a
                className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
                href="#kontakt"
              >
                <div className="flex text-lg">
                  <span className="justify-center">Zadzwoń teraz</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="koncerty">
        <h2 className="pt-20 mb-5 text-3xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Koncerty
        </h2>
        <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
          Sprawdź gdzie już graliśmy!
        </p>
        <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
          <div className="ktq4">
            <Image src={'/images/plakat_wosp_23.jpg'} width={600} height={500} alt="plakat WOŚP w Ustrzykach Dolnych 2023" />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Koncert podczas Finału Wielkiej Orkiestry Świątecznej Pomocy
            </h3>
          </div>
          <div className="ktq4">
            <Image src='/images/plakat_ud_festiwal_22.jpg' width={600} height={500} alt="plakat WOŚP w Ustrzykach Dolnych 2023" />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Koncert podczas Finału Wielkiej Orkiestry Świątecznej Pomocy
            </h3>
          </div>
          <div className="ktq4">
            <Image src='/images/plakat_dozynki_wojtkowa_22.jpg' width={600} height={500} alt="plakat WOŚP w Ustrzykach Dolnych 2023" />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Koncert podczas Finału Wielkiej Orkiestry Świątecznej Pomocy
            </h3>
          </div>
          <div className="ktq4">
            <Image src='/images/plakat_pozegnanie_koleda_23.jpg' width={600} height={500} alt="plakat WOŚP w Ustrzykach Dolnych 2023" />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Koncert podczas Finału Wielkiej Orkiestry Świątecznej Pomocy
            </h3>
          </div>
        </div>
      </section>

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
                      <h3 className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl whitespace-nowrap">Svietlana Halichenko</h3>
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
                autoPlay={false}
                src="/musics/jazz.mp3"
                onPlay={e => console.log("onPlay")}
              // other props here
              />
            </div>
            <div className="ktq4">
              <h3 className='text-white font-bold text-3xl mb-4 text-center'>Rockowa składanka</h3>
              <AudioPlayer
                autoPlay={false}
                src="/musics/rock_skladanka.mp3"
                onPlay={e => console.log("onPlay")}
              // other props here
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


