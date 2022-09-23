const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  './src/**/*.{js,ts,jsx,tsx}': [buildEslintCommand, `npm run format`],
  // 他に実行したいコマンドをここに書く
}
