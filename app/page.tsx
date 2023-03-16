import Image from 'next/image';


export default function Home() {
  return (
    <main className="bg-[#040474]">
      <section >
        <div className="p-32 mx-auto bg-[url('/images/hero.png')] bg-no-repeat bg-cover bg-center">
          <div className="container mx-auto">
            <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
              Light Of Freedom
            </h1>
            <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
              Zespół muzyczny z Bieszczad.
              <br />
              Zapraszamy do kontaktu
            </h2>
            <div className="ml-6 text-center">
              <a
                className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
                href="/"
              >
                <div className="flex text-lg">
                  <span className="justify-center">View All Templates</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Koncerty
        </h2>
        <br></br>
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
    </main>
  )
}
