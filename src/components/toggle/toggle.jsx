import { useEffect } from "react"


export const Toggle = () => {

    const labelOnclick = () => {

        let label = document.querySelector("#toggle-label")
        label.addEventListener("click", () => {
            let span = document.querySelector("#toggle-span")
            span.classList.toggle("toggle-span-after")
        })
    }



    return (
        <div className="p-absolute l-3 toggler">
            <label
                htmlFor="toggler"
                id="toggle-label"
                onClick={labelOnclick}>
                <input type="checkbox"
                    name="switch"
                    id="toggler"
                    title="dark / light"
                    className="switch"
                />
                <span className="toggle-span" id="toggle-span"></span>
            </label>
        </div>
    )
}