import ChangeTheme from '../ChangeThemeComponent/ChangeTheme'
import FontToggle from '../FontToggle/FontToggle'
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

        {/* Language settings */}
        <div className="settings-item">
            <h3>Vælg sprog</h3>
            <div className="settings-item-option">
                <select name="language" id="language-select">
                    <option value="danish">Dansk</option>
                    <option value="english">Engelsk</option>
                </select>
            </div>
        </div>

        {/* Level settings */}
        <div className="settings-item">
            <h3>Vælg niveau</h3>
            <div className="settings-item-option">
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
                <select name="accent-color" id="accent-color-select">
                    <option className='blue' value="blue">Blå</option>
                    <option className='red' value="red">Rød</option>
                    <option className='green' value="green">Grøn</option>
                    <option className='purple' value="purple">Lilla</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Settings