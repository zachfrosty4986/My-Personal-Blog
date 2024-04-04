//ADD COMMENTS
// const backButton = $('#back-btn');
const modeToggle = document.getElementById('darkLight');

const posts = JSON.parse(localStorage.getItem('storedBlog'));
console.log(posts);

function name(params) {
    
}










modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save user preference to localStorage
    localStorage.setItem('mode', body.classList.contains('dark-mode') ? 'dark' : 'light');
});
        
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
    body.classList.add('dark-mode')
}