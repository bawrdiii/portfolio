import "../main.css"

const Section1 = ({ btnOnclick, lang, }) => {

    return (
        <section className={lang ? `hide` : `show p-1`}>
            <article className="introduction p-1">
                <h2> Short introduction: <br />
                    Hi {"👋"}, <br />
                    <span>My name is Bardia Shahnazi.
                        I'm 22 years old. I used to live in Iran, but now
                        I'm living in Budapest , Hungary. I have experience
                        in development
                        for about 9 months.
                        I've developed many websites for training with {" "}
                        <span className="html"> HTML5, </span>

                        <span className="css">CSS3,</span>
                        <span className="bootstrap"> Bootstrap, </span>
                        <span className="javascript"> JavaScript, </span>
                        and frameworks
                        such as
                        <span className="react"> React.js </span>
                        and
                        <span className="next"> Next.js, </span>
                        and I'm also learning.
                        I'm interested in learning;
                        therefore, I want to learn back-End development also.

                    </span>
                </h2>

                <a className="btn cv d-flex p-relative"
                    href="/Cv-English.pdf"
                    download="Resume.pdf"
                    onClick={btnOnclick}
                >
                    Download my resume </a>

            </article>
        </section>
    )
}
export default Section1