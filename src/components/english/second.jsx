import Badges from "../badges"


const Second = ({ lang }) => {


    return (


        <section className="skill-section p-1">
            <h2 className="title text-center mb-1">
                {!lang ? `My knowledges` : `Meine Kenntnisse`}
            </h2>
            <section className="skills d-grid grid-skills mt-1">
                <Badges src="icons/html5.svg"
                    skill='HTML5' />
                <Badges src='icons/css3.svg'
                    skill='CSS3'
                />
                <Badges
                    skill='Bootstrap'
                    src='icons/bootstrap.svg'
                />
                <Badges
                    src="icons/javascript.svg"
                    skill="Javascript"
                />
                <Badges
                    skill='React.js'
                    src='icons/reactjs-icon.svg'
                />
                <Badges src='icons/next-js-logo-7929BCD36F-seeklogo.com.png'
                    skill='Next.js'
                    className='nextjs'
                />
                <Badges
                    skill='Git'
                    src='icons/git.svg'
                />
                <Badges
                    skill="Word"
                    src='icons/icons8-microsoft-word-2019-50.svg'
                />
                <Badges skill='Power Point'
                    src='icons/icons8-microsoft-powerpoint-48.svg'
                />
                <Badges
                    skill='Visual studio'
                    src='icons/icons8-visual-studio-code-2019-50.svg'
                />
            </section>

        </section>
    )
}

export default Second