

export const Toggle = ({ labelOnclick, value }) => {






    return (
        <div className="p-absolute l-3 toggler">
            <label
                htmlFor="toggle"
                id="toggle-label"
                className="toggle-label"
                onClick={labelOnclick}>
                <input type="checkbox"
                    name="switch"
                    id="toggle"
                    value={value}
                    title="dark / light"
                    className="switch"
                />
                <span className="toggle-span" id="toggle-span"></span>
            </label>


        </div >
    )
}