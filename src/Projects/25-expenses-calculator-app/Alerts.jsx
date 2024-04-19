const Alerts = ({ type, text = 'Alert' }) => {
  return <div className={`alert alert ${type}`}>{text}</div>
}

export default Alerts
