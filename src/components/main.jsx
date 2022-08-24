import { useState } from 'react';
import Section1de from './deutsch/Section1de';
import Section1en from './english/section1en';
import Second from './english/second';
import './main.css';
import ThirdEn from './english/thirden';
import ThirdDe from './deutsch/thirdde';
import FourthEn from './english/fourthen';
import { Toggle } from './toggle/toggle';
const Main = () => {

    const [de, setDe] = useState(false)


    return (
        <>
            <main className="main p-relative">

                <h1 className="title text-center mt-1">Bardia Shahnazi</h1>
                <div className="language d-flex text-lang p-absolute">
                    <span className={de ? `text-muted transition` : `text-lang transition`}
                        onClick={() => setDe(false)}>En</span>
                    <strong>|</strong>
                    <span className={de ? `text-lang transition` : `text-muted transition`}
                        onClick={() => setDe(true)}>De</span>
                    <Toggle />
                </div>

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