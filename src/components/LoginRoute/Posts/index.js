import './index.css'

import Data from '../Data.json'

const Posts=()=>{

    const {articles}=Data
    return (
        <div className='Post-container'>
            <ul className='articles-list-con'>
                {articles.map(eachItem=>(
                    <li className='article-card'>
                        <h1 className='title'>{eachItem.title}</h1>
                        <img src={eachItem.thumbnail} alt="thumbnail" className='thumbnail-image'/>
                        <p className='excerpt'>{eachItem.excerpt}</p>

                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Posts