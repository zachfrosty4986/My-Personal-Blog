// ADD COMMENTS
const form = document.getElementById("form-boxes")
const userInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contextInput = document.getElementById("content");
const modeToggle = document.getElementById('mode-toggle');
const body = document.body
const submitPost = document.getElementById("submit");

console.log(form)

form.addEventListener('submit', function(event) {
    console.log("Submitted sucsessfully!")
    event.preventDefault();

    const posts = [];

    const blog = {
        username: userInput.value.trim(),
        title: titleInput.value.trim(),
        context: contextInput.value.trim(),
    }

    if (userInput.value === "") {
        confirm("Please enter a Username")
        return
    }

    if (titleInput.value === "") {
        confirm("Please enter a Title")
        return
    }

    if (contextInput.value === "") {
        confirm("Please add your Context")
        return
    }

    posts.push(blog)
    let localBlog = JSON.stringify(posts)
    localStorage.setItem('storedBlog', localBlog)
    console.log(blog)
    console.log(localBlog)
    document.location.replace('./blog.html')
});

    modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save user preference to localStorage
    localStorage.setItem('mode', body.classList.contains('dark-mode') ? 'dark' : 'light');
});
        
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
    body.classList.add('dark-mode')
}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
 
