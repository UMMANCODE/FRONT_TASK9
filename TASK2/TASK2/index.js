function addEventListeners() {
  const buttons = document.querySelectorAll('span');
  console.log(buttons)
  buttons.forEach(button => {
    button.addEventListener('click', switchTab);
  });
}

function switchTab(event) {
  let page;
  let button;
  const pages = document.querySelectorAll(".content").forEach(newPage => {newPage.style.display = 'none'})
  const buttons = document.querySelectorAll(".tab").forEach(newButton => {newButton.style.backgroundColor = 'white'})
  switch (event.target.className.split(' ')[1]) {
    case 'Home':
      page = document.getElementById('Home');
      page.style.display = 'block';
      button = document.getElementsByClassName('Home')[0];
      console.log(button)
      button.style.backgroundColor = 'red';
      break;
    case 'News':
      page = document.getElementById('News');
      page.style.display = 'block';
      button = document.getElementsByClassName('News')[0];
      button.style.backgroundColor = 'green';
      break;
    case 'Contact':
      page = document.getElementById('Contact');
      page.style.display = 'block';
      button = document.getElementsByClassName('Contact')[0];
      button.style.backgroundColor = 'blue';
      break;
    case 'About':
      page = document.getElementById('About');
      page.style.display = 'block';
      button = document.getElementsByClassName('About')[0];
      button.style.backgroundColor = 'orange';
      break;
  }
}

addEventListeners();
