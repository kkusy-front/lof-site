import Image from 'next/image'
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
    )
}

export default Concerts