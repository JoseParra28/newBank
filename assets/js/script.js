const filterBtns = document.querySelectorAll(".filter-btns button")
const filterCards = document.querySelectorAll(".filter-cards .card")


const filterableCards = e => {
    document.querySelector(".active").classList.remove(".active");
    e.target.classList.add(".active");
  
    filterCards.forEach(card => {
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
            card.classList.remove("hide")
        }
    })
    console.log(e.target)
}
filterBtns.forEach(button => button.addEventListener("click", filterableCards))


// -------------------------------------------------------------------------------------



const filterTextBtns = document.querySelectorAll(".fluid button")
const filterParra = document.querySelectorAll(".text .carta")

const filterFunc = e => {
    document.querySelector(".active").classList.remove(".active");
    e.target.classList.add(".active");
    console.log(e.target)

    filterParra.forEach(carta => {
        carta.classList.add("hide");
        if(carta.dataset.text === e.target.dataset.text || e.target.dataset.text === 'all'){
            carta.classList.remove("hide")
        }

    })
}

filterTextBtns.forEach(button => button.addEventListener("click", filterFunc))

// -------------------------------------------------------------------------------------

const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".button-sheet")

const showBottomSheet = () => {
    bottomSheet.classList.add("show");
    console.log("helo")
}
showModalBtn.addEventListener("click", showBottomSheet)

