document.querySelector('.button').onclick = () => {
  const form = document.querySelector('.form')

  if (!email.checkValidity()) {
    if (email.value.length > 20) {
      email.setCustomValidity(
        'Значення має бути меньше 10 символів',
      )
    } else {
      email.setCustomValidity('Введіть пошту')
    }

    email.reportValidity()
  } else form.submit()
}

document.querySelectorAll('.change-age').forEach((el) => {
  el.onclick = () => {
    if (el.getAttribute('operator') === '+') {
      age.stepUp(Number(el.getAttribute('value')))
    } else if (el.getAttribute('operator') === '-') {
      age.stepDown(Number(el.getAttribute('value')))
    }
  }
})

document.querySelector('.copy-button').onclick = () => {
  const value = username.value

  if (!value) {
    alert('пусто')
  } else {
    navigator.clipboard.writeText(value)
    alert('скопійовано')
  }
}
