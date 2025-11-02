import ChangeTheme from '../ChangeThemeComponent/ChangeTheme'
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
        <div className="settings-header">
            <h1>Indstillinger</h1>
            <p>Her kan du ændre dine indstillinger.</p>
        </div>

        {/* Language settings */}
        <div className="settings-item">
            <h3>Vælg sprog</h3>
            <div className="settings-item-option">
                <p>Dansk/English</p>
            </div>
        </div>

        {/* Level settings */}
        <div className="settings-item">
            <h3>Vælg niveau</h3>
            <div className="settings-item-option">
                <p>vælg niveau</p>
            </div>
        </div>
        
        {/* Theme settings */}
        <div className="settings-item">
            <h3>Vælg tema</h3>
            <div className="settings-item-option">
                <ChangeTheme />
            </div>
        </div>

        {/* Select accent color */}
        <div className="settings-item">
            <h3>Vælg accentfarve</h3>
            <div className="settings-item-option">
                <p>Rød/Grøn/Blå</p>
            </div>
        </div>
    </div>
  )
}

export default Settings