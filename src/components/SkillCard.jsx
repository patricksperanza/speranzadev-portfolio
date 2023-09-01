import "./SkillCard.css"

const SkillCard = ({ imgSrc, label }) => {
  return (
    <div className="skill-card">
      <img className="skill-card-image" src={imgSrc} alt="image" />
      <p className="skill-card-label">{label}</p>
    </div>
  )
}

export default SkillCard
