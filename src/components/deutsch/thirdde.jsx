import { useEffect } from "react"


const ThirdDe = ({ lang }) => {

    useEffect(() => {
        var width = document.body.clientWidth;
        if (width < 426) {
            let a = document.querySelector("#github")
            a.classList.remove("github")
            a.classList = "github-project degit"
        }

    })

    return (
        <section className={!lang ? `hide` : `p-1 mt-3-5 show project`}>
            <h3
                className="p-1">Könnten Sie einige meiner Projekte in meinem
                <a className="github"
                    href="https://github.com/bawrdiii"
                    target="_blank"
                    rel="noreferrer"
                    id="github">
                    {" "} Github {" "}
                </a>
                account finden .
            </h3>
        </section>
    )
}
export default ThirdDe