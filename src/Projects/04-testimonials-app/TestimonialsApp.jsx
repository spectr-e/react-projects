import { useEffect, useState } from 'react'
import { Button, Title } from '../../components'
import { FaClipboardCheck, FaUser, FaComments } from 'react-icons/fa'

const TestimonialsApp = () => {
  const [testimonials, setTestimonials] = useState('')

  // Fetch Data from JSON Placeholder
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [testimonials])
  const [items, setItems] = useState([])

  // Event Listeners
  const handleClick = () => {}

  return (
    <div className='container'>
      <div className=' text-center m-auto'>
        {/* App Title */}
        <Title title={'Testimonials App'} />

        {/* App Buttons */}
        {/* Posts */}
        <Button
          text={'Posts'}
          handleClick={() => setTestimonials('Posts')}
          classes={'btn-info'}
          icon={<FaClipboardCheck />}
        />

        {/* User */}
        <Button
          text={'Users'}
          handleClick={() => setTestimonials('Users')}
          classes={'btn-info'}
          icon={<FaUser />}
        />

        {/* Comments */}
        <Button
          text={'Comments'}
          handleClick={() => setTestimonials('Comments')}
          classes={'btn-info'}
          icon={<FaComments />}
        />

        {/* App Subtitle */}
        <Title
          title={!testimonials ? 'Select form above' : testimonials}
          classes={'subtitle'}
        />
      </div>
      {!items
        ? null
        : items.map((item, idx) => {
            return (
              <div key={idx} className='card card-primary mb-2'>
                {item.name && <h2 className='card-header'>{item.name}</h2>}
                <div className='card-body'>
                  <h4 className=''>{item.title}</h4>
                  <p className=''>{item.body}</p>
                </div>
                {item.email && (
                  <small className='card-footer'>{item.email}</small>
                )}
              </div>
            )
          })}
    </div>
  )
}

export default TestimonialsApp
