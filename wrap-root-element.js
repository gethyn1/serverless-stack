const React = require('react')
const { ThemeProvider } = require('theme-ui')
const { swiss } = require('@theme-ui/presets')

const tokens = {
  ...swiss,
  sizes: { container: 1024 }
}

module.exports = ({ element }) => (
  <ThemeProvider theme={tokens}>{element}</ThemeProvider>
)
