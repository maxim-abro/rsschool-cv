const portfolio = document.querySelector('.portfolio')
const resume = document.querySelector('.resume')
const resumeBtn = document.querySelector('.resume-btn')
const portfolioBtn = document.querySelector('.portfolio-btn')
const burgerMenu = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const resumeBrg = document.querySelector('.resume-btn-brg')
const portfolioBrg = document.querySelector('.portfolio-btn-brg')


const eventListeners = () => {
    body.addEventListener('click', (e)=> {
        let target = e.target
        if (target == target.closest('.portfolio-btn')) {
            e.preventDefault()
            target.classList.add('active')
            resumeBrg.classList.remove('active')
            resume.style.display = 'none'
            portfolio.style.display = 'flex'
        } else if (target == target.closest('.resume-btn')) {
            e.preventDefault()
            target.classList.add('active')
            portfolioBrg.classList.remove('active')
            portfolio.style.display = 'none'
            resume.style.display = 'flex'
        } else if (target == target.closest('.burger-button')) {
            burgerMenu.style.display = 'flex'
        } else if (target == target.closest('.close-btn')
            || target == target.closest('.nav-item-brg')) {
            burgerMenu.style.display = 'none'
        } else if (target == target.closest('.portfolio-btn-brg')) {
            e.preventDefault()
            target.classList.add('active')
            resumeBtn.classList.remove('active')
            resume.style.display = 'none'
            portfolio.style.display = 'flex'
            burgerMenu.style.display = 'none'
        } else if (target == target.closest('.resume-btn-brg')) {
            e.preventDefault()
            target.classList.add('active')
            portfolioBtn.classList.remove('active')
            portfolio.style.display = 'none'
            resume.style.display = 'flex'
            burgerMenu.style.display = 'none'
        }
    })
}

eventListeners()