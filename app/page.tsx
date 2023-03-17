'use client';
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

import dynamic from 'next/dynamic'
import Image from 'next/image';

const Concerts = dynamic(() => import('./compontens/sections/Concerts'))
const Contact = dynamic(() => import('./compontens/sections/Contact'))
const Listen = dynamic(() => import('./compontens/sections/Listen'), {
  loading: () => <p>Loading...</p>,
})
const Team = dynamic(() => import('./compontens/sections/Team'))

export default function Home() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WSHBML3' });
  }, []);

  return (
    <main>
      <section id="hero">
        <div className="p-10 md:p-32 mx-auto relative">
          <Image src="/images/hero.webp" className='z-0' alt="" fill objectFit='cover' objectPosition='center' blurDataURL="https://placehold.co/600x500"
            placeholder="blur" />
          <div className="container mx-auto relative">
            <div className='w-fit mx-auto '>
              <h1 className="text-50 md:text-80 z-10 text-center font-4 lh-6 ld-04 font-bold text-white mb-6 border-y-2 border-white">
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

      <Concerts />
      <Team />
      <Listen />
      <Contact />
    </main>
  )
}


