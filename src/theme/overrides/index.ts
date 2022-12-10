import { Theme } from '@mui/material'

import Button from './Button'
import Typography from './Typography'
import Paper from './Paper'
import Input from './Input'
import Backdrop from './Backdrop'

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Typography(theme),
    Paper(theme),
    Input(theme),
    Backdrop(theme)
  )
}
