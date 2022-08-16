

const Second = ({ lang }) => {


    return (


        <section className="skill-section p-1">
            <h2 className="title">
                {!lang ? `My knowledges` : `Meine Kenntnisse`}
            </h2>
            <section className="skills d-grid grid-skills mt-1">
                <figure className="badge">
                    <img src="/icons/javascript.svg" alt="javascript" />
                    <figcaption>JavaScript</figcaption>
                </figure>

            </section>

        </section>
    )
}

export default Second