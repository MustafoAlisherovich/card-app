const cacheName = 'card-app-v1'

const filesToCache = [
	'/',
	'/index.html',
	'/style.css',
	'/script.js',
	'/manifest.json',
	'/images/cpg-logo.png',
	'/images/green.png',
	'/images/blue.png',
	'/images/person-fill-gear.svg',
	'/images/person-fill.svg',
	'/images/box-arrow-right.svg',
]

self.addEventListener('install', e => {
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll(filesToCache)
		})
	)
})

self.addEventListener('fetch', e => {
	e.respondWith(
		caches.match(e.request).then(response => {
			return response || fetch(e.request)
		})
	)
})
