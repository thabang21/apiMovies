const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const getMovies = async (url)=>{
        const response = await fetch(url);
        const data = await response.json();
        showMovies(data.results)
    }

    getMovies(APIURL);

    const showMovies = (data) =>{
        document.getElementById("movie-box").innerHTML = "";

        data.map((movie)=>{
            console.log(movie)

           const {poster_path, title, overview, release_date, vote_count} = movie;
            let div = document.createElement("div");
            div.setAttribute("class", "movie__card");

            let ui = `
                <img src=${IMGPATH+poster_path}>
                <p>${title}</p>
                <p>${overview}</p>
                <p>${release_date}</p>
                <p>${vote_count }</p>
            `;
            div.innerHTML = ui;
         
            let movieBox = document.getElementById("movie-box");
            movieBox.append(div);
        })
    }

    let search = document.getElementById("search");
    search.addEventListener("keyup", (e)=>{
        if(e.target.value !== ""){
            getMovies(SEARCHAPI+e.target.value);
        } else {
            getMovies(APIURL);
        }
    })