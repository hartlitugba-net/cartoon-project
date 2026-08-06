const buttons = document.querySelectorAll(".read-more"); // read-more ismindeki elementleri çağır

buttons.forEach(button => {

    button.addEventListener("click", () => { //dinle

        const content = button.previousElementSibling;


        if(content.style.display === "block"){

            content.style.display = "none";
            button.textContent = "Devamını Oku";

        } else {

            content.style.display = "block";
            button.textContent = "Gizle";

        }

    });

});
