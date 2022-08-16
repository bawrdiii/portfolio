
const Section1de = ({ rippleHandler, lang }) => {


    return (

        <section className={!lang ? `hide` : `p-1 show`}>
            <article className="introduction p-1">
                <h2> Kurzvorstellung: <br />
                    Hallo {"👋"}, <br />
                    <span>Mein Name ist Bardia Shahnazi.
                        Ich bin 22 Jahre alt.
                        Ich habe
                        im Iran gewohnt aber momentan wohne ich in Budapest, Ungarn.
                        Ich würde gern sagen, dass ich
                        Erfahrung ungefähr 9 Monaten habe, um mit Programmiersprache wie
                        <span className="javascript">JavaScript</span>
                        und <span className="html">HTML5,</span>
                        <span className="css">CSS3</span> und Css framework
                        <span className="bootstrap">Bootstrap</span>
                        und
                        Javascript frameworks wie
                        <span className="react">React.js</span> und
                        <span className="next">Next.Js</span>
                        viele Website zum Üben zu entwickeln. zum Beispiel Todo App und
                        Villa Vermietungsprojekt. Insgesamt bin ich interessiert, um
                        Neues zu lernen. Deshalb bin ich sehr motiviert um back-end
                        zu lernen und in einem Erfahrenen Team zu arbeiten.


                    </span>
                </h2>

                <a className="btn cv d-flex p-relative"
                    href="/Lebenslauf.pdf"
                    download="Resume"
                    onClick={rippleHandler}
                >
                    Meinen Lebenslauf </a>

            </article>
        </section>
    )
}
export default Section1de