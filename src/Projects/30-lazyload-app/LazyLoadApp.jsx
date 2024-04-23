import { useEffect, useState } from 'react'
import { Title } from '../../components'

const LazyLoadApp = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div className='container'>
      <Title
        title={'Image Grid Scroll with Lazy Load'}
        classes={'text-center subtitle'}
      />
      <h1 className='text-center'>Post Images</h1>
      <div className='container d-flex flex-column' style={{ gap: 30 }}>
        {posts.map((post, index) => {
          /* TODO: Create Lazy Load Post Component */
          // <ImagePost key={index} title={post.title} img={post.url}/>
        })}
      </div>
    </div>
  )
}

export default LazyLoadApp
