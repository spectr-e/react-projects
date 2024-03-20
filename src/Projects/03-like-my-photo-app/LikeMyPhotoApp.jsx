import { useState } from 'react'
import { Title } from '../../components'
import { FaHeart, FaRegHeart, FaDog } from 'react-icons/fa'
import { MdChatBubbleOutline } from 'react-icons/md'
import { Dog } from '../../assets'

const LikeMyPhotoApp = () => {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(false)

  const handleClick = () => {
    if (!like) {
      setLike(true)
    } else {
      setLike(false)
    }

    setCount(count + 1)
  }

  return (
    <div className='container m-auto text-center'>
      {/* App Title */}
      <Title title={'Double Click to Like'} />

      {/* Display Likes */}
      <Title title={`Likes ${count}`} classes={'subtitle'} />

      {/* Card */}
      <div className='card card-dark m-auto' style={{ width: 300 }}>
        {/* Card Header */}
        <div
          className='card-header font-xl d-flex'
          style={{ justifyContent: 'space-around' }}
        >
          <FaDog />
          <small>DogyDog</small>
        </div>

        {/* Card Body */}
        <img
          src={Dog}
          alt='img'
          onDoubleClick={handleClick}
          style={{ height: 'fit-content', cursor: 'pointer' }}
        />

        {/* Card Footer */}
        <div
          className='card-footer font-xl d-flex'
          style={{ justifyContent: 'space-between' }}
        >
          {/* Chat Button */}
          <MdChatBubbleOutline style={{ cursor: 'pointer' }} />

          {/* Like Button */}
          {like ? (
            <FaHeart
              style={{ cursor: 'pointer' }}
              className='text-danger'
              onClick={handleClick}
            />
          ) : (
            <FaRegHeart style={{ cursor: 'pointer' }} onClick={handleClick} />
          )}
        </div>
      </div>
    </div>
  )
}

export default LikeMyPhotoApp
