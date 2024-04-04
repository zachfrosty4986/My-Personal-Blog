//ADD COMMENTS
// const backButton = $('#back-btn');
const modeToggle = document.getElementById('darkLight');

const posts = JSON.parse(localStorage.getItem('storedBlog'));
console.log(posts);

function addBlog(postBlog) {
    let blogObject = JSON.parse(postBlog)
    console.log(blogObject);

    const container = document.querySelector('.container')
    const contentDiv = document.createElement('div')
    const newUser = document.createElement('h2')
    const newtitle = document.createElement('h3')
    const newBlog = document.createElement('p')


    contentDiv.classlist.add('card')
    newUser.classlist.add('username')
    newtitle.classlist.add('title')
    newBlog.classlist.add('content')

    
    newUser.textContent = ('${blogObject.username}')
    newtitle = ('${blogObject.title}')
    newBlog = ('${blogObject.content}')


    container.appendChild(contentDiv)
    contentDiv.appendChild(newUser)
    contentDiv.appendChild(newTitle)
    contentDiv.appendChild(newBlog)

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
