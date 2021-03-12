const { defineConfig } = require('vite-plugin-windicss')
// const colors = require('windicss/colors')
// const forms = require('windicss/plugin/forms')
// const typography = require('windicss/plugin/typography')

// const theme = {
//   state: {
//     actual: colors.blue,
//     alarm: colors.red,
//     error: colors.red,
//     heating: colors.amber,
//     ok: colors.green,
//     warning: colors.amber,
//     inactive: colors.warmGray,
//   },
//   bg: {
//     std: '#4c4c4c',
//     panel: '#353535',
//     'panel-error': '#7f1d1d',
//     field: '#2a2a2a',
//     readonly: '',
//     input: '',
//   },
//   fg: {
//     std: colors.coolGray[50],
//   },
// }

module.exports = defineConfig({
  darkMode: 'class',
  shortcuts: {
    btn:
      'rounded border border-gray-300 text-gray-600 px-4 py-2 m-2 inline-block hover:shadow',
  },
  theme: {
    // extend: {
    //   colors: {
    //     fg: theme.fg.std,
    //     bg: theme.bg.std,
    //     panel: theme.bg.panel,
    //     field: theme.bg.field,
    //     ok: theme.state.ok,
    //     actual: theme.state.actual,
    //     alarm: theme.state.alarm,
    //     inactive: theme.state.inactive,
    //     heating: theme.state.heating,
    //     warning: theme.state.warning,
    //     warmGray: colors.warmGray,
    //     'enso-blue': '#8CA0B8',
    //   },
    // },
  },
  // plugins: [typography, forms],
})
