// cat-api.js

export async function fetchBreeds() {
    try {
      const apiKey = 'live_WlVxFm6pjr6g71AG4Z6iKEqVPy5ijV67NA9s17htumQVikwcatrTYPjcj4b4G1vX'; // Замініть на свій API ключ
      const apiUrl = 'https://api.thecatapi.com/v1/breeds';
  
      const response = await fetch(apiUrl, {
        headers: {
          'x-api-key': apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const breeds = await response.json();
      return breeds;
    } catch (error) {
      console.error('Error fetching cat breeds:', error.message);
      throw error;
    }
  }
  
  export async function fetchCatByBreed(breedId) {
    try {
      const apiKey = 'live_WlVxFm6pjr6g71AG4Z6iKEqVPy5ijV67NA9s17htumQVikwcatrTYPjcj4b4G1vX'; // Замініть на свій API ключ
      const apiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  
      const response = await fetch(apiUrl, {
        headers: {
          'x-api-key': apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const catInfo = await response.json();
      return catInfo;
    } catch (error) {
      console.error('Error fetching cat info by breed:', error.message);
      throw error;
    }
  }
  




// export async function fetchBreeds() {
//     try {
//         const apiKey = 'live_WlVxFm6pjr6g71AG4Z6iKEqVPy5ijV67NA9s17htumQVikwcatrTYPjcj4b4G1vX'; // Замініть на свій API ключ
//         const apiUrl = 'https://api.thecatapi.com/v1/breeds';
  
//       const response = await fetch(apiUrl, {
//         headers: {
//           'x-api-key': apiKey,
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const breeds = await response.json();
//       return breeds;
//     } catch (error) {
//       console.error('Error fetching cat breeds:', error.message);
//       throw error;
//     }
//   }
// //   // cat-api.js

// export async function fetchBreeds() {
//     try {
//         const apiKey = 'live_WlVxFm6pjr6g71AG4Z6iKEqVPy5ijV67NA9s17htumQVikwcatrTYPjcj4b4G1vX'; // Замініть на свій API ключ
//         const apiUrl = 'https://api.thecatapi.com/v1/breeds';
  
//       const response = await fetch(apiUrl, {
//         headers: {
//           'x-api-key': apiKey,
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const breeds = await response.json();
//       return breeds;
//     } catch (error) {
//       console.error('Error fetching cat breeds:', error.message);
//       throw error;
//     }  }
  
//   export async function fetchCatByBreed(breedId) {
//     try {
//       const apiKey = 'live_WlVxFm6pjr6g71AG4Z6iKEqVPy5ijV67NA9s17htumQVikwcatrTYPjcj4b4G1vX'; // Замініть на свій API ключ
//       const apiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  
//       const response = await fetch(apiUrl, {
//         headers: {
//           'x-api-key': apiKey,
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const catInfo = await response.json();
//       return catInfo;
//     } catch (error) {
//       console.error('Error fetching cat info by breed:', error.message);
//       throw error;
//     }
//   }
  

// cat-api.js

// export async function fetchBreeds() {
//     try {
//       const apiKey = 'live_WlVxFm6pjr6g71AG4Z6iKEqVPy5ijV67NA9s17htumQVikwcatrTYPjcj4b4G1vX'; // Замініть на свій API ключ
//       const apiUrl = 'https://api.thecatapi.com/v1/breeds';
  
//       const response = await fetch(apiUrl, {
//         headers: {
//           'x-api-key': apiKey,
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const breeds = await response.json();
      
//       if (!Array.isArray(breeds)) {
//         throw new Error('Response is not an array of breeds');
//       }
  
//       return breeds;
//     } catch (error) {
//       console.error('Error fetching cat breeds:', error.message);
//       throw error;
//     }
//   }
  