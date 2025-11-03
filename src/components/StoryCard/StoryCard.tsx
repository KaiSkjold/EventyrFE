import { useState } from 'react'
import Heart from '../Svg/Heart'
import './StoryCard.css'
import Button from '../ui/Button/Button'

interface StoryCardProps {
  title: string
  description: string
  imageUrl: string
}

const StoryCard = ({ title, description, imageUrl }: StoryCardProps) => {

  const [isFavorite, setIsFavorite] = useState<'filled' | 'outlined'>('outlined')
  const handleFavoriteClick = () => {
    setIsFavorite(isFavorite === 'filled' ? 'outlined' : 'filled')
  }

  return (
    <div className="card-container">
      <span className="favorite" onClick={handleFavoriteClick}><Heart heartType={isFavorite}/></span>
      <div className="card-main">
        <div className="card-top">
          <h3>{title}</h3>
        </div>
         <div 
            className="card-img"
            style={{ backgroundImage: `url(${imageUrl})` }}
            />
        <div className="card-description"><p>{description}</p></div>
        <Button borderStyle='with-border'>Læs historie</Button>
      </div>
    </div>
  )
}

export default StoryCard