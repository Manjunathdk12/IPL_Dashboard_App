import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-logo"
      />
      <p className="match-team">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={matchStatus === 'Won' ? 'won' : 'lost'}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
