//style
import './ThemeSelector.css'

//hook
import {useTheme} from '../../src/hooks/useTheme'
//(allows me to access changeColor)


//I'll create an array of colors, rather than hardcode into template

const themeColors = ["#58249c", "#249c6b", "#b70233"] //( because each 'color' is unique it
//can be used as a key for the output div)

export function ThemeSelector() {
// grab change color function {destructure!}
const { changeColor } = useTheme()
  return (


    <div className="theme-selector">
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
