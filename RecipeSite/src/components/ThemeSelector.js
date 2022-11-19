//style
import './ThemeSelector.css'

//imports
import modeIcon from '../../src/assets/mode-icon.svg'

//hook
import {useTheme} from '../../src/hooks/useTheme'


const themeColors = ["#58249c", "#249c6b", "#b70233"] 

export function ThemeSelector() {


// toggle dark mode

const toggleMode = () => {
  changeMode(mode === 'dark' ? 'light' : 'dark') 
  console.log(mode) 
}

//logic for function: fired on click, if mode is dark return light, if mode is not dark, return dark



// destructure
const { changeColor, changeMode, mode } = useTheme()


  return (


    <div className="theme-selector">

    <div className="mode-toggle">

      <img
      onClick={toggleMode}
      src={modeIcon}/>
      
    </div>

    <div className="theme-buttons">
    {themeColors.map( color => (
        <div 
        key={color}
        onClick={() => changeColor(color)}
        style={{background: color }}

        />
    ))}
    </div>
    </div>
  )
}
