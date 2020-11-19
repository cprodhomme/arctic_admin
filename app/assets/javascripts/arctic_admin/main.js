document.addEventListener('DOMContentLoaded', () => {

  // right filter sidebar
  const sidebar = document.querySelector('#sidebar')
  if (sidebar) {
    sidebar.addEventListener('click', event => {
      const insideSection = document.querySelector('#filters_sidebar_section')
      if (!(event.target === insideSection || insideSection.contains(event.target))) {
        sidebar.classList.toggle('sidebar_open')
      }
    })
  }

  const menuButton = document.querySelector('#utility_nav')
  const menu = document.querySelector('#tabs')

  // toggle menu sidebar with the menu button
  menuButton.addEventListener('click', event => {
    const currentUser = document.querySelector('#current_user')
    const logout = document.querySelector('#logout')
    const forbiddenLinks = event.target === logout ||
        logout.contains(event.target) ||
        event.target === currentUser ||
        currentUser.contains(event.target)
    if (!forbiddenLinks) {
      menu.classList.toggle('tabs_open')
    }
  })

  // close left menu sidebar on any click outside
  document.body.addEventListener('click', event => {
    const forbiddenLinks = event.target === menu ||
        menu.contains(event.target) ||
        event.target === menuButton ||
        menuButton.contains(event.target)
    if (menu.classList.contains('tabs_open') && !forbiddenLinks) {
      menu.classList.remove('tabs_open')
    }
  })

  // toggle of nested menu items
  const nestedMenuItems = document.querySelectorAll('#tabs .has_nested')
  nestedMenuItems.forEach(
    (nestedMenuItem) => {
      nestedMenuItem.addEventListener('click', (e) => {
        e.stopPropagation()
        nestedMenuItem.classList.toggle('open')
      })
    }
  )

})
