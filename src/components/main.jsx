import { useState } from 'react';
import Section1 from './english/section1en';
import './main.css';
const Main = () => {

    const [lang, setLang] = useState(false)

    const rippleHandler = (e) => {
        const parentElement = e.target
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        let ripple = document.createElement("span")
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
        parentElement.appendChild(ripple)
        setTimeout(() => {
            ripple.remove()
        }, 600);

    }



    return (
        <>
            <main className='main p-relative'>

                <h1 className="title text-center">Bardia Shahnazi</h1>
                <div className="language d-flex text-lang p-absolute">
                    <span className={lang ? `text-muted transition` : `text-lang transition`}
                        onClick={() => setLang(false)}>En</span>
                    <strong>|</strong>
                    <span className={lang ? `text-lang transition` : `text-muted transition`}
                        onClick={() => setLang(true)}>De</span>
                </div>
                <Section1
                    lang={lang}
                    btnOnclick={rippleHandler}
                />

            </main>
        </>
    )
}
export default Main