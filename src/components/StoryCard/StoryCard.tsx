import { useState } from 'react'
import Heart from '../Svg/Heart'
import './StoryCard.css'
import Button from '../ui/Button/Button'
import { useNavigate } from 'react-router-dom'

interface StoryCardProps {
  title: string
  description: string
  imgUrl: string
  storyId: string
}

const StoryCard = ({ title, description, imgUrl, storyId }: StoryCardProps) => {
  
  // navigate to page
  const navigate = useNavigate();
  
  
  // favorite state
  const [isFavorite, setIsFavorite] = useState<'filled' | 'outlined'>('outlined')
  const handleFavoriteClick = () => {
    setIsFavorite(isFavorite === 'filled' ? 'outlined' : 'filled')
  }
  // expand text
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
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
            style={{ backgroundImage: `url(${imgUrl})` }}
            />
        <div className={`card-description ${isExpanded ? 'expanded' : ''}`}><p onClick={toggleDescription}>{description}</p></div>
  <Button borderStyle='with-border' onClick={() => navigate(`/story/${storyId}`)}>Læs historie</Button>
      </div>
    </div>
  )
}

export default StoryCard