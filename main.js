let selectedAlbum = document.querySelector('ul');
let selectedImages = document.getElementById('images');
let imgUrl = 'https://jsonplaceholder.typicode.com/photos?albumId='
let albumUrl = 'https://jsonplaceholder.typicode.com/albums'

async function getAlbums() {
  let albums = await fetch(albumUrl);
  
   if (albums.ok) {
    return await albums.json();
   } else {
       console.error('Error')
   }
}

async function getImages(id) {
    let images = await fetch(`${imgUrl + id}`);
    
    if (images.ok) {
        return await images.json();
    } else {
        console.error('Error')
    }
  }

function showAlbums(albumsArr) {
  selectedAlbum.innerHTML = albumsArr.map(item => {
    return `<li id="${item.id}">${item.title}</li>`;
  }).join('');
}

function showImages(imageArr) {
  selectedImages.innerHTML = imageArr.map(img => {
    return `<img src="${img.thumbnailUrl}"></img>`;
  }).join('');
}

getAlbums().then((albumsArr) => showAlbums(albumsArr));

selectedAlbum.addEventListener('click', (event) =>  {
    event.preventDefault(); 
    getImages(event.target.id).then((imagesArr) => showImages(imagesArr));
})

