import { useTranslation } from 'react-i18next';
import ChangeAccentColor from '../ChangeAccentColor/ChangeAccentColor';
import ChangeTheme from '../ChangeTheme/ChangeTheme'
import FontToggle from '../FontToggle/FontToggle'
import { AdjustLevels } from '../Svg/AdjustLevels';
import ChangeLanguage from '../Svg/ChangeLanguage';
import { ColorPalette } from '../Svg/ColorPalette';
import './Settings.css';
import Cogwheel from '../Svg/Cogwheel';

const Settings = () => {

    // For translations
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
  };

    
  return (
    <div className="settings-container">
        <div className="settings-header">
            <span className='settings-header-content'>
                <Cogwheel width={40} height={40} strokeColor="var(--text-color)"/>
                <h2>Indstillinger</h2>
            </span>
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
                {/* Use the select onChange handler and language codes as values.
                    onClick on <option> is unreliable; this ensures i18n.changeLanguage
                    is called with a valid language code (e.g. 'da', 'en'). The select's
                    value is bound to the currently active language so the UI reflects it. */}
                <select
                    name="language"
                    id="language-select"
                    value={i18n.language || 'en'}
                    onChange={(e) => changeLanguage(e.target.value)}
                >
                    <option value="da">{t('settings.change_language.danish')}</option>
                    <option value="en">{t('settings.change_language.english')}</option>
                    <option value="de">{t('settings.change_language.german')}</option>
                    <option value="fr">{t('settings.change_language.french')}</option>
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