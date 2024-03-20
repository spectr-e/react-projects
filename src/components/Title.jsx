const Title = ({ title, classes }) => {
  return (
    <h1 className={!classes ? 'title ' : classes}>
      {!title ? 'Enter a Title' : title}
    </h1>
  )
}

export default Title
