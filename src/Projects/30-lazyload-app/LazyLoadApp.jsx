import { useEffect, useState } from 'react'
import { Title } from '../../components'
import ImagePost from './components/ImagePost'

const LazyLoadApp = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div className='container'>
      <Title title={'Lazy Load App'} classes={'text-center title'} />
      <Title title={'Post Images'} classes={'text-center'} />
      <div className='container d-flex flex-column' style={{ gap: 30 }}>
        {posts.map((post, index) => (
          <ImagePost key={index} title={post.title} img={post.url} />
        ))}
      </div>
    </div>
  )
}

export default LazyLoadApp
