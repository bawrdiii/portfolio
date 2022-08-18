


const ThirdEn = ({ lang }) => {

    return (
        <section className={!lang ? `p-1 show project` : `hide`}>
            <h3 className="p-1">Some of my projects can be found in my
                <a className="github" href="https://github.com/bawrdiii"
                    target="_blank" rel="noreferrer">Github </a>
                account.</h3>
        </section>
    )
}
export default ThirdEn