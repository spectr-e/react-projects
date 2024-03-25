import { useEffect, useState } from 'react'
import Blog from './Blog'
import { ThemeContext, themes } from './context/ThemeContext'

const LightDarkModeApp = () => {
  useEffect(() => {
    let docBody = document.body
    switch (theme) {
      case themes.light:
        docBody.classList.remove('bg-dark')
        docBody.classList.remove('text-light')
        docBody.classList.add('bg-light')
        docBody.classList.add('text-dark')
        break
      case themes.dark:
        docBody.classList.remove('bg-light')
        docBody.classList.remove('text-dark')
        docBody.classList.add('bg-dark')
        docBody.classList.add('text-light')
        break
    }
  })

  const [theme, setTheme] = useState(themes.dark)

  const changeTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark)
    } else {
      setTheme(themes.light)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog />
    </ThemeContext.Provider>
  )
}

export default LightDarkModeApp
