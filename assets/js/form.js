// ADD COMMENTS
const userInput = document.getElementById("#username");
const titleInput = document.getElementById("#title");
const contextInput = document.getElementById("#content");
const browserView = document.getElementById('#dark-light-mode');
const submitPost = document.getElementById("#submit");

submitPost.addEventListener('click', function(event) {
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
});

let darkLightMode = localStorage.getItem("dark-light-mode")
const enableDarkMode = () => {

}

if (dark-light-mode === 'enabled') {
    
}