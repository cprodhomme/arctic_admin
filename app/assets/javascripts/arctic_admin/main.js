// right filter sidebar toggle
function sidebar() {
  return document.querySelector('#sidebar')
}
function sidebarToggle(event) {
  const insideSection = document.querySelector('#filters_sidebar_section')
  if (!(event.target === insideSection || insideSection.contains(event.target))) {
    sidebar().classList.toggle('sidebar_open')
  }
}

// left menu sidebar toggle with menu button
function menuButton() {
  return document.querySelector('#utility_nav')
}
function menu() {
  return document.querySelector('#tabs')
}
function menuToggle(event) {
  const currentUser = document.querySelector('#current_user')
  const logout = document.querySelector('#logout')
  const forbiddenLinks = event.target === logout ||
    logout.contains(event.target) ||
    event.target === currentUser ||
    currentUser.contains(event.target)
  if (!forbiddenLinks) {
    menu().classList.toggle('tabs_open')
  }
}

// left menu sidebar close on any click outside
function menuClose(event) {
  const forbiddenLinks = event.target === menu ||
    menu().contains(event.target) ||
    event.target === menuButton() ||
    menuButton().contains(event.target)
  if (menu().classList.contains('tabs_open') && !forbiddenLinks) {
    menu().classList.remove('tabs_open')
  }
}

// nested menu items toggle
function nestedMenuItem() {
  return document.querySelector('#tabs .has_nested')
}
function nestedMenuToggle(event) {
  event.stopPropagation()
  nestedMenuItem.classList.toggle('open')
}

// add event listeners
function addListeners() {

  // right filter sidebar toggle
  if (sidebar()) {
    sidebar().addEventListener('click', sidebarToggle)
  }

  // left menu sidebar toggle with menu button
  if (menuButton()) {
    menuButton().addEventListener('click', menuToggle)
  }

  // left menu sidebar close on any click outside
  document.body.addEventListener('click', menuClose)

  // nested menu items toggle
  if (nestedMenuItem()) {
    nestedMenuItem().addEventListener('click', nestedMenuToggle)
  }

}

// remove all previous eventListeners
function removeListeners() {

  // right filter sidebar toggle
  if (sidebar()) {
    sidebar().removeEventListener('click', sidebarToggle)
  }

  // left menu sidebar toggle with menu button
  menuButton().removeEventListener('click', menuToggle)

  // left menu sidebar close on any click outside
  document.body.removeEventListener('click', menuClose)

  // nested menu items toggle
  if (nestedMenuItem()) {
    nestedMenuItem().removeEventListener('click', nestedMenuToggle)
  }

}

document.addEventListener('DOMContentLoaded', addListeners)

document.addEventListener( 'turbolinks:load', () => {
  removeListeners()
  addListeners()
})
