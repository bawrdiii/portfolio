import { useEffect, useState } from 'react';
import Section1de from './deutsch/Section1de';
import Section1en from './english/section1en';
import Second from './english/second';
import './main.css';
import './mainlight.css';
import ThirdEn from './english/thirden';
import ThirdDe from './deutsch/thirdde';
import FourthEn from './english/fourthen';
import { Toggle } from './toggle/toggle';
const Main = () => {

    const [de, setDe] = useState(false)
    const [dark, setDark] = useState(true)

    const labelOnclick = (e) => {
        e.preventDefault()
        let span = document.querySelector("#toggle-span")
        let label = document.querySelector('#toggle-label')
        span.classList.toggle("toggle-span-after")
        label.classList.toggle("toggle-label-after")
        if (dark) {
            setDark(false)
            localStorage.setItem("Theme", "Light")
        }
        else if (!dark) {
            setDark(true)
            localStorage.setItem("Theme", "Dark")
        }
        let root = document.querySelector('#root')
        root.classList.toggle('light')

    }


    const englishHandler = () => {
        setDe(false)
        localStorage.setItem("Language", "English")
    }
    const deutschHandler = () => {
        setDe(true)
        localStorage.setItem("Language", "Deutsch")
    }


    useEffect(() => {
        let root = document.querySelector('#root')
        let toggleSpan = document.querySelector("#toggle-span")
        let toggleLabel = document.querySelector("#toggle-label")
        let theme = localStorage.getItem("Theme")
        let lang = localStorage.getItem("Language")
        const Checker = () => {
            let match = window.matchMedia('(prefers-color-scheme:light)').matches;
            console.log(match);
            if (theme === "Light" || match) {
                console.log(`color is light`);
                setDark(false)
                root.classList.add("light")
                toggleLabel.classList.add("toggle-label-after")
                toggleSpan.classList.add("toggle-span-after")
            }
            else if (theme === "Dark" || !match) {
                console.log(`color is dark`);
                setDark(true)
                root.removeAttribute("class")
                toggleLabel.classList.remove("toggle-label-after")
                toggleSpan.classList.remove("toggle-span-after")
            }
            if (lang === "English") {
                setDe(false)
                let eng = document.querySelector("#english")
                let de = document.querySelector("#deutsch")
                eng.classList.add("text-lang")
                de.classList.add("text-muted")

            }
            else if (lang === "Deutsch") {
                setDe(true)
                let eng = document.querySelector("#english")
                let de = document.querySelector("#deutsch")
                eng.classList.add("text-muted")
                de.classList.add("text-lang")
            }
        }
        window.addEventListener("load", Checker)
    })

    return (
        <>
            <main className="main p-relative">
                <section className='first-section'>

                    <h1 className="title text-center py-1">Bardia Shahnazi</h1>
                    <div className="language d-flex text-lang p-absolute">
                        <span className={de ? `text-muted transition` : `text-lang transition`}
                            onClick={englishHandler}
                            id="english"
                        >En</span>
                        <strong>|</strong>
                        <span id="deutsch"
                            className={de ? `text-lang transition` : `text-muted transition`}
                            onClick={deutschHandler}>De</span>
                        <Toggle
                            labelOnclick={labelOnclick}
                            value={dark}
                        />
                    </div>
                </section>

                <Section1de
                    lang={de}
                />
                <Section1en
                    lang={de}

                />

                <Second lang={de} />

                <ThirdEn lang={de} />
                <ThirdDe lang={de} />
                <FourthEn lang={de} />
            </main>
        </>
    )
}
export default Main