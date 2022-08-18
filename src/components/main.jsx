import { useState } from 'react';
import Section1de from './deutsch/Section1de';
import Section1en from './english/section1en';
import Second from './english/second';
import './main.css';
import ThirdEn from './english/thirden';
const Main = () => {

    const [de, setDe] = useState(false)

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
            <main className="main p-relative">

                <h1 className="title text-center">Bardia Shahnazi</h1>
                <div className="language d-flex text-lang p-absolute">
                    <span className={de ? `text-muted transition` : `text-lang transition`}
                        onClick={() => setDe(false)}>En</span>
                    <strong>|</strong>
                    <span className={de ? `text-lang transition` : `text-muted transition`}
                        onClick={() => setDe(true)}>De</span>
                </div>

                <Section1de
                    lang={de}
                    rippleHandler={rippleHandler} />
                <Section1en
                    lang={de}
                    btnOnclick={rippleHandler}
                />

                <Second lang={de} />

                <ThirdEn />
            </main>
        </>
    )
}
export default Main