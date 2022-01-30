const hamburger = document.querySelector('#mobile-nav');
const navUl = document.querySelector('#mobile-nav-tog');
const navDeactivators = document.querySelectorAll('.nav-deactivator');
const popDeactivators = document.querySelectorAll('.pop-deactivator');
const popBut = document.querySelectorAll('.pop-button-1');
const popUl = document.querySelector('#pop-proj-1-back');

// Creating more pages
const itemList = [
  {
    desktopTitle: 'Keeping track of hundreds of components website',
    mobileTitle: 'Multi-Post Stories',
    detailPa:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://google.com',
    sourceRef: 'https://github.com/mrtaaj',
    skill: '<ul><li>html</li><li>bootstrap</li><li>Ruby on rails</li></ul>',
    backStyle: 'url(/img/Pop-Desktop-Portfolio.png)',
  },
  {
    desktopTitle: 'Title2: Keeping track of hundreds of components website',
    mobileTitle: 'Mul-Post Stories 2',
    detailPa:
      "This is the second Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://yahoo.com',
    sourceRef: 'https://twitter.com',
    skill: '<ul><li>html</li><li>bootstrap</li><li>JavaScript</li></ul>',
    backStyle: 'url(/img/proj-2.png)',
  },
  {
    desktopTitle: 'Title3: Keeping track of hundreds of components website',
    mobileTitle: 'Mul-Post Stories 3',
    detailPa:
      "This is the third Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://facebook.com',
    sourceRef: 'https://github.com/waslead-coder',
    skill: '<ul><li>html</li><li>bootstrap</li><li>Ruby on rails</li><li>JavaScript</li></ul>',
    backStyle: 'url(/img/proj-2.png)',
  },
  {
    desktopTitle: 'Title4: Keeping track of hundreds of components website',
    mobileTitle: 'Mul-Post Stories 4',
    detailPa:
      "This is the fourth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://google.com',
    sourceRef: 'https://github.com/mrtaaj',
    skill: '<ul><li>html</li><li>bootstrap</li><li>Ruby on rails</li></ul>',
    backStyle: 'url(/img/Pop-Desktop-Portfolio.png)',
  },
  {
    desktopTitle: 'Title5: Keeping track of hundreds of components website',
    mobileTitle: 'Mul-Post Stories 5',
    detailPa:
      "This is the fifth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://yahoo.com',
    sourceRef: 'https://twitter.com',
    skill: '<ul><li>html</li><li>bootstrap</li><li>JavaScript</li></ul>',
    backStyle: 'url(/img/proj-2.png)',
  },
  {
    desktopTitle: 'Title6: Keeping track of hundreds of components website',
    mobileTitle: 'Mul-Post Stories 6',
    detailPa:
      "This is the sixth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://facebook.com',
    sourceRef: 'https://github.com/waslead-coder',
    skill: '<ul><li>html</li><li>bootstrap</li><li>Ruby on rails</li><li>JavaScript</li></ul>',
    backStyle: 'url(/img/proj-2.png)',
  },
  {
    desktopTitle: 'Title7: Keeping track of hundreds of components website',
    mobileTitle: 'Mul-Post Stories 7',
    detailPa:
      "This is the seventh Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://facebook.com',
    sourceRef: 'https://github.com/waslead-coder',
    skill: '<ul><li>html</li><li>bootstrap</li><li>Ruby on rails</li><li>JavaScript</li></ul>',
    backStyle: 'url(/img/Pop-Desktop-Portfolio.png)',
  },
];

// Action
function setter(i) {
  document.querySelector('#mobileChangerCo').innerText = itemList[i].mobileTitle;
  document.querySelector('#desktopChangerCo').innerText = itemList[i].desktopTitle;
  document.querySelector('#changeCo').innerText = itemList[i].detailPa;
  document.querySelector('#liveChange').href = itemList[i].liveRef;
  document.querySelector('#sourceChange').href = itemList[i].sourceRef;
  document.querySelector('.pop-proj-skill').innerHTML = itemList[i].skill;
  document.querySelector('.pop-proj-1-2-back').style.backgroundImage = itemList[i].backStyle;
}

const removeActiveClass = () => {
  navUl.classList.remove('active');
};

const removePopActive = () => {
  popUl.classList.remove('pop-active');
};

// Add Action
hamburger.addEventListener('click', () => {
  navUl.classList.add('active');
});

for (let i = 0; i < itemList.length; i += 1) {
  popBut[i].addEventListener('click', () => {
    setter(i);
    popUl.classList.add('pop-active');
  });
}

// Cancel/Remove Action
navDeactivators.forEach(navDeactivator => {
  navDeactivator.addEventListener('click', removeActiveClass);
});
popDeactivators.forEach(popDeactivator => {
  popDeactivator.addEventListener('click', removePopActive);
});
document.querySelector('.pop-proj-1').addEventListener('click', e => {
  e.stopPropagation();
});

// Form Validation Action
const textValid = document.querySelector('.textarea');
const emailValid = document.querySelector('.email-input');
const nameValid = document.querySelector('.name-input');
const formBut = document.querySelector('.form-button');
const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const storeLocal = {
  name: "",
  email: "",
  message: "",
}

// const storeLocalString = JSON.stringify(storeLocal)

const getLocal = () => {
  const returnItem = localStorage.getItem("storeLocal");
  if (returnItem) {
    const returnItemObject = JSON.parse(returnItem);
    nameValid.value = returnItemObject.name;
    emailValid.value = returnItemObject.email;
    textValid.value = returnItemObject.message;
    if (!emailTest.test(emailValid.value) || eventBut(nameValid) === true) {
      defaultButton(true);
    } else if (textValid.value.length < 15) {
      defaultButton(true);
    } else {
      defaultButton(false);
    }
  }
};

const setLocal = () => {
  storeLocal.name = nameValid.value;
  storeLocal.email = emailValid.value;
  storeLocal.message = textValid.value;
  localStorage.setItem("storeLocal", JSON.stringify(storeLocal));
};

const removeStore = () => {
  localStorage.removeItem("storeLocal");
}

const eventBut = data => {
  if (data.value === '') {
    return true;
  }
  return false;
};

const defaultButton = value => {
  formBut.disabled = value;
};
defaultButton(true);

const lowerCase = data => {
  data.value = data.value.toLowerCase();
};

const nameValidator = () => {
  if (nameValid.value === '') {
    defaultButton(true);
  } else if (eventBut(emailValid) === true || !emailTest.test(emailValid.value)) {
    defaultButton(true);
  } else if (eventBut(textValid) === true || textValid.value.length < 15) {
    defaultButton(true);
  } else {
    defaultButton(false);
  }
  setLocal();
};

const emailValidator = () => {
  lowerCase(emailValid);
  if (!emailTest.test(emailValid.value) || emailValid.value === '') {
    document.querySelector('.emailArea-note').classList.add('textarea-note-active');
    defaultButton(true);
  } else {
    document.querySelector('.emailArea-note').classList.remove('textarea-note-active');
    if (eventBut(textValid) === true || eventBut(nameValid) === true) {
      defaultButton(true);
    } else if (textValid.value.length < 15) {
      defaultButton(true);
    } else {
      defaultButton(false);
    }
  }
  setLocal();
};

const textValidator = () => {
  if (textValid.value.length < 15) {
    document.querySelector('.textarea-note').classList.add('textarea-note-active');
    defaultButton(true);
  } else {
    document.querySelector('.textarea-note').classList.remove('textarea-note-active');
    if (eventBut(nameValid) === true || !emailTest.test(emailValid.value)) {
      defaultButton(true);
    } else {
      defaultButton(false);
    }
  }
  setLocal();
};

window.addEventListener('load', getLocal);

formBut.addEventListener('click', removeStore);

nameValid.addEventListener('input', nameValidator);

emailValid.addEventListener('input', emailValidator);

textValid.addEventListener('input', textValidator);
