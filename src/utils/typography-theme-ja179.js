import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme = {
  title: 'ja179',
  baseFontSize: '16px',
  baseLineHeight: 1.50,
  scaleRatio: 1.6,
  googleFonts: [
    {
      name: 'Julius Sans One',
      styles: ['400'],
    },
    {
      name: 'Londrina Outline',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Julius Sans One', 'Avenir Next', 'Avenir', 'sans-serif'],
  bodyFontFamily: ['Hiragino Sans', 'ヒラギノ角ゴシック', '游ゴシック Medium', 'YuGothic', 'YuGothicM', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerWeight: 400,
  bodyWeight: 200,
  boldWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    blockquote: {  
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      backgroundColor: 'rgba(0,0,0,.1)',
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase',
    },
    h6: {
      fontStyle: 'italic',
    },
    a: {
      boxShadow: '0 1px 0 0 currentColor',
      color: '#007acc',
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: 'none',
    },
    'mark,ins': {
      background: '#007acc',
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
  }),
}

export default theme
