const form = document.querySelector('form')
const inputBtn = document.querySelector('input[type=button]')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const emailAddress = document.getElementById('email-address')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('submit clicked')
  checkInputs()
})

function checkInputs() {
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailAddressValue = emailAddress.value.trim()
  const passwordValue = password.value.trim()

  if(firstNameValue == '') {
    document.querySelector('.fn__error').classList.add('show')
    document.querySelector('.fn__normal').classList.add('hide')
    document.querySelector('.fn__error--input').classList.add('show')
  }

  if(lastNameValue == '') {
    document.querySelector('.ln__error').classList.add('show')
    document.querySelector('.ln__normal').classList.add('hide')
    document.querySelector('.ln__error--input').classList.add('show')
  }
  
  function emailCheck(email) {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      document.querySelector('.em__error').classList.add('show')
      document.querySelector('.em__normal').classList.add('hide')
      const errormsg = emailAddressValue
      
      document.querySelector('.em__error--input').value = errormsg
      document.querySelector('.em__error--input').classList.add('show')
    }
  }
  emailCheck(emailAddressValue)
  
  if(passwordValue == '') {
    document.querySelector('.pw__error').classList.add('show')
    document.querySelector('.pw__normal').classList.add('hide')
    document.querySelector('.pw__error--input').classList.add('show')
  }

  firstName.value = ''
  lastName.value = ''
  emailAddress.value = ''
  password.value = ''

}