import fetchUser from './githubAPI'
;(async () => {
  const userData = await fetchUser('hjfrun')
  document.querySelector('h1').innerHTML = JSON.stringify(userData)
})()

// bun build ./src/index.ts --outfile=./dist/bundle.js --watch
