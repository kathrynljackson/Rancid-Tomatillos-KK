// const mainUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2'
//
// export const getMovies = () => {
//   return fetch(`${mainUrl}/movies`)
//     .then(response => response.json())
// }



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
      // .then(response => console.log(response))
      .catch(err => console.log(err))
    }

export const getOneMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(console.log('NOW FETCHING SINGLE MOVIE DATA'))
    .catch(err => console.log('ERROR IN GETONEMOVIE'))
}
