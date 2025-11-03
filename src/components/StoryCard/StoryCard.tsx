import { useState } from 'react'
import Heart from '../Svg/Heart'
import './StoryCard.css'

const StoryCard = () => {

  const [isFavorite, setIsFavorite] = useState<'filled' | 'outlined'>('outlined')
  const handleFavoriteClick = () => {
    setIsFavorite(isFavorite === 'filled' ? 'outlined' : 'filled')
  }

  return (
    <div className="card-container">
      <div className="favorite" onClick={handleFavoriteClick}>
        <Heart heartType={isFavorite}/>
      </div>
      <div className="card-main">
        <div className="card-top">
          <h2>Story Title</h2>
        </div>
        <div className="card-img"><img src="https://picsum.photos/300/200" alt="Story Cover Image"/></div>
        <div className="card-description"><p>Description</p></div>
      </div>
    </div>
  )
}

export default StoryCard