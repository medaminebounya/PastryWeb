document.addEventListener('DOMContentLoaded', function() {
    const expandMenuBtn = document.getElementById('expandMenuBtn');
    const menuSection = document.querySelector('.Menu');
    
    expandMenuBtn.addEventListener('click', function() {
        menuSection.classList.toggle('show-hidden');
        this.textContent = menuSection.classList.contains('show-hidden') 
            ? 'Show Less' 
            : 'Show More';
    });
});