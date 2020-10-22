function submitForm(event) {
  event.preventDefault();

  let verifyAllForms = true;

  // Validação de nome ========================================================
  var name = $('.name').val();

  if (name.length >= 3) {
    $('.name').removeClass('is-invalid')
  }
  else {
    verifyAllForms = false;
    $('#validationNameFeedback').text('Digite um nome válido')
    $('.name').addClass('is-invalid')
  }

  // Validação de telefone ========================================================
  var phone = $('.phone').val();
  var maskedPhone = phone 
  phone = phone.replace(/\D/g, '');

  if (phone.length >= 10) {
    $('.phone').removeClass('is-invalid')
  }
  else {
    verifyAllForms = false;
    $('#validationPhoneFeedback').text('Digite um telefone válido')
    $('.phone').addClass('is-invalid')
  }

  // Validação de email ========================================================
  var email = $('.email').val();
  var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  if (regex.test(email)) {
    $('.email').removeClass('is-invalid')
  }
  else {
    verifyAllForms = false;
    $('#validationEmailFeedback').text('O email digitado é inválido')
    $('.email').addClass('is-invalid')
  }

  // Validação de senha ========================================================
  var password = $('.password').val();
  var vfyPassword = $('.vfyPassword').val();
  $('.password').removeClass('is-invalid')
  $('.vfyPassword').removeClass('is-invalid')

  if (password.length >= 8) {

    if (password !== vfyPassword) {
      verifyAllForms = false;
      $('#validationPasswordFeedback').text('As senhas não conferem')
      $('.password').addClass('is-invalid')
      $('.vfyPassword').addClass('is-invalid')
    }

  } else {
    verifyAllForms = false;
    $('#validationPasswordFeedback').text('Por favor, digite mais de 8 caracteres')
    $('.password').addClass('is-invalid')
    $('.vfyPassword').addClass('is-invalid')
  }

  //Enviar formulário

  if (verifyAllForms) {

    alert(`
    Nome: ${name}\n
    Telefone: ${phone} \n
    Telefone com mascara: ${maskedPhone} \n
    Email: ${email}\n
    Senha: ${password}\n
    Verificação de senha: ${vfyPassword} \n
  `)

    $('#registerForm')[0].submit();

  }
}



//Define mascara para o campo telefone
var behavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
  options = {
    onKeyPress: function (val, e, field, options) {
      field.mask(behavior.apply({}, arguments), options);
    }
  };

$('.phone').mask(behavior, options);


