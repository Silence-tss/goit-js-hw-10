// your-file.js

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

async function populateBreedsSelect() {
  try {
    const breeds = await fetchBreeds();
    const breedSelect = document.querySelector('select.breed-select');

    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });

    breedSelect.addEventListener('change', async () => {
      const selectedBreedId = breedSelect.value;

      // Очистити блок з інформацією про кота перед новим запитом
      clearCatInfo();

      try {
        const catInfo = await fetchCatByBreed(selectedBreedId);
        displayCatInfo(catInfo);
      } catch (error) {
        console.error('Error fetching cat info:', error.message);
      }
    });
  } catch (error) {
    console.error('Error populating breeds select:', error.message);
  }
}

function clearCatInfo() {
  const catInfoDiv = document.querySelector('div.cat-info');
  catInfoDiv.innerHTML = ''; // Очистити вміст блоку
}

function displayCatInfo(catInfo) {
  const catInfoDiv = document.querySelector('div.cat-info');
  
  const image = document.createElement('img');
  image.src = catInfo[0].url; // Припускається, що у відповіді є масив з одним об'єктом

  const breedName = document.createElement('p');
  breedName.textContent = `Breed: ${catInfo[0].breeds[0].name}`;

  const description = document.createElement('p');
  description.textContent = `Description: ${catInfo[0].breeds[0].description}`;

  const temperament = document.createElement('p');
  temperament.textContent = `Temperament: ${catInfo[0].breeds[0].temperament}`;

  catInfoDiv.appendChild(image);
  catInfoDiv.appendChild(breedName);
  catInfoDiv.appendChild(description);
  catInfoDiv.appendChild(temperament);
}

// Викликати функцію для заповнення вибору порід при завантаженні сторінки
document.addEventListener('DOMContentLoaded', populateBreedsSelect);




// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// async function populateBreedsSelect() {
//   try {
//     const breeds = await fetchBreeds();
//     const breedSelect = document.querySelector('select.breed-select');

//     breeds.forEach(breed => {
//       const option = document.createElement('option');
//       option.value = breed.id;
//       option.textContent = breed.name;
//       breedSelect.appendChild(option);
//     });

//     breedSelect.addEventListener('change', async () => {
//       const selectedBreedId = breedSelect.value;

//       // Очистити блок з інформацією про кота перед новим запитом
//       clearCatInfo();

//       try {
//         const catInfo = await fetchCatByBreed(selectedBreedId);
//         displayCatInfo(catInfo);
//       } catch (error) {
//         console.error('Error fetching cat info:', error.message);
//       }
//     });
//   } catch (error) {
//     console.error('Error populating breeds select:', error.message);
//   }
// }

// function clearCatInfo() {
//   const catInfoDiv = document.querySelector('div.cat-info');
//   catInfoDiv.innerHTML = ''; // Очистити вміст блоку
// }

// function displayCatInfo(catInfo) {
//   const catInfoDiv = document.querySelector('div.cat-info');
  
//   const image = document.createElement('img');
//   image.src = catInfo[0].url; // Припускається, що у відповіді є масив з одним об'єктом

//   const breedName = document.createElement('p');
//   breedName.textContent = `Breed: ${catInfo[0].breeds[0].name}`;

//   const description = document.createElement('p');
//   description.textContent = `Description: ${catInfo[0].breeds[0].description}`;

//   const temperament = document.createElement('p');
//   temperament.textContent = `Temperament: ${catInfo[0].breeds[0].temperament}`;

//   catInfoDiv.appendChild(image);
//   catInfoDiv.appendChild(breedName);
//   catInfoDiv.appendChild(description);
//   catInfoDiv.appendChild(temperament);
// }

// // Викликати функцію для заповнення вибору порід при завантаженні сторінки
// document.addEventListener('DOMContentLoaded', populateBreedsSelect);








// const selectCat = document.querySelector(".breed-select");
// const infoCat = document.querySelector(".cat-info");

// async function populateBreedsSelect() {
//   try {
//     const breeds = await fetchBreeds();
//     const breedSelect = document.querySelector(".breed-select");

//     breeds.forEach(breed => {
//       const option = document.createElement('option');
//       option.value = breed.id;
//       option.textContent = breed.name;
//       breedSelect.appendChild(option);
//     });
//   } catch (error) {
//     // Обробка помилок при виклику fetchBreeds()
//     console.error('Error populating breeds select:', error.message);
//   }
// }

// // Викликати функцію для заповнення вибору порід при завантаженні сторінки
// document.addEventListener('DOMContentLoaded', populateBreedsSelect);


// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "live_WlVxFm6pjr6g71AG4Z6iKEqVPy5ijV67NA9s17htumQVikwcatrTYPjcj4b4G1vX"
// let storedBreeds = []

//  fetch(url,{headers: {
//       'x-api-key': api_key
//     }})
//  .then((response) => {
//    return response.json();
//  })
// .then((data) => {
   
//    //filter to only include those with an `image` object
//    data = data.filter(img=> img.image?.url!=null)
   
//   storedBreeds = data;
   
//    for (let i = 0; i < storedBreeds.length; i++) {
//     const breed = storedBreeds[i];
//     let option = document.createElement('option');
     
//      //skip any breeds that don't have an image
//      if(!breed.image)continue
     
//     //use the current array index
//     option.value = i;
//     option.innerHTML = `${breed.name}`;
// document.getElementById('breed_selector').appendChild(option);
    
//     }
//    //show the first breed by default
//    showBreedImage(0)
// })
// .catch(function(error) {
//    console.log(error);
// });

// function showBreedImage(index)
// { 
//   document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
//   document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  
  
//   document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
//   document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
// }

// // new Vue({ 
// //     el: '#app',
// //     vuetify: new Vuetify(),
// //     data: {
// //         country_flag_url:"",
// //       images: [],
// //       breeds:[],
// //       selected_breed: {},
// //       current_image: {}
// //     },
// //     created(){
// //         this.getBreeds();
// //     } ,
// //     watch: {
       
// //         selected_breed: function()
// //         {
// //             console.log(this.selected_breed)

// //             let country_code = this.selected_breed.country_code.toLowerCase();

// //             this.country_flag_url = `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/1x1/${country_code}.svg`;
// //             this.getImages();
// //         }
// //     },
// //     methods:{

// //         async getBreeds()
// //         {
// //             try{
// //                 axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY" // Replace this with your API Key, as it's set to defaults it will be used from now onwards
                
// //                 let response = await axios.get('https://api.thecatapi.com/v1/breeds/' ) 
// //                 this.breeds = response.data;
// //                 console.log("-- ("+this.breeds.length +") Breeds from TheCatAPI.com")
                
// //                 // pick one to display initially
// //                 this.selected_breed = this.breeds[10]
// //             }catch(err){
// //                 console.log(err)
// //             }
// //         },
// //         async getImages()
// //         {
// //             try{
                
// //                 let query_params = {
// //                     breed_ids: this.selected_breed.id,
// //                     limit:8
// //                 }

// //                 let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: query_params} ) 
                
// //                 this.pagination_count = response.headers['pagination-count'];
// //                 this.images = response.data 
// //                 this.current_image = this.images[0]

                

// //                 console.log("-- ("+this.images.length +") Images from TheCatAPI.com")
// //                 console.log( this.pagination_count ,'images available for this query.')
                
// //             }catch(err){
// //                 console.log(err)
// //             }
// //         }
        
// //     }
// // })