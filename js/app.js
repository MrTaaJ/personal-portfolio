const hamburger = document.getElementById('mobile-nav');
const navUl = document.getElementById('mobile-nav-tog');
const cancelBut = document.getElementById('cancel-butt');
const cancelBut1 = document.getElementById('cancel1-butt');
const cancelBut2 = document.getElementById('cancel2-butt');
const cancelBut3 = document.getElementById('cancel3-butt');
const popBut = document.querySelectorAll('.pop-button-1');
const popUl = document.querySelector('#pop-proj-1-back');

hamburger.addEventListener('click', () => {
  navUl.classList.add('active');
});
cancelBut.addEventListener('click', () => {
  navUl.classList.remove('active');
});
cancelBut1.addEventListener('click', () => {
  navUl.classList.remove('active');
});
cancelBut2.addEventListener('click', () => {
  navUl.classList.remove('active');
});
cancelBut3.addEventListener('click', () => {
  navUl.classList.remove('active');
});

//Creating more pages
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
    mobileTitle: 'Multi-Post Stories 2',
    detailPa:
      "This is the second Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://yahoo.com',
    sourceRef: 'https://twitter.com',
    skill: '<ul><li>html</li><li>bootstrap</li><li>JavaScript</li></ul>',
    backStyle: 'url(/img/proj-2.png)',
  },
  {
    desktopTitle: 'Title3: Keeping track of hundreds of components website',
    mobileTitle: 'Multi-Post Stories 3',
    detailPa:
      "This is the third Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://facebook.com',
    sourceRef: 'https://github.com/waslead-coder',
    skill: '<ul><li>html</li><li>bootstrap</li><li>Ruby on rails</li><li>JavaScript</li></ul>',
    backStyle: 'url(/img/proj-2.png)',
  },
  {
    desktopTitle: 'Title4: Keeping track of hundreds of components website',
    mobileTitle: 'Multi-Post Stories 4',
    detailPa:
      "This is the fourth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://google.com',
    sourceRef: 'https://github.com/mrtaaj',
    skill: '<ul><li>html</li><li>bootstrap</li><li>Ruby on rails</li></ul>',
    backStyle: 'url(/img/Pop-Desktop-Portfolio.png)',
  },
  {
    desktopTitle: 'Title5: Keeping track of hundreds of components website',
    mobileTitle: 'Multi-Post Stories 5',
    detailPa:
      "This is the fifth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://yahoo.com',
    sourceRef: 'https://twitter.com',
    skill: '<ul><li>html</li><li>bootstrap</li><li>JavaScript</li></ul>',
    backStyle: 'url(/img/proj-2.png)',
  },
  {
    desktopTitle: 'Title6: Keeping track of hundreds of components website',
    mobileTitle: 'Multi-Post Stories 6',
    detailPa:
      "This is the sixth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://facebook.com',
    sourceRef: 'https://github.com/waslead-coder',
    skill: '<ul><li>html</li><li>bootstrap</li><li>Ruby on rails</li><li>JavaScript</li></ul>',
    backStyle: 'url(/img/proj-2.png)',
  },
  {
    desktopTitle: 'Title7: Keeping track of hundreds of components website',
    mobileTitle: 'Multi-Post Stories 7',
    detailPa:
      "This is the seventh Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    liveRef: 'https://facebook.com',
    sourceRef: 'https://github.com/waslead-coder',
    skill: '<ul><li>html</li><li>bootstrap</li><li>Ruby on rails</li><li>JavaScript</li></ul>',
    backStyle: 'url(/img/Pop-Desktop-Portfolio.png)',
  },
];
function setter(i) {
  document.querySelector('#mobileChangerCo').innerText = itemList[i].mobileTitle;
  document.querySelector('#desktopChangerCo').innerText = itemList[i].desktopTitle;
  document.querySelector('#changeCo').innerText = itemList[i].detailPa;
  document.querySelector('#liveChange').href = itemList[i].liveRef;
  document.querySelector('#sourceChange').href = itemList[i].sourceRef;
  document.querySelector('.pop-proj-skill').innerHTML = itemList[i].skill;
  document.querySelector('.pop-proj-1-2-back').style.backgroundImage = itemList[i].backStyle;
}
//Action
for (let i = 0; i < itemList.length; i++) {
  popBut[i].addEventListener('click', e => {
    setter(i);
    popUl.classList.add('pop-active');
  });
}

// popBut[1].addEventListener('click', () => {
//   popUl[0].classList.add('pop-active');
//   console.log(document.querySelector(".pop-proj-1-2-para").p);
//   console.log(itemList[0].title);
// });

//Cancel/Remove Action
document.querySelector('#pop-proj-1-back').addEventListener('click', () => {
  popUl[0].classList.remove('pop-active');
});
document.querySelector('#cancel-pop-butt').addEventListener('click', () => {
  popUl[0].classList.remove('pop-active');
});
document.querySelector('.pop-proj-1').addEventListener('click', e => {
  e.stopPropagation();
});
