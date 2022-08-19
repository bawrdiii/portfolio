

const ThirdDe = ({ lang }) => {


    return (
        <section className={!lang ? `hide` : `p-1 mt-3-5 show project`}>
            <h3
                className="p-1">Könnten Sie einige meiner Projekte in meinem
                <a className="github"
                    href="https://github.com/bawrdiii"
                    target="_blank"
                    rel="noreferrer">
                    Github
                </a>
                account finden .
            </h3>
        </section>
    )
}
export default ThirdDe