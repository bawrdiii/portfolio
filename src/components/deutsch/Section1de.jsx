
const Section1de = () => {


    return (

        <section className="p-1">
            <article className={lang ? `introduction p-1 show` : `introduction p-1 hide`}>
                <h2> Kurzvorstellung: <br />
                    Hallo {"👋"}, <br />
                    <span>Mein Name ist Bardia Shahnazi. Ich bin 22 Jahre alt. Ich habe Erfahrung ungefähr 
                    </span>
                </h2>

                <a className="btn cv d-flex p-relative"
                    href="/Cv-English.pdf"
                    download="Resume"
                    onClick={rippleHandler}
                >
                    Download my resume </a>

            </article>
        </section>
    )
}
export default Section1de