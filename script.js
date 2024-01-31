{
    const welcome = () => {
        console.log("Witam wszystkich którzy tu zaglądają! 👋 ");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorName = document.querySelector(".nextColorName");
        body.classList.toggle("greyBackground");
        nextColorName.innerText =
            body.classList.contains("greyBackground") ? "białe" : "szare";
    }

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackground");

        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

}