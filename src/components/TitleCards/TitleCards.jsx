import data from '../../assets/cards/Cards_data'
import Card from './Card'
import './TitleCards.css'
import { useEffect, useRef } from 'react'

const TitleCards = ({ title, category }) => {
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
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {data.map((card, index) => {
          return <Card image={card.image} name={card.name} key={index} />
        })}
      </div>
    </div>
  )
}
export default TitleCards
