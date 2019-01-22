import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';


export default {
  input: './src/index.tsx',
  output: {
    file: './index.js',
    format: 'cjs',
    name: 'matterBundle',
  },
  plugins: [
    typescript(),
    postcss({
      plugins: []
    }),
  ]
}
