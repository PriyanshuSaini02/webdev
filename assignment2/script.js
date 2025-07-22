document.addEventListener("DOMContentLoaded", () => {
    let blogs = [];

    const blogList = document.getElementById("blogList");
    const searchInput = document.getElementById("searchInput");
    const authorFilter = document.getElementById("authorFilter");
    const categoryFilter = document.getElementById("categoryFilter");
    const dateSort = document.getElementById("dateSort");
    const navbarContainer = document.getElementById("navbarContainer");

    if (navbarContainer) {
        fetch("navbar.html")
            .then(res => res.text())
            .then(data => {
                navbarContainer.innerHTML = data;
            });
    }

    fetch("blogs.json")
        .then(res => res.json())
        .then(data => {
            blogs = data;
            populateFilters();
            renderBlogs();
        })
        .catch(err => {
            console.error("Failed to load blogs:", err);
        });

    function populateFilters() {
        const authors = [...new Set(blogs.map(b => b.author))];
        const categories = [...new Set(blogs.map(b => b.category))];

        if (authorFilter) {
            authorFilter.innerHTML = `<option value="">All Authors</option>`;
            authors.forEach(a => {
                const option = document.createElement("option");
                option.value = a;
                option.textContent = a;
                authorFilter.appendChild(option);
            });
        }

        if (categoryFilter) {
            categoryFilter.innerHTML = `<option value="">All Categories</option>`;
            categories.forEach(c => {
                const option = document.createElement("option");
                option.value = c;
                option.textContent = c;
                categoryFilter.appendChild(option);
            });
        }
    }

    function renderBlogs() {
        if (!blogList) return;
        let filtered = [...blogs];

        const keyword = searchInput?.value?.toLowerCase() || "";
        if (keyword) {
            filtered = filtered.filter(blog =>
                blog.title.toLowerCase().includes(keyword) ||
                blog.description.toLowerCase().includes(keyword)
            );
        }

        if (authorFilter?.value) {
            filtered = filtered.filter(blog => blog.author === authorFilter.value);
        }

        if (categoryFilter?.value) {
            filtered = filtered.filter(blog => blog.category === categoryFilter.value);
        }

        filtered.sort((a, b) => {
            return dateSort?.value === "new"
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date);
        });

        blogList.innerHTML = "";
        for (let blog of filtered) {
            const div = document.createElement("div");
            div.className = "blog-card";
            div.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <a href="${blog.url}" target="_blank">Read More</a><br />
                <small>Author: ${blog.author} | Category: ${blog.category} | Date: ${blog.date}</small>
            `;
            blogList.appendChild(div);
        }
    }

    function debounce(func, delay) {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, arguments), delay);
        };
    }

    searchInput?.addEventListener("input", debounce(renderBlogs, 300));
    authorFilter?.addEventListener("change", renderBlogs);
    categoryFilter?.addEventListener("change", renderBlogs);
    dateSort?.addEventListener("change", renderBlogs);
});
