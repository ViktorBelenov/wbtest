import {PROFILE} from './mock';

const addressTemplate = document.querySelector('#address').content.querySelector('.address');
const addressPlace = document.querySelector('.modal__delivery-address');
const addressInTotal = document.querySelector('.delivery__address');
const addressTypeInTotal = document.querySelector('.delivery__address-type');

const deliveryTypesFields = document.querySelector('.modal__delivery-setting-container');

const addressInBusketWhere = document.querySelector('.delivery-type__where');
const addressInBusketaddress = document.querySelector('.delivery-type__address');

const getAddressElement = (id, addresses) => {
  return addresses.find((element)=> {
    return element.addressid === id;
  });
};

const getAddressElementIndex = (id, addresses) => {
  return addresses.findIndex((element)=> {
    return element.addressid === id;
  });
};


const deleteAddresInData = (address) => {
  const id = address.querySelector('input').value;
  let data;
  if (PROFILE.isPickup) {
    data = PROFILE.addressPickup;
  } else {
    data = PROFILE.address;
  }
  data.splice(getAddressElementIndex(id, data), 1);
};

const clearAddress = () => {
  addressPlace.innerHTML = '';
};

const updateAddress = () => {
  const activeAddress = document.querySelector('.radio-modal__input:checked');
  let data;
  if (PROFILE.isPickup) {
    data = PROFILE.addressPickup;
    addressTypeInTotal.textContent = 'Доставка в пункт выдачи';
    addressInBusketWhere.textContent = 'Доставка в пункт выдачи';

  } else {
    data = PROFILE.address;
    addressTypeInTotal.textContent = 'Доставка курьером';
    addressInBusketWhere.textContent = 'Доставка курьером';
  }
  if (activeAddress) {
    addressInTotal.textContent = getAddressElement(activeAddress.value, data).address;
    addressInBusketaddress.textContent = getAddressElement(activeAddress.value, data).address;
  } else {
    addressInTotal.textContent = 'Выберите адрес';
    addressInBusketaddress.textContent = 'Выберите адрес';
  }
};

const getAddressRadioListener = (address) => {
  address.querySelector('.radio-modal__input').addEventListener('change', ()=> {
    updateAddress();
  });
};

const getAddress = (element) => {
  const newAddress = addressTemplate.cloneNode(true);
  newAddress.querySelector('.address__text').textContent = element.address;
  newAddress.querySelector('.radio-modal__input').value = element.addressid;
  return newAddress;
};

const getAddresDeletButton = (address) => {
  address.addEventListener('click', (event)=> {
    if (event.target.closest('.address__delete')) {
      deleteAddresInData(address);
      address.remove();
      updateAddress();
    }
  });
};

const renderAddresses = () => {
  const fragment = document.createDocumentFragment();
  let address;
  if (PROFILE.isPickup) {
    address = PROFILE.addressPickup;
  } else {
    address = PROFILE.address;
  }
  address.forEach((element) => {
    const newAddress = getAddress(element);
    getAddresDeletButton(newAddress);
    getAddressRadioListener(newAddress);
    fragment.append(newAddress);
  });
  addressPlace.append(fragment);
};


const updateTypeDelivery = () => {
  deliveryTypesFields.addEventListener('change', (event) => {

    if (event.target.closest('.delivery-radio')) {
      PROFILE.isPickup = Boolean(event.target.closest('.delivery-radio').querySelector('.delivery-radio__input').value);
      clearAddress();
      renderAddresses();
    }
  });
};


updateTypeDelivery();
renderAddresses();

