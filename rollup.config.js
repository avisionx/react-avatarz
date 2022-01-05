import babel from '@rollup/plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';

const input = 'src/index.js';

var MODE = [
  {
    fomart: 'cjs',
  },
  {
    fomart: 'esm',
  },
  {
    fomart: 'umd',
  },
];

var config = [];

MODE.map((m) => {
  var conf = {
    input: input,
    output: {
      name: 'react-avatarz',
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: 'auto',
    },
    external: ['react', /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime',
      }),
      sourcemaps(),
    ],
  };
  config.push(conf);
});

export default [...config];
