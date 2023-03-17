import React from 'react'

const Contact = () => {
    return (
        <section id="kontakt">
            <div className="container mx-auto">
                <h2 className="pt-20 mb-5 text-3xl font-semibold tracking-tighter text-center text-white lg:text-7xl md:text-6xl">
                    Kontakt
                </h2>
                <p className="mx-auto text-xl text-center text-gray-200 font-normal leading-relaxed fs521 lg:w-2/3">
                    Skontaktuj się z nami
                </p>
                <div className="bg-[#191919] rounded-[10px] max-w-4xl mx-2 md:mx-auto p-10 mt-5 flex flex-col justify-center align-middle shadow-2xl gap-20 md:flex-row">
                    <div className="flex flex-col justify-center align-middle">
                        <svg className="w-10 h-10 text-white mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                        <h3 className="font-medium text-xl text-center text-white">Ryszard</h3>
                        <h4 className="font-medium text-base text-center text-white">531 531 544</h4>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <svg className="w-10 h-10 text-white mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                        <h3 className="font-medium text-xl text-center text-white">Email</h3>
                        <h4 className="font-medium text-base text-center text-white">lofgroup22@gmail.com</h4>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <svg className="w-10 h-10 text-white mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                        <h3 className="font-medium text-xl text-center text-white">Adam</h3>
                        <h4 className="font-medium text-base text-center text-white">665 116 125</h4>
                    </div>

                </div>
            </div>
            {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        </section>
    )
}

export default Contact