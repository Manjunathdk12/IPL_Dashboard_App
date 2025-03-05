import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card">
      <img src={teamImageUrl} alt={name} className="team-logo" />
      <p className="team-name">{name}</p>
    </Link>
  )
}

export default TeamCard
