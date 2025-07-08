// Select elements we'll need to manipulate
// Select the first element matching the CSS selector .hamburger
const hamburger = document.querySelector('.hamburger')
// Select the second element matching CSS selector .nav-menu
const navMenu = document.querySelector('.nav-menu')
// Select all elements matching selector, returning NodeList
const navLinks = document.querySelectorAll('.nav-links a')

// Hamburger Menu toggle
// Add a 'click event handler to hamburger icon'
hamburger.addEventListener('click', () => {
  // Toggle active class on hamburger and nav menu
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')

  // Add accessibility attributes (This helps screen readers)
  const isExpanded = hamburger.classList.contains('active')
    hamburger.setAttribute('aria-expanded', isExpanded) // Expand the drop-down menu
})

// Close Menu on link click (mobile view)
// Iterate through all nav-links to add same event listener to each
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Only take action if hamburger menu is visible (mobile view)
    if (window.innerWidth <= 768) { // Check for Mobile View
      hamburger.classList.remove('active') // If so, removes the 'active' class from both hamburger and nav
      navMenu.classList.remove('active')
      hamburger.setAttribute('aria-expanded', false) // Collapse drop-down menu
    }
  })
})

// Add accessibility support
function addAccessibility() {
  // Add ARIA attributes to hamburger menu
  hamburger.setAttribute('aria-label', 'Toggle navigation menu') // Provides text description of el purpose
  hamburger.setAttribute('aria-expanded', false) // Indicates whether element is expanded or collapsed
  hamburger.setAttribute('role', 'button') // Explicitly defines element as button for assistive tech
  hamburger.setAttribute('tabindex', '0') // Make the element with keyboard nav

// Allow keyboard activation of hamburger menu
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { //Listens for enter key or spacebar
    e.preventDefault()
    hamburger.click() // Programmatically clicks the hamburger menu
  }
})
}