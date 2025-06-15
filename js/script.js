const siteThemeToggler = document.querySelector(".site-header-theme-toggler")

siteThemeToggler.addEventListener("click",() => {
    document.body.classList.toggle("dark-mode")
})