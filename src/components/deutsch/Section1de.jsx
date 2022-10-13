const Section1de = ({ lang }) => {


    return (

        <section className={!lang ? `hide` : `p-1 show`}>
            <article className="introduction p-1">
                <h2>Hallo {"👋"}, <br />
                    <span>Mein Name ist Bardia Shahnazi.
                        Ich bin 22 Jahre alt.
                        Ich habe
                        im Iran gewohnt aber momentan wohne ich in Augsburg, Deutschland.
                        Ich würde gern sagen, dass ich
                        Erfahrung ungefähr 11 Monaten habe, um mit Programmiersprache wie
                        <span className="javascript">JavaScript</span>
                        und
                        <span className="html">HTML5,</span>
                        <span className="css">CSS3</span>
                        und Css framework
                        <span className="bootstrap">Bootstrap</span>
                        und Javascript-bibliothek wie
                        <span className="react">React.js</span>
                        und framework wie
                        <span className="next">Next.Js</span>
                        viele Website zum Üben zu entwickeln. zum Beispiel
                        <a
                            href="https://github.com/bawrdiii/Todo"
                            target="_blank" rel="noreferrer"
                            className="github-project"
                        >
                            Todo App
                        </a>
                        und
                        <a
                            href="https://github.com/bawrdiii/Villa"
                            target="_blank" rel="noreferrer"
                            className="github-project"
                        > Villa Vermietungsprojekt
                        </a>.
                        Insgesamt bin ich interessiert, um
                        Neues zu lernen. Deshalb bin ich sehr motiviert um back-end
                        zu lernen und in einem Erfahrenen Team zu arbeiten.
                    </span>
                </h2>

                <a className="btn cv d-flex p-relative"
                    href="/Lebenslauf.pdf"
                    download="Resume"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="btn-p">

                        Meinen Lebenslauf
                    </p>
                </a>

            </article>
        </section>
    )
}
export default Section1de