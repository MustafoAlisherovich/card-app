const carousel = document.querySelector('.carousel')
const menuToggle = document.getElementById('menuToggle')
const sidebar = document.getElementById('sidebar')
const closeSidebar = document.getElementById('closeSidebar')
const cards = carousel.querySelectorAll('.card')
const dotsContainer = document.getElementById('dots')

cards.forEach((_, i) => {
	const dot = document.createElement('div')
	dot.classList.add('dot')
	if (i === 0) dot.classList.add('active')
	dotsContainer.appendChild(dot)
})

const dots = dotsContainer.querySelectorAll('.dot')

// Scroll bo‘lganda qaysi card ekranda ekanligini aniqlash
carousel.addEventListener('scroll', () => {
	const scrollLeft = carousel.scrollLeft
	const cardWidth = carousel.offsetWidth

	const index = Math.round(scrollLeft / cardWidth)

	dots.forEach(dot => dot.classList.remove('active'))
	if (dots[index]) dots[index].classList.add('active')
})

// Sidebar toggle
menuToggle.addEventListener('click', () => {
	sidebar.classList.add('active')
})

closeSidebar.addEventListener('click', () => {
	sidebar.classList.remove('active')
})

const menuItems = document.querySelectorAll('.sidebar-content li')

menuItems.forEach(item => {
	item.addEventListener('click', () => {
		menuItems.forEach(i => i.classList.remove('active'))

		item.classList.add('active')
	})
})
