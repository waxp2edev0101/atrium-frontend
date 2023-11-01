import type { PaletteMode } from '@mui/material'
import type { PaletteColor, Theme } from '@mui/material/styles'
import type { Components } from '@mui/material/styles/components'
import type { Mixins } from '@mui/material/styles/createMixins'
import type {
  CommonColors,
  Palette as DefaultPalette,
  PaletteTonalOffset,
  TypeText,
  TypeDivider,
  TypeAction,
  TypeBackground,
  PaletteAugmentColorOptions,
} from '@mui/material/styles/createPalette'
import type { Transitions } from '@mui/material/styles/createTransitions'
import type { Typography } from '@mui/material/styles/createTypography'
import type { Shadows } from '@mui/material/styles/shadows'
import type { ZIndex } from '@mui/material/styles/zIndex'
import type { ThemeOptions } from '@mui/system'
import type {
  BreakpointsOptions,
  Breakpoints,
} from '@mui/system/createTheme/createBreakpoints'
import type {
  SpacingOptions,
  Spacing,
} from '@mui/system/createTheme/createSpacing'
import type { Direction } from '@mui/system/createTheme/createTheme'
import type { ShapeOptions, Shape } from '@mui/system/createTheme/shape'

export function assertCast<T>(v: any): asserts v is T {}

// https://mui.com/customization/color/#color-palette
export interface Palette extends DefaultPalette {
  widget: { background: string }
  common: CommonColors
  mode: PaletteMode
  contrastThreshold: number
  tonalOffset: PaletteTonalOffset
  primary: PaletteColor
  secondary: PaletteColor
  error: PaletteColor
  warning: PaletteColor
  info: PaletteColor
  success: PaletteColor
  // grey: Color
  text: TypeText
  divider: TypeDivider
  action: TypeAction
  background: TypeBackground
  getContrastText: (background: string) => string
  augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor
  border: PaletteColor
  icon: { dark: string }
  colors: { [key: string]: string }
}

export interface AtriumTheme extends Theme {
  shape: Shape
  breakpoints: Breakpoints
  direction: Direction
  mixins: Mixins
  spacing: Spacing
  components?: Components
  palette: Palette
  shadows: Shadows
  transitions: Transitions
  typography: Typography
  zIndex: ZIndex
  unstable_strictMode?: boolean
}

export interface AtriumThemeOptions extends ThemeOptions {
  shape?: ShapeOptions
  breakpoints?: BreakpointsOptions
  direction?: Direction
  mixins?: unknown
  palette?: Record<string, any>
  shadows?: unknown
  spacing?: SpacingOptions
  transitions?: unknown
  components?: Record<string, any>
  typography?: unknown
  zIndex?: Record<string, number>
}

export type CreateAtrimTheme = (
  options: AtriumThemeOptions,
  ...args: object[]
) => AtriumTheme
