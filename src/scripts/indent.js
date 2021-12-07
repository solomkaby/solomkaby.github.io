import { getSectionHeight } from './utils.js'

export const $body = document.body
export const $header = document.querySelector('#header')

export const getHeaderHeigth = () => getSectionHeight($header)

export const setMarginForHeader = () => ($body.style.marginTop = getHeaderHeigth())
