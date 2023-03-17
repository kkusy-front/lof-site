import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Concerts = () => {
    return (
        <section id="koncerty">
            <h2 className="pt-20 mb-5 text-3xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
                Koncerty
            </h2>
            <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
                Sprawdź gdzie już graliśmy!
            </p>
            <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
                <Link href="http://www.bieszczadzka24.pl/aktualnosci/31-final-wielkiej-orkiestry-swiatecznej-pomocy-w-ustrzykach-dolnych-za-nami/7562" target={"_blank"}>
                    <div className="ktq4 shadow-2xl">
                        <Image src={'/images/plakat_wosp_23.webp'} width={600} height={500} alt="plakat WOŚP w Ustrzykach Dolnych 2023" loading="lazy" blurDataURL="https://placehold.co/600x500"
                            placeholder="blur" />
                        <h3 className="pt-3 font-semibold text-lg text-white">
                            Koncert podczas Finału Wielkiej Orkiestry Świątecznej Pomocy
                        </h3>
                    </div>
                </Link>
                <Link href="https://www.stolicabieszczad.pl/ustrzycki-festiwal-rockowy-uwolnij-energie-z-gor.html" target={"_blank"}>
                    <div className="ktq4 shadow-2xl">
                        <Image src='/images/plakat_ud_festiwal_22.webp' width={600} height={500} alt="Ustrzycki festiwal rockowy 2022" loading="lazy" blurDataURL="https://placehold.co/600x500"
                            placeholder="blur" />
                        <h3 className="pt-3 font-semibold text-lg text-white">
                            Ustrzycki Festiwal Rockowy 2022
                        </h3>
                    </div>
                </Link>
                <Link href="http://www.bieszczadzka24.pl/aktualnosci/dozynki-gminne-w-wojtkowej/7484" target={"_blank"}>
                    <div className="ktq4 shadow-2xl">
                        <Image src='/images/plakat_dozynki_wojtkowa_22.webp' width={600} height={500} alt="Dożynki Gminne Wojtkowa 2022" loading="lazy" blurDataURL="https://placehold.co/600x500"
                            placeholder="blur" />
                        <h3 className="pt-3 font-semibold text-lg text-white">
                            Dożynki Gminne Wojtkowa 2022
                        </h3>
                    </div>
                </Link>
                <Link href="https://wbieszczady.pl/aktualnosci/pozegnanie-z-koleda-w-ustrzykach-dolnych-koncert-zespolu-light-of-freedom-i-przyjaciele-oraz-ustrzyckiej-grupy-wokalnej-zdjecia/CPGWTYAt2br9KWByQt2J" target={"_blank"}>
                    <div className="ktq4 shadow-2xl">
                        <Image src='/images/plakat_pozegnanie_koleda_23.webp' width={600} height={500} alt="plakat WOŚP w Ustrzykach Dolnych 2023" loading="lazy" blurDataURL="https://placehold.co/600x500"
                            placeholder="blur" />
                        <h3 className="pt-3 font-semibold text-lg text-white">
                            Koncert Pożegnanie z kolędą w Ustrzyckim Domu Kultury 2023
                        </h3>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Concerts