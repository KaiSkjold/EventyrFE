import ChangeTheme from "../components/ChangeThemeComponent/ChangeTheme"

const SettingsPage = () => {
  return (
    <div className="settingsContainer">
        <div className="settingsHeader">
            <h1>Indstillinger</h1>
            <p>Her kan du ændre dine indstillinger.</p>
        </div>

        {/* Language settings */}
        <div className="languageSettings">
            <h3>Vælg sprog</h3>
            <div className="languageOptions">
                <p>Dansk/English</p>
            </div>
        </div>

        {/* Level settings */}
        <div className="levelSettings">
            <h3>Vælg niveau</h3>
            <div className="levelOptions">
                <p>vælg niveau</p>
            </div>
        </div>
        
        {/* Theme settings */}
        <div className="themeSettings">
            <h3>Vælg tema</h3>
            <div className="themeOptions">
                <ChangeTheme />
            </div>
        </div>

        {/* Select accent color */}
        <div className="accentColorSettings">
            <h3>Vælg accentfarve</h3>
            <div className="accentColorOptions">
                <p>Rød/Grøn/Blå</p>
            </div>
        </div>
    </div>
  )
}

export default SettingsPage