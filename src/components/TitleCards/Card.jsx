const Card = ({ image, name }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <p>{name}</p>
    </div>
  )
}
export default Card
