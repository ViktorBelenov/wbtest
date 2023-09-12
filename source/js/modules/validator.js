const form = document.querySelector('.recipient__form');

const submitButton = document.querySelector('.total__buy');


const nameInput = form.querySelector('.recipient__name');
const nameContainer = form.querySelector('.recipient__name-container');

const surnameInput = form.querySelector('.recipient__surname');
const surnameContainer = form.querySelector('.recipient__surname-container');

const emailInput = form.querySelector('.recipient__email');
const emailContainer = form.querySelector('.recipient__email-container');

const phoneInput = form.querySelector('.recipient__number');
const phoneContainer = form.querySelector('.recipient__number-container');

const innInput = form.querySelector('.recipient__id');
const innContainer = form.querySelector('.recipient__id-container');

const innDescription = form.querySelector('.recipient__id-description');

const raisesPlaceholder = (container) => {
  container.querySelector('.recipient__input-placeholder').style.top = '-20px';
};

const letDownPlaceholder = (container) => {
  container.querySelector('.recipient__input-placeholder').style.top = '0px';
};

form.addEventListener('click', (event) => {
  if (event.target.closest('input')) {
    raisesPlaceholder(event.target.closest('.recipient__input-container'));
  }
});

const phonePritier = () => {
  let value = phoneInput.value.split();
  value.splice(1, 0, '');
  value.splice(5, 0, '');
  value.splice(9, 0, '');
  value.splice(12, 0, '');
  return value.join(' ');
};

const addErrorClass = (input) => {
  input.classList.add('recipient__error');
};

const removeErrorClass = (input) => {
  input.classList.remove('recipient__error');
};

const showErrorMessageValidaton = (container) => {
  raisesPlaceholder(container);
  container.querySelector('.recipient__error-message').classList.remove('visually-hidden');
};
const hideErrorMessageValidation = (container) => {
  container.querySelector('.recipient__error-message').classList.add('visually-hidden');
};

const checkName = () => {
  return (/^[а-яА-ЯёЁ]+$/u.test(nameInput.value) || /^[a-zA-Z]+$/.test(nameInput.value));
};

const checkSurname = () => {
  return (/^[а-яА-ЯёЁ]+$/u.test(surnameInput.value) || /^[a-zA-Z]+$/.test(surnameInput.value));
};

const checkEmail = () => {
  if (emailInput.value.length === 0) {
    emailContainer.querySelector('.recipient__error-message').textContent = 'Укажите электронную почту';
  } else {
    emailContainer.querySelector('.recipient__error-message').textContent = 'Проверьте адрес электронной почты';
  }
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInput.value);
};

const checkPhone = () => {
  if (phoneInput.value.length === 0) {
    phoneContainer.querySelector('.recipient__error-message').textContent = 'Укажите номер телефона';
  } else {
    phoneContainer.querySelector('.recipient__error-message').textContent = 'Формат: +9 999 999 99 99';
  }
  return /^\+\d{1,3}\d{1,3}\d{1,3}\d{1,2}\d{1,2}$/.test(phoneInput.value);
};

const checkInn = () => {
  if (innInput.value.length === 0) {
    innContainer.querySelector('.recipient__error-message').textContent = 'Укажите ИНН';
  } else {
    innContainer.querySelector('.recipient__error-message').textContent = 'Проверьте ИНН';
  }
  return /^\d{14}$/.test(innInput.value);
};


const customValidation = () => {
  let name = false;
  let surname = false;
  let email = false;
  let phone = false;
  let inn = false;

  if (!checkName()) {
    showErrorMessageValidaton(nameContainer);
    addErrorClass(nameInput);
    nameInput.addEventListener('change', () => {
      if (checkName()) {
        hideErrorMessageValidation(nameContainer);
        removeErrorClass(nameInput);
      }
    });
  } else {
    name = true;
  }

  if (!checkSurname()) {
    showErrorMessageValidaton(surnameContainer);
    addErrorClass(surnameInput);
    surnameInput.addEventListener('change', () => {
      if (checkSurname()) {
        hideErrorMessageValidation(surnameContainer);
        removeErrorClass(surnameInput);
      }
    });
  } else {
    surname = true;
  }

  if (!checkEmail()) {
    showErrorMessageValidaton(emailContainer);
    addErrorClass(emailInput);
    emailInput.addEventListener('change', () => {
      if (checkEmail()) {
        hideErrorMessageValidation(emailContainer);
        removeErrorClass(emailInput);
      }
    });
  } else {
    email = true;
  }

  if (!checkPhone()) {
    showErrorMessageValidaton(phoneContainer);
    addErrorClass(phoneInput);
    phoneInput.addEventListener('change', () => {
      if (checkPhone()) {
        hideErrorMessageValidation(phoneContainer);
      }
      phoneInput.value = phonePritier();
      removeErrorClass(phoneInput);
    });
  } else {
    phone = true;
  }

  if (!checkInn()) {
    showErrorMessageValidaton(innContainer);
    addErrorClass(innInput);
    innInput.addEventListener('change', () => {
      if (checkInn()) {
        hideErrorMessageValidation(innInput);
      }
    });
  } else {
    inn = true;
  }


  return name && surname && email && phone && inn;
};

submitButton.addEventListener('click', (event) => {
  innDescription.classList.add('visually-hidden');
  if (customValidation()) {
    console.log('Форма валидна. Данные будут отправлены.');
  } else {
    console.log('Форма не валидна. Пожалуйста, исправьте ошибки.');
  }
  event.preventDefault();
});
