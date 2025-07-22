const navbarContainer = document.getElementById("navbarContainer");
if (navbarContainer) {
    fetch("navbar.html")
        .then((res) => res.text())
        .then((data) => {
            navbarContainer.innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const adminForm = document.getElementById("adminForm");

    if (!adminForm) {
        console.error("Form not found!");
        return;
    }

    let blogs = [];

    fetch("blogs.json")
        .then((res) => res.json())
        .then((data) => {
            blogs = data;
        })
        .catch((err) => {
            console.error("Failed to load blogs:", err);
        });

    adminForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("titleInput");
        const desc = document.getElementById("descInput");
        const url = document.getElementById("urlInput");
        const author = document.getElementById("authorInput");
        const category = document.getElementById("categoryInput");
        const date = document.getElementById("dateInput");

        if (!titleEl || !desc || !url || !author || !category || !date) {
            alert("Some input fields are missing.");
            return;
        }

        const newBlog = {
            title: title.value,
            description: desc.value,
            url: url.value,
            author: author.value,
            category: category.value,
            date: date.value,
        };

        blogs.push(newBlog);
        adminForm.reset();
        alert("Blog added.");
    });
});
