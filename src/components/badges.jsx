
const Badges = ({ src, skill, className }) => {
    return (
        <figure className={`badge ${className}`}>
            <img src={src} alt={skill} />
            <figcaption>{skill}</figcaption>
        </figure>
    )
}

export default Badges