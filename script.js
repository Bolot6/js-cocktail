const row = document.querySelector('.row')
const all =document.querySelector('#all')
const search =document.querySelector('#search')
const searchBox = document.querySelector('.search-wrapper')
const searchInput =document.querySelector('#searchInput')
const submit =document.querySelector('#submit')
const searchMain =document.querySelector('#searchMain')
const drinks = document.querySelector('#drinks')
const instructions = document.querySelector('#instructions')
const ingredient1 = document.querySelector('#ingredient1')
const ingredient2 = document.querySelector('#ingredient2')
const ingredient3 = document.querySelector('#ingredient3')
const ingredient4 = document.querySelector('#ingredient4')


all.addEventListener('click', () => {
    if (all.checked) {
        row.classList.remove('hidden')
        searchBox.classList.add('hidden')
    }
})

search.addEventListener('click', () => {
    if (search.checked){
        searchBox.classList.remove('hidden')
        row.classList.add('hidden')
    }
})

const handleGetDrinks = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v2/1/popular.php/`)
        .then(res => res.json())
        .then(json => {
            json.drinks.forEach(drinks => {
                row.innerHTML += `
            <div class = "col-4">
                <div class = "card">
                  <img src="${drinks.strDrinkThumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${drinks.strDrink}</h5>
                    <p class="card-text">${drinks.strAlcoholic}</p>
                    <p class="card-text">${drinks.strInstructions}</p>
                  </div>
                </div>
            </div>
            `
            })
        })

}

handleGetDrinks()

searchMain.addEventListener('click',()=> {
    let value = searchInput.value
    console.log(value)

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            drinks.innerHTML=json.drinks[0].strDrink
            instructions.innerHTML=json.drinks[0].strInstructions
            ingredient1.innerHTML=json.drinks[0].strIngredient1
            ingredient2.innerHTML=json.drinks[0].strIngredient2
            ingredient3.innerHTML=json.drinks[0].strIngredient3
            ingredient4.innerHTML=json.drinks[0].strIngredient4
        })
})