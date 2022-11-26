import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2 className='heading'> 🚀 Welcome to Homepage!</h2>

            <ul className='main-hero'>
                <li>
                    <Link to='/articles' end>ARTICLES PAGE</Link >
                </li>

                <li>
                    <Link to='/books' end> BOOKS PAGE   </Link >
                </li>

                <li>
                    <Link to='/peoples' end>PEOPLES PAGE   </Link >
                </li>
            </ul>
        </div>
    )
}

export default Home