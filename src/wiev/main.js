document.querySelector('.sidebar-curtain').addEventListener('click', (event) => {
    
    document.querySelector(".sidebar").classList.remove('open-sidebar')
    document.querySelector(".sidebar").classList.add('close-sidebar')
})