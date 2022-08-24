import { useState } from "react"


export const Toggle = ({ onChange, value }) => {

    const [dark, setDark] = useState(true)

    const labelOnclick = (e) => {
        e.preventDefault()
        let span = document.querySelector("#toggle-span")
        let label = document.querySelector('#toggle-label')
        span.classList.toggle("toggle-span-after")
        label.classList.toggle("toggle-label-after")
    }




    return (
        <div className="p-absolute l-3 toggler">
            <label
                htmlFor="toggler"
                id="toggle-label"
                className="toggle-label"
                onClick={labelOnclick}>
                <input type="checkbox"
                    name="switch"
                    id="toggler"
                    value={value}
                    onChange={onChange}
                    title="dark / light"
                    className="switch"
                />
                <span className="toggle-span" id="toggle-span"></span>
            </label>
        </div >
    )
}