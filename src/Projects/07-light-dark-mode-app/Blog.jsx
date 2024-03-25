import { Button, Title } from '../../components'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

const Blog = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className='container'>
      <div className='text-center'>
        <Title title={`Blog on ${theme} theme`} />
      </div>
      <span
        style={{
          justifyContent: 'right',
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <Button
          text={theme === 'dark' ? 'light' : 'dark'}
          handleClick={changeTheme}
          classes={`${theme === 'dark' && 'btn-light'} btn-sm`}
        />
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        laudantium error odit mollitia commodi, voluptas qui incidunt
        praesentium? Qui id rerum repellat doloribus quaerat esse reiciendis a
        cumque optio est!
      </p>
    </div>
  )
}

export default Blog
