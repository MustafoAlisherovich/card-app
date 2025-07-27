const carousel = document.querySelector('.carousel')
const menuToggle = document.getElementById('menuToggle')
const sidebar = document.getElementById('sidebar')
const closeSidebar = document.getElementById('closeSidebar')

carousel.addEventListener('scroll', () => {
	return Math.round(carousel.scrollLeft / window.innerWidth)
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
