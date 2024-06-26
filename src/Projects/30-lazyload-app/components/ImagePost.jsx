import { Title } from '../../../components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ImagePost = ({ title, img }) => {
  return (
    <div className='card mb-4'>
      <div className='card-header'>
        {!title ? (
          <Title title={'Image Title'} classes={'subtitle'} />
        ) : (
          <h2 className='font-semibold'>{title.slice(0, 10)}</h2>
        )}
      </div>
      <div className='card-body d-flex' style={{ gap: 30 }}>
        <LazyLoadImage
          src={img}
          alt='jsonplaceholder.typicode.com'
          height={'fit-content'}
          width={480}
          effect='blur'
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        facere. Et perspiciatis veritatis labore facere, ut, doloremque ducimus
        optio velit obcaecati quam tempore a nobis voluptatem voluptas enim
        dolores magnam!
      </div>
    </div>
  )
}

export default ImagePost
