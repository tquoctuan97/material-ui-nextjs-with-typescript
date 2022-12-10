import { Roboto } from '@next/font/google'

import type { ThemeOptions } from '@mui/material/styles'

import breakpoints from './breakpoints'
import { ResponsiveFontSize } from './models'

const REM_BASE = 16

export function remToPx(value: number) {
  return Math.round(parseFloat(value.toString()) * REM_BASE)
}

export function pxToRem(value: number) {
  return `${value / REM_BASE}rem`
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: ResponsiveFontSize) {
  return {
    [breakpoints.up('sm')]: {
      fontSize: pxToRem(sm),
    },
    [breakpoints.up('md')]: {
      fontSize: pxToRem(md),
    },
    [breakpoints.up('lg')]: {
      fontSize: pxToRem(lg),
    },
  }
}

// ----------------------------------------------------------------------

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const FONT_PRIMARY = roboto.style.fontFamily // Google Font

const typography: ThemeOptions['typography'] = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 1.25,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.33,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 1.5,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 1.7,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
}

export default typography
