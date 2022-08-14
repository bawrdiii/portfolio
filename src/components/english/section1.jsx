import "../main.css"

const Section1 = ({ btnOnclick, lang, }) => {

    return (
        <section className="p-relative p-1">
            <article className={!lang ? `introduction p-1 show` : `introduction p-1 hide`}>
                <h2> Short introduction: <br />
                    Hi {"👋"}, <br />
                    <span>My name is Bardia Shahnazi.
                        I'm 22 years old and learning
                        Front-End development. I'm interested in learning,
                        Therefore, I want to learn Back-End development also.
                        I'm getting used to live in Iran but now I'm living in Budapest , Hungary
                    </span>
                </h2>

                <a className="btn cv d-flex p-relative"
                    href="/Cv-English.pdf"
                    download="Resume"
                    onClick={btnOnclick}
                >
                    Download my resume </a>

            </article>
        </section>
    )
}
export default Section1