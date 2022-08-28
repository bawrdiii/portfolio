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

                        <span className="react"> React.js </span>
                        library
                        and
                        <span className="next"> Next.js </span>
                        framework for example
                        <a href="https://github.com/bawrdiii/Todo"
                            target="_blank" rel="noreferrer"
                            className="github-project">
                            Todo app
                        </a>and
                        <a
                            target="_blank" rel="noreferrer"
                            href="https://github.com/bawrdiii/Villa"
                            className="github-project">
                            Villa renting project
                        </a>.
                        I'm also learning.
                        I'm interested in learning;
                        therefore, I want to learn back-End development also.

                    </span>
                </h2>

                <a className="btn cv d-flex p-relative"
                    href="/Cv-English.pdf"
                    download="Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="btn-p">
                        Download my resume
                    </p>
                </a>

            </article>
        </section>
    )
}
export default Section1