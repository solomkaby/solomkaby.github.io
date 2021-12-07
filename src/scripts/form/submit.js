import { $inputUserName, $inputUserPhone, $btnSendForm } from './validator.js'
import { getCorrectCallLink } from '../utils.js'
import { getFullDate } from '../utils.js'
import { handlerRequest } from '../request.js'
import { showModalSuccess } from '../UI/modal.js'

export const submitForm = e => {
	e.preventDefault()

	if ($btnSendForm.classList.contains('_disable')) return

	console.log('submit');

	const { value: name } = $inputUserName
	const { value: phone } = $inputUserPhone

	const userData = {
		callLink: getCorrectCallLink(phone),
		date: getFullDate(),
		name,
		phone,
	}

	// handlerRequest('/', 'POST', userData).then(data => {
	// 	const { name, status } = data

	// 	if (status === 200) {
			showModalSuccess(name)
			clearFomr()
	// 		console.log(data)
	// 	}
	// })
}

const clearFomr = () => {
	$inputUserName.value = ''
	$inputUserPhone.value = ''
	$btnSendForm.classList.add('_disable')
}
