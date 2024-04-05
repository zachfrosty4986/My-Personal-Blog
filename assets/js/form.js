// Defining elements
const form = document.getElementById("form-boxes")
const userInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const submitPost = document.getElementById("submit");

console.log(form)
//submit functionality
form.addEventListener('submit', function(event) {
    console.log("Submitted sucsessfully!")
    event.preventDefault();
// adding content to local storage
    const posts = JSON.parse(localStorage.getItem('storedBlog')) || [];
// form box configuration
    const blog = {
        username: userInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    }
// if form is not complete, message appears for what needs to be completed
    if (userInput.value === "") {
        confirm("Please enter a Username")
        return
    }

    if (titleInput.value === "") {
        confirm("Please enter a Title")
        return
    }

    if (contentInput.value === "") {
        confirm("Please add your Context")
        return
    }

// pushes box content to local storage 
    posts.push(blog)
    let localBlog = JSON.stringify(posts)
    localStorage.setItem('storedBlog', localBlog)
    console.log(blog)
    console.log(localBlog)
    document.location.replace('./blog.html')
});
// darkLight button
    modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save user preference to localStorage
    localStorage.setItem('mode', body.classList.contains('dark-mode') ? 'dark' : 'light');
});
        
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
    body.classList.add('dark-mode')
}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
 
