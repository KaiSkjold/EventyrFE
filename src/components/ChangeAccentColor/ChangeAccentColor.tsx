import useAccentColor from "../../hooks/useAccentColor"

const ChangeAccentColor = () => {
    const { accent, setAccent } = useAccentColor();
    const accentOptions = useAccentColor().accentOptions;

  return (
    <select name="accent-color" id="accent-color-select" value={accent} onChange={(e) => setAccent(e.target.value)} >
        {accentOptions.map(option => (
        <option key={option.value} value={option.value} style={{ backgroundColor: option.value }}>{option.name}</option>
        ))}
    </select>
  )
}

export default ChangeAccentColor