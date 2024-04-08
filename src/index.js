console.log('%c HI', 'color: firebrick')

function fetchDog(){
    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then (resp => resp.json())
    .then (json => fetchDogPhotos(json))
}

function fetchDogPhotos(images){
    const imgContainer = document.getElementById("dog-image-container");
    images.message.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        imgContainer.appendChild(img)
        console.log(image)
    });

}

document.addEventListener('DOMContentLoaded', function(){
    fetchDog();
})