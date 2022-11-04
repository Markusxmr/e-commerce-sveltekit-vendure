import watchAndRun from '@kitql/vite-plugin-watch-and-run'
import { sveltekit } from '@sveltejs/kit/vite'
import houdini from 'houdini/vite';
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
		houdini(),
    sveltekit(),
    watchAndRun([
      {
        name: 'Houdini',
        watch: path.resolve('src/**/*.(gql|svelte)'),
        run: 'npm run gen',
        delay: 100,
        watchKind: ['ready', 'add', 'change', 'unlink'],
      },
      {
        name: 'Houdini',
        watch: path.resolve('houdini.config.js'),
        run: 'npm run gen',
        delay: 100,
      },
    ]),
  ],
	resolve: {
		alias: {
			// these are the aliases and paths to them
			'~': path.resolve('./src'),
			$houdini: path.resolve('.', '$houdini')
		}
	},
  server: {
    fs: {
      allow: ['.'],
    },
  },
}

export default config
