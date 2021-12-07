import { moveToSection } from './moveMentAnimation.js'
import { hideMenu } from '../burger.js'

export const navs = document.querySelectorAll('[data-list="nav"]')

export const addHandlerPageNav  = e => {
	if (e.target.tagName !== 'A') return

	const { target } = e
	const { href } = target.dataset

	moveToSection(href)
	hideMenu()

	e.preventDefault()
}
