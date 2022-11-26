import { useParams, Link } from 'react-router-dom'


const Article = (props) => {
    let { id } = useParams()
    let article = props.data.filter((article) => article.slug === id)[0].slug
    return (
        <>
            <Link to={'/articles'}>Back</Link>
            <div>
                The slug of the article is:::  {article}
            </div>
        </>
    )
}

export default Article