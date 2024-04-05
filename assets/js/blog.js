//ADD COMMENTS
// defining elements
const modeToggle = document.getElementById('darkLight');
const body = document.body;

const posts = JSON.parse(localStorage.getItem('storedBlog'));
console.log(posts);

function addBlog(postBlog) {
//creating elements
    const container = document.querySelector('.container')
    const contentDiv = document.createElement('div')
    const newUser = document.createElement('h2')
    const newTitle = document.createElement('h3')
    const newBlog = document.createElement('p')

// adding classes
    contentDiv.classList.add('card');
    newUser.classList.add('username');
    newTitle.classList.add('title');
    newBlog.classList.add('content');

    //creating the text to push
    newUser.textContent = postBlog.username;
    newTitle.textContent = postBlog.title;
    newBlog.textContent = postBlog.content;

 //adding it to blog
    container.appendChild(contentDiv)
    contentDiv.appendChild(newUser)
    contentDiv.appendChild(newTitle)
    contentDiv.appendChild(newBlog)

}
// for loop for adding to webpage
for (let index = 0; index < posts.length; index++) {
    addBlog(posts[index])
    
}
// darkLight button
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save user preference to localStorage
    localStorage.setItem('mode', body.classList.contains('darkLight') ? 'dark' : 'light');
});
        
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
    body.classList.add('dark-mode')
}


