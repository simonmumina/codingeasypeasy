import rss from './rss.mjs'

async function postbuild() {
  await rss()
}

setInterval(() => {
  postbuild();
}, 3600000)
