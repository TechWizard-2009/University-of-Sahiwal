import './style.css'

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.15 })

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-scale, .stagger').forEach(el => observer.observe(el))
})
