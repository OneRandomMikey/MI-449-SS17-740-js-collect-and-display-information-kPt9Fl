var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var describeInput = document.getElementById('selfDescribe')
var emailInput = document.getElementById('inputEmail')
var phoneInput = document.getElementById('inputPhone')
var previewOutput = document.getElementById('preview')
var rawProfileOutput = document.getElementById('raw')

var generateInformation = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var describe = describeInput.value
  var email = emailInput.value
  var phone = phoneInput.value
  var element = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
    '<p>' + describe + '</p>' +
    '<p>' +
    'If you\'re interested in a date, you can email me at ' +
      '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
      ' or give me a call at ' +
      '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
    '</p>'

  previewOutput.innerHTML = element
  // '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
  // '<p>' + describe + '</p>' +
  // '<p>' +
  // 'If you\'re interested in a date, you can email me at ' +
  //   '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
  //   ' or give me a call at ' +
  //   '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
  // '</p>'

  rawProfileOutput.textContent = element
  // '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
  // '<p>' + describe + '</p>' +
  // '<p>' +
  // 'If you\'re interested in a date, you can email me at ' +
  //   '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
  //   ' or give me a call at ' +
  //   '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
  // '</p>'
}

firstNameInput.addEventListener('input', generateInformation)
lastNameInput.addEventListener('input', generateInformation)
describeInput.addEventListener('input', generateInformation)
emailInput.addEventListener('input', generateInformation)
phoneInput.addEventListener('input', generateInformation)
