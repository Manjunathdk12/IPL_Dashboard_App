import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails

  return (
    <div className="latest-match">
      <h2 className="match-heading">Latest Match Played Against</h2>
      <div className="match-info">
        <div className="competing-team">
          <p className="competing-team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>

        <div className="match-details">
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man of the Match</p>
          <p>{manOfTheMatch}</p>
          <p>Umpires</p>
          <p> {umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
