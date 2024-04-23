import { Title } from '../../../components'

const ImagePost = ({ title, img }) => {
  return (
    <div className='card mb-4'>
      <Title title={title} />
    </div>
  )
}

export default ImagePost
