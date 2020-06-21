document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {(document.querySelector('h1')).textContent = 'Enter your'}, 500)
  setTimeout(() => {(document.querySelector('h1')).textContent = 'Enter your favourite'}, 1000)
  setTimeout(() => {(document.querySelector('h1')).textContent = 'Enter your favourite footballers!'}, 1500)
  setTimeout(() => {(document.querySelector('h1')).classList.add('red')}, 2000)

  console.dir((document.querySelector('h1'))) // gives all the properties of H1, I'm using text content property above

  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const footballerListItem = createFootballerListItem(event.target);
  const footballerList = document.querySelector('#footballers');
  footballerList.appendChild(footballerListItem);

  event.target.reset();
}

const prepareElement = function (tag, textContent, classes = []) {
  const element = document.createElement(tag)
  element.textContent = textContent
  element.classList.add(classes)
  return element
}

const createFootballerListItem = function (form) {
  const footballerListItem = document.createElement('li');

  const name = prepareElement('h2', form.name.value, 'footballer-list-item')
  footballerListItem.appendChild(name);

  const team = prepareElement('h3', form.team.value, 'footballer-list-item')
  footballerListItem.appendChild(team);

  const position = prepareElement('p', form.position.value, 'footballer-list-item')
  footballerListItem.appendChild(position);

  const status = prepareElement('p', form.status.value, 'footballer-list-item')
  footballerListItem.appendChild(status);

  return footballerListItem;
}

const handleDeleteAllClick = function (event) {
  const footballerList = document.querySelector('#footballers');
  footballerList.innerHTML = '';
}
