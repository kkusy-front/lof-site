import React, { Suspense } from 'react'

import Image from 'next/image';
import Script from 'next/script';
import dynamic from 'next/dynamic';

const Concerts = dynamic(() => import('./compontens/sections/Concerts'));
const Contact = dynamic(() => import('./compontens/sections/Contact'));
const Team = dynamic(() => import('./compontens/sections/Team'));
const Listen = dynamic(() => import('./compontens/sections/Listen'));
const CookieConsent = dynamic(() => import('./compontens/CookieConsent'));

export default function Home() {
  return (
    <>
      <main>
        <section id="hero">
          <div className="p-10 md:p-32 mx-auto relative">
            <Image src="/images/hero.webp" priority className='z-0' alt="" fill style={{ objectFit: "cover", objectPosition: 'center' }} />
            <div className="container mx-auto relative hero__container-text">
              <div className='w-fit mx-auto '>
                <h1 className="text-50 md:text-80 z-10 text-center font-4 lh-6 ld-04 font-bold text-white mb-6 border-y-2 border-white">
                  Light Of Freedom
                </h1>
              </div>

              <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-white text-center">
                Zespół muzyczny z&nbsp;Bieszczad.
                <br />
                Zapraszamy do kontaktu
              </h2>
              <div className="text-center">
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

        <Suspense fallback={<div className="w-14 h-14 rounded-full animate-spin border border-solid border-white border-t-transparent"></div>}>
          <Listen />
        </Suspense>

        <Contact />

        <Suspense fallback={<div className="w-14 h-14 rounded-full animate-spin border border-solid border-white border-t-transparent"></div>}>
          <CookieConsent />
        </Suspense>

      </main>

      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-WSHBML3');
          `,
        }}
      />
    </>

  )
}


