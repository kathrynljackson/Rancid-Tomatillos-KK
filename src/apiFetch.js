
  export const movieDataFetch = ()  => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())

}


  export const postData = (email, password) => {
      return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .catch(err => console.log(err))
    }

  export const getOneMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
  }

  export const getRatings = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${id}/ratings`)
      .then(response => response.json())
  }

  export const postRatings = (id, movie_id, rating) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${id}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          movie_id: movie_id,
          rating: rating
        })
      })
      .then(response => response.json())
      .catch(err => console.log(err))
    }

    export const deleteRating = (userID, ratingID) => {
     return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings/${ratingID}`, {
       method: 'DELETE',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({})
     }).catch(error => console.log(error))
   }
