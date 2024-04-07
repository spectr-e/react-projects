const InterestCalc = ({ principalValue, interestRate, period, monthly }) => {
  // A = P (1 + r/n ) ^ nt => WITHOUT A MONTHLY CONTRIBUTION
  // A - future value of investment
  // P - principal value
  // r - interest rate
  // n - no. of compounding times in a year
  // t - no. of investment years

  const values = {
    P: principalValue,
    r: interestRate / 100,
    n: 12,
    t: period,
    monthly: monthly,
  }
  const withoutMonthly =
    values.P * Math.pow(1 + values.r / values.n, values.n * values.t)
  // monthly x {[(1 + r/n)(nt) - 1] / (r/n)} => WITH A MONTHLY CONTRIBUTION
  return (
    <div>
      KES{' '}
      {!values.monthly
        ? withoutMonthly.toFixed(2)
        : (
            withoutMonthly +
            (values.monthly *
              (Math.pow(1 + values.r / values.n, values.n * values.t) - 1)) /
              (values.r / values.n)
          ).toFixed(2)}
    </div>
  )
}

export default InterestCalc
