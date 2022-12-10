import { createTheme } from '@mui/material/styles'

import shadows from './shadows'
import palette from './palette'
import typography from './typography'
import ComponentsOverrides from './overrides'

let theme = createTheme({
  palette,
  shape: { borderRadius: 6 },
  typography,
  shadows: shadows(),
})

theme.components = ComponentsOverrides(theme)

export default theme
