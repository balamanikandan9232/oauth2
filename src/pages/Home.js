import React from 'react'
import Card from '../components/Card'
import { posts } from '../Data'

const Home = () => {
    return (
        <div className='home'>
            {posts.map(post => (
                <Card post={post} />
            ))}

        </div>
    )
}

export default Home