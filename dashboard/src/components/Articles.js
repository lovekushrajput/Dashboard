import React from 'react';
import { Link, Outlet, MenuItem } from 'react-router-dom'


class Articles extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    handleKey = (e) => {
        this.setState({
            value: this.props.data.filter((article) => article.title.toUpperCase().includes(e.target.value.toUpperCase()))
        })
    }

    render() {
        let articles = this.state.value
        return (
            <div>
                <input type="text" placeholder="search" onKeyUp={this.handleKey} />
                {articles ? <WithArticle filteredData={articles} /> : <NonArticle articlesData={this.props.data} />}
                <Outlet />
            </div>
        )
    }

}


function WithArticle(props) {
    return (
        <>
            <ul className='article'>
                {
                    props.filteredData.map((elm, i) => {
                        return (
                            <li key={i}>
                                <Link to={elm.slug} style={{ fontWeight: 700, fontSize: '1.3rem' }}> {elm.title}</Link>
                                <p>{elm.author}</p>
                            </li>
                        )
                    })
                }
            </ul>


        </>
    )
}

function NonArticle(props) {
    return (
        <>
            <ul className='article'>
                {
                    props.articlesData.map((elm, i) => {
                        return (
                            <li key={i}>
                                <Link to={elm.slug} style={{ fontWeight: 700, fontSize: '1.3rem' }}> {elm.title}</Link>
                                <p>{elm.author}</p>
                            </li>
                        )
                    })
                }
            </ul>


        </>
    )
}


export default Articles


