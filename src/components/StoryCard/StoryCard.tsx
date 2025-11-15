import { useState } from 'react'
import Heart from '../Svg/Heart'
import './StoryCard.css'
import Button from '../ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { isLikelyUrl, isTranslationKeyCandidate, mapDbKeyToLocaleKey } from '../../utils/helpers';

interface StoryCardProps {
  title: string
  description: string
  imgUrl: string
  storyId: string
}

const StoryCard = ({ title, description, imgUrl, storyId }: StoryCardProps) => {
  
  // navigate to page
  const navigate = useNavigate();
  
  // translations
  const { t } = useTranslation();

  // Translate when the prop contains a translation key instead of plain text.
  // Keys from the locale files use `story_one` / `story.one` / `story-one` formats
  // and do not contain spaces. Detect those patterns conservatively.
  const translateIfKey = (s: string) => {
    if (!s) return s;
    if (!isTranslationKeyCandidate(s)) return s;

    const keyCandidate = mapDbKeyToLocaleKey(s);
    const translated = t(keyCandidate);
    return translated === keyCandidate ? s : translated;
  };

  const storyTitle = translateIfKey(title);
  const storyDescription = translateIfKey(description);
  const storyImage = isLikelyUrl(imgUrl) ? imgUrl : translateIfKey(imgUrl);
  
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
    <div className="card-container" data-testid="story-card">
      <button
        type="button"
        className="favorite"
        onClick={handleFavoriteClick}
        aria-pressed={isFavorite === 'filled'}
      >
        <Heart heartType={isFavorite} width={20} height={20} strokeColor="var(--text-color)"/>
      </button>
      <div className="card-main">
        <div className="card-top">
          <h3>{storyTitle}</h3>
        </div>
         <div 
            className="card-img"
            style={{ backgroundImage: `url(${storyImage})` }}
            />
        <div className={`card-description ${isExpanded ? 'expanded' : ''}`}><p onClick={toggleDescription}>{storyDescription}</p></div>
  <Button data-testid="read-story-button" borderStyle='with-border' onClick={() => navigate(`/story/${storyId}`)}>Læs historie</Button>
      </div>
    </div>
  )
}

export default StoryCard