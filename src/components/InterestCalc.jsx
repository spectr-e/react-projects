const InterestCalc = ({ principalValue, interestRate, period, monthly }) => {
  // A = P (1 + r/n ) ^ nt => WITHOUT A MONTHLY CONTRIBUTION
  // A - future value of investment
  // P - principal value
  // r - interest rate
  // n - no. of compounding times in a year
  // t - no. of investment years

  const A = {
    P: principalValue,
    r: interestRate / 100,
    n: 12,
    t: period,
    PMT: monthly,
  }
  // PMT x {[(1 + r/n)(nt) - 1] / (r/n)} => WITH A MONTHLY CONTRIBUTION
  return (
    <div>
      KES{' '}
      {!A.PMT
        ? (A.P * Math.pow(1 + A.r / A.n, A.n * A.t)).toFixed(2)
        : (
            A.P * Math.pow(1 + A.r / A.n, A.n * A.t) +
            (A.PMT * (Math.pow(1 + A.r / A.n, A.n * A.t) - 1)) / (A.r / A.n)
          ).toFixed(2)}
    </div>
  )
}

export default InterestCalc
