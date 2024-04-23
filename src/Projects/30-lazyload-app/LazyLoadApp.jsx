import { useState } from 'react'
import { Title } from '../../components'

const LazyLoadApp = () => {
  const [posts, setPosts] = useState([])
  return (
    <div className='container'>
      <Title
        title={'Image Grid Scroll with Lazy Load'}
        classes={'text-center subtitle'}
      />
      <h1 className='text-center'>Post Images</h1>
      <div className='container d-flex flex-column' style={{ gap: 30 }}>
        {posts.map((post, index) => {
          {
            /* TODO: Create Lazy Load Post Component */
          }
        })}
      </div>
    </div>
  )
}

export default LazyLoadApp
