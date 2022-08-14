import "../main.css"

const Section1 = ({ btnOnclick, lang, }) => {

    return (
        <section className="p-1">
            <article className={!lang ? `introduction p-1 show` : `introduction p-1 hide`}>
                <h2> Short introduction: <br />
                    Hi {"👋"}, <br />
                    <span>My name is Bardia Shahnazi.
                        I'm 22 years old. I have experience
                        of about 9 months in development.
                        I've developed many websites for training with {" "}
                        <span className="html"> HTML5, </span>

                        <span className="css">CSS3,</span>
                        <span className="bootstrap"> Bootstrap, </span>
                        <span className="javascript"> Javascript, </span>
                        and frameworks
                        such as
                        <span className="react"> React.js </span>
                        and
                        <span className="next"> Next.js, </span>
                        and I'm also learning.
                        I'm interested in learning;
                        therefore, I want to learn back-End development also.
                        I used to live in Iran, but now
                        I'm living in Budapest , Hungary.
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