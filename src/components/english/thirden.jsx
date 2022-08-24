import { useEffect } from "react";


const ThirdEn = ({ lang }) => {
    useEffect(() => {
        var width = document.body.clientWidth;
        let a = document.querySelector("#github1")
        if (width < 426) {
            a.classList.remove("github")
            a.classList = "github-project lastgit"

        }
        else if (width > 426) {
            a.classList.remove("github-project")
            a.classList.remove("lastgit")
            a.classList.add("github")
        }

    })
    return (
        <section className={!lang ? `p-1 mt-3-5 show project` : `hide`}>
            <h3 className="p-1">Some of my projects can be found in my
                <a className="github" href="https://github.com/bawrdiii"
                    target="_blank" rel="noreferrer" id="github1">{" "}Github </a>
                account.</h3>
        </section>
    )
}
export default ThirdEn