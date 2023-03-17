
addEventListener("load", () => {
    /* Scroll navbar */
    addEventListener("scroll", () => {
        const scroll = scrollY;
        const navbar = document.querySelector("#navbar");
        const mainIcon = document.querySelector("#mainIcon");
        const textColorChange = document.querySelectorAll(".text-custom-change");

        if (scroll > 50 && navbar) {
            /* All navbar */
            navbar.classList.add("bg-main")
            navbar.classList.add("ease-in")
            navbar.classList.add("duration-300")

            /* Change icon */
            mainIcon.src = "/src/assets/iconWhite.png"

            /* Text Change */
            textColorChange.forEach(text => {
                text.classList.remove("text-main")
                text.classList.add("text-white")
            })
        } else {
            /* All navbar */
            navbar.classList.remove("bg-main")

            /* Change icon */
            mainIcon.src = "/src/assets/icono.png"

            /* Text Change */
            textColorChange.forEach(text => {
                text.classList.remove("text-white")
                text.classList.add("text-main")
            })
        }
    })
})