const
    ratingBtn = document.querySelectorAll("li"),
    submit = document.querySelector("#btn"),
    firstView = document.querySelector(".first-window"),
    finalView = document.querySelector("final-view"),
    finalResult = document.querySelector(".result"),
    hiden = document.querySelector(".hidden");


   ratingBtn.forEach((element, index) => {
        element.addEventListener("click", () => {
        console.log(element);
        submit.addEventListener("click", () =>{
            firstView.style.display = 'none';
            finalResult.textContent = "  " + ++index;
            hiden.style.display='block';
        })
        
    });

    })
    
