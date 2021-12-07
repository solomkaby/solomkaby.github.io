import { getHeaderHeigth } from '../indent.js'

export const moveToSection = selector => {
	const neededSection = document.querySelector(selector)
	const indentTop = neededSection.getBoundingClientRect().top + pageYOffset - parseInt(getHeaderHeigth())

	window.scrollTo({ top: indentTop, behavior: 'smooth' })
}
