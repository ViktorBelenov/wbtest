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

const showErrorMessageValidaton = (container) => {
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
  return /^\+\d{1,3} \d{1,3} \d{1,3} \d{1,2} \d{1,2}$/.test(phoneInput);
};


const customValidation = () => {
  let name = false;
  let surname = false;
  let email = false;
  let phone = false;

  if (!checkName()) {
    showErrorMessageValidaton(nameContainer);
    nameInput.addEventListener('change', () => {
      if (checkName()) {
        hideErrorMessageValidation(nameContainer);
      }
    });
  } else {
    name = true;
  }

  if (!checkSurname()) {
    showErrorMessageValidaton(surnameContainer);
    surnameInput.addEventListener('change', () => {
      if (checkSurname()) {
        hideErrorMessageValidation(surnameContainer);
      }
    });
  } else {
    surname = true;
  }

  if (!checkEmail()) {
    showErrorMessageValidaton(emailContainer);
    emailInput.addEventListener('change', () => {
      if (checkEmail()) {
        hideErrorMessageValidation(emailContainer);
      }
    });
  } else {
    email = true;
  }

  if (!checkPhone()) {
    showErrorMessageValidaton(phoneContainer);
    phoneInput.addEventListener('change', () => {
      if (checkEmail()) {
        hideErrorMessageValidation(phoneContainer);
      }
    });
  } else {
    phone = true;
  }


  return name && surname && email && phone;
};
// Добавляем обработчик события на кнопку
submitButton.addEventListener('click', (event) => {
  // Проверяем валидность формы
  if (customValidation()) {
    // Если форма валидна, можно выполнить действие, например, отправить данные на сервер
    console.log('Форма валидна. Данные будут отправлены.');
  } else {
    // Если форма не валидна, предпримите необходимые действия, например, отобразите сообщение об ошибке
    console.log('Форма не валидна. Пожалуйста, исправьте ошибки.');
  }

  // Предотвращаем отправку формы
  event.preventDefault();
});
