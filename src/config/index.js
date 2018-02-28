import colors, { setColors } from './colors';
import fonts, { setFonts } from './fonts'

function setTheme (theme) {
  if (theme) {
    theme.colors && setColors(theme.colors)
    theme.fonts && setFonts(theme.fonts)
  }
}

function getTheme () {
  return {
    colors,
    fonts
  }
}

export {
  colors,
  fonts,
  setTheme,
  getTheme
}

