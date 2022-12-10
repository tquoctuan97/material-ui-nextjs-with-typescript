import { ReactNode } from 'react'

import { CssBaseline, GlobalStyles } from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles'

import globalStyles from './globalStyles'
import theme from './theme'

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({
  children,
}: ThemeProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
