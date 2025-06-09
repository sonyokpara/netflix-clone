import data from '../../assets/cards/Cards_data'
import './TitleCards.css'
import { useEffect, useRef } from 'react'

const TitleCards = () => {
  const cardsRef = useRef()

  const handleWheel = (e) => {
    e.preventDefault()
    cardsRef.current.scrollLeft += e.deltaY
  }

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className="title-cards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default TitleCards
