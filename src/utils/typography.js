import Typography from 'typography'
import Theme from '../utils/typography-theme-ja179'

const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
