import { Link } from "react-router-dom"
import Settings from "../components/Settings/Settings"
import { ArrowNarrowLeft } from "../components/Svg/ArrowNarrowLeft"


const SettingsPage = () => {
  return (
    <div>
      <Settings />
        <div className="settings-item-option">
            <ArrowNarrowLeft width={20} height={20} strokeColor='var(--text-color)'/>
            <Link to="/">
                <p>Tilbage til forsiden: Læs en historie</p>
            </Link>
        </div>
    </div>
  )
}

export default SettingsPage