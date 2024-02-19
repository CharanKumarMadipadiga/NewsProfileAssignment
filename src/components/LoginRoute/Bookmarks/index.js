import './index.css'

import Data from '../Data.json'

const Bookmarks=()=>{

    const {bookmarks}=Data
    return (
        <div className='bookmarks-container'>
            <ul className='bookmarks-list-con'>
                {bookmarks.map(eachItem=>(
                    <li className='bookmarks-card'>
                        <h1 className='title'>{eachItem.title}</h1>
                        <img src={eachItem.thumbnail} alt="thumbnail" className='thumbnail-image'/>
                        <p className='excerpt'>{eachItem.excerpt}</p>

                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Bookmarks