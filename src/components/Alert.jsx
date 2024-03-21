import { useEffect, useState } from 'react'

const Alert = () => {
  useEffect(() => {
    first

    return () => {
      second
    }
  }, [third])

  const [first, setfirst] = useState(second)
  return <div>Alert</div>
}

export default Alert
