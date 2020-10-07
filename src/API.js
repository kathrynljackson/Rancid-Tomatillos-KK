class API {
  constructor(){
    this.root= 'https://rancid-tomatillos.herokuapp.com/api/v2';
  }

  getMovieData(){
    let url= `${this.root}/movies`;
    return fetch(url)
    .then(response => response.json());
  };
}

export default API;
