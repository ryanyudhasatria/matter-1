import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import image from 'rollup-plugin-image';


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
    image(),
  ]
}
