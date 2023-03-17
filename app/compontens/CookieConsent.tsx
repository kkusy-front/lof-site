'use client';
import Image from 'next/image'
import { MouseEvent, useEffect, useState } from 'react'
import { getCookie, setCookie } from 'typescript-cookie'

const CookieConsent = () => {
    const [show, setShow] = useState(false);
    const acceptCookies = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCookie('accept-cookie-page', 'accepted', { expires: 31 })
        setShow(false);
    }

    useEffect(() => {
        const cookie = getCookie('accept-cookie-page');
        console.log(cookie)
        cookie === "accepted" ? setShow(false) : setShow(true);
    }, [])

    return (
        <>
            {show ? <div className="mx-auto fixed bottom-0 md:bottom-10 md:right-10 shadow-2xl z-50">
                <div >
                    <div className="md:w-72 bg-white rounded-lg shadow-md p-6" >
                        <div className="w-16 mx-auto relative -mt-10 mb-3">
                            <Image className="-mt-1" src="https://www.svgrepo.com/show/30963/cookie.svg" width={100} height={100} alt="Cookie Icon SVG" />
                        </div>
                        <span className="w-full text-center block leading-normal text-gray-800 text-md mb-3">Ta strona używa ciasteczek dla lepszego działania strony.</span>
                        <div className="flex items-center justify-center">
                            <div className="w-1/2">
                                <button type="button" onClick={acceptCookies} className="py-2 px-4  bg-[#1e1e6d] hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null}
        </>

    )
}

export default CookieConsent