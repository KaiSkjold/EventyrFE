import ChangeAccentColor from '../ChangeAccentColor/ChangeAccentColor';
import ChangeTheme from '../ChangeTheme/ChangeTheme'
import FontToggle from '../FontToggle/FontToggle'
import { AdjustLevels } from '../Svg/AdjustLevels';
import ChangeLanguage from '../Svg/ChangeLanguage';
import { ColorPalette } from '../Svg/ColorPalette';
import './Settings.css';

const Settings = () => {

    
  return (
    <div className="settings-container">
        <div className="settings-header">
            <h1>Indstillinger</h1>
            <p>Her kan du ændre dine indstillinger.</p>
        </div>

        {/* Dyslexi settings */}
        <div className="settings-item">
            <h3>Er du ordblind?</h3>
            <div className="settings-item-option dyslexi-option">
                <FontToggle />
            </div>
        </div>

        {/* TODO Language settings */}
        <div className="settings-item">
            <h3>Vælg sprog</h3>
            <div className="settings-item-option">
                <ChangeLanguage width={30} height={30} strokeColor="var(--text-color)" />
                <select name="language" id="language-select">
                    <option value="danish">Dansk</option>
                    <option value="english">Engelsk</option>
                    <option value="german">Tysk</option>
                    <option value="french">Fransk</option>
                </select>
            </div>
        </div>

        {/* TODO Level settings */}
        <div className="settings-item">
            <h3>Vælg niveau</h3>
            <div className="settings-item-option">
                <AdjustLevels width={30} height={30} strokeColor="var(--text-color)"/>
                <select name="level" id="level-select">
                    <option value="dyslexi">Ordblind</option>
                    <option value="beginner">Begynder</option>
                    <option value="intermediate">Mellem</option>
                    <option value="advanced">Avanceret</option>
                </select>
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
                <ColorPalette width={30} height={30} strokeColor='var(--accent-color)'/>
                <ChangeAccentColor />
            </div>
        </div>
    </div>
  )
}

export default Settings