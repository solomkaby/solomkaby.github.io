import { $body } from '../indent.js'

const $products = document.querySelector('#products')

export const $slider = $products.querySelector('#slider')
export const $sliderNav = $products.querySelector('#sliderNav')
export const $btnNext = $sliderNav.querySelector(`#btnNext`)
export const $btnPrev = $sliderNav.querySelector('#btnPrev')

const $poginationThumb = $products.querySelector('#poginationThumb')
const $currentSlide = $products.querySelector('#currentSlide')
const $totalSlides = $products.querySelector('#totalSlides')

const slides = $slider.children

const MIN_SLIDES = 0
const MAX_SLIDES = slides.length

let touchStart
let touchEnd
let curretSlide = 0

export const setPoginationSize = () => {
	$poginationThumb.style.width = `${100 / MAX_SLIDES}%`
	$totalSlides.textContent = String(MAX_SLIDES).padStart(2, 0)
}

export const setPositionTouchStart = e => (touchStart = e.touches[0].clientX)
export const setPositionTouchEnd = e => (touchEnd = e.touches[0].clientX)
export const addHandlerSliderTouch = () => moveSlide(touchStart > touchEnd ? $btnNext : $btnPrev)
export const addHandlerSliderClicks = e => (e.target.classList.contains('products__arrow') ? moveSlide(e.target) : null)

export const moveSlide = arrow => {
	if (arrow.classList.contains('_disable')) return

	const BODY_WIDTH = $body.clientWidth
	const SLIDE_WIDTH = slides[0]?.clientWidth
	const SWIPE_WIDTH = BODY_WIDTH <= 1180 ? SLIDE_WIDTH : SLIDE_WIDTH * 2

	arrow.classList.contains('_arrow-next') ? curretSlide++ : curretSlide--

	$currentSlide.textContent = String(curretSlide + 1).padStart(2, 0)
	$poginationThumb.style.transform = `translateX(${$poginationThumb.clientWidth * curretSlide}px)`
	$slider.style.transform = `translateX(-${SWIPE_WIDTH * curretSlide}px)`

	checkSliderBoundaries()
}

export const checkSliderBoundaries = () => {
	if (curretSlide === MIN_SLIDES) {
		$btnPrev.classList.add('_disable')
		return 'min'
	} else if (curretSlide === MAX_SLIDES - 1) {
		$btnNext.classList.add('_disable')
		return 'max'
	} else {
		$btnPrev.classList.remove('_disable')
		$btnNext.classList.remove('_disable')
	}
}
