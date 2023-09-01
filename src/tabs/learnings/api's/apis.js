fetch('https://api.giphy.com/v1/gifs/translate?api_key=EAbi77aOadSkd7VGMMRNhZUc973PGS2W&s=cats', {mode: 'cors'})
// once data has been fetched .json() turns it to string to be printed to console
.then(function(response) {
    return (response.json());
})
.then(function(response) {
    img.src = response.data.images.original.url;
})

const body = document.querySelector('.apiBody')

const img = document.querySelector('img')
img.style.width = '500px'

const newGifBtn = document.querySelector('.newGifBtn')
const searchInput = document.querySelector('.searchInput')

newGifBtn.addEventListener('click', () => {

    let newSearch = searchInput.value
    console.log(newSearch)

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=EAbi77aOadSkd7VGMMRNhZUc973PGS2W&s=${newSearch}`, {mode: 'cors'})
    // once data has been fetched .json() turns it to string to be printed to console
    .then(function(response) {
        return (response.json());
    })
    .then(function(response) { 
        img.src = response.data.images.original.url;
    })
    // if error occurs .catch() will produce default gif
    .catch(function() {
        console.log('err')
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=EAbi77aOadSkd7VGMMRNhZUc973PGS2W&s=error`, {mode: 'cors'})
        .then(function(response) {
            return (response.json());
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    })

    searchInput.value = ''

})
