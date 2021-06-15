

//api request strings
function url(input) {
    var api = 'https://api.themoviedb.org/3/discover/movie?api_key='
    var key = 'ec424b733c5146e3c3b61f62a757083c'
    var genreQuery = '&language=en-US&with_genres='

    return api + key + genreQuery + input;
}


function genre(input) {
    var genreNameList = ["ACTION", "ANIMATION", "CRIME", "DRAMA", "FANTASY", "HORROR"];

    var action_genre = "28";
    var animation_genre = "16";
    var crime_genre = "80";
    var drama_genre = "18";
    var fantasy_genre = "14";
    var horror_genre = "27";

    var tempInput = input.toUpperCase();


    if (tempInput == genreNameList[0]) {
        return action_genre;
    }
    else if (tempInput == genreNameList[1]) {
        return animation_genre;
    }
    else if (tempInput == genreNameList[2]) {
        return crime_genre;
    }
    else if (tempInput == genreNameList[3]) {
        return drama_genre;
    }
    else if (tempInput == genreNameList[4]) {
        return fantasy_genre;
    }
    else if (tempInput == genreNameList[5]) {
        return horror_genre;
    }
    else {
        console.log("Error: genre given invalid");
    }


}



//gets a list of all movies by genre
//var genreListString =  'https://api.themoviedb.org/3/genre/movie/list?api_key=ec424b733c5146e3c3b61f62a757083c&language=en-US';


function movies() {
    var currentPageNumber;
    var movieIndex;
    var numPages;

    var movieList = [];

    return {
        getNumPages: function () { return numPages; },

        getCurrentPage: function () { return currentPageNumber; },

        getMovieIndex: function () { return movieIndex; },

        getMovieList: function () { return movieList; },

        pushMovie: function (input) { movieList.push(input); },
        popMovie: function (input) { movieList.pop(); },
        getMovieofIndex: function (index) { return movieList[index]; },
        getMoviesLength: function () { return movieList.length; },

        setNumPages: function (input) { numPages = input; },

        setCurrentPage: function (input) { currentPageNumber = input; },

        setMovieIndex: function (input) { movieIndex = input; },

        setMovieList: function (input) { movieList = input }

    };
}

var _movies = movies();


function getPage() {

    var moviesOnPage = 16;
    var moviesLength = _movies.getMoviesLength();


    for (j = 0; j < moviesOnPage; j++) {
        var t = j + 1;
        var tempTitle = "movieTitle" + t.toString();
        var tempRate = "movieRating" + t.toString();
        var tempIMG = "movieImage" + t.toString();

        var realIndex = j + ((_movies.getCurrentPage() - 1) * moviesOnPage);

        if (realIndex < moviesLength) {
            var tempMovies = _movies.getMovieList();

            var tempAVGRating = "Average Rating: " + (tempMovies[realIndex].vote_average).toString();
            var tempSRC = "https://image.tmdb.org/t/p/original/" + tempMovies[realIndex].poster_path;


            //img
            document.getElementById(tempIMG).src = tempSRC;
            document.getElementById(tempTitle).innerHTML = tempMovies[realIndex].original_title;
            document.getElementById(tempRate).innerHTML = tempAVGRating;
        }//end of if
        else {
            document.getElementById(tempIMG).src = "";
            document.getElementById(tempTitle).innerHTML = "";
            document.getElementById(tempRate).innerHTML = "";
        }
    }//end of for loop

    var tempPageNum = _movies.getCurrentPage();
    var tempNumPages = _movies.getNumPages();

    if (tempPageNum > 1 & tempPageNum < tempNumPages) {
        var tempNext = tempPageNum + 1;
        var tempPrev = tempPageNum - 1;

        document.getElementById("next").innerHTML = tempNext.toString();
        document.getElementById("current").innerHTML = tempPageNum.toString();
        document.getElementById("previous").innerHTML = tempPrev.toString();
    }
    else if (tempPageNum == 1) {
        var tempNext = tempPageNum + 1;

        document.getElementById("next").innerHTML = tempNext.toString();
        document.getElementById("current").innerHTML = tempPageNum.toString();
        document.getElementById("previous").innerHTML = "-";
    }
    else if (tempPageNum == tempNumPages) {
        var tempPrev = tempPageNum - 1;

        document.getElementById("next").innerHTML = "-";
        document.getElementById("current").innerHTML = tempPageNum.toString();
        document.getElementById("previous").innerHTML = tempPrev.toString();
    }//end if elses

}//end getPage()



// These next four functions handle the changing of the pages
// they take the current page and the total number of pages to function
//nextPage() uses both, it checks if the current page isn't the last page and if it isn't it changes the page to the next one
//Prevous() uses only current page... if merely checks if its the first page, if it isn't it changes the pate to the previous one
//lastPage() uses both, it checks if the current page is the same as teh last page, if it isn't it changes the page to the last one
//firstPage() uses only current page, it checks if it is currently on the first page, if not it changes it to the current page
function nextPage() {

    var tempPage = _movies.getCurrentPage;
    var tempNumPages = _movies.getNumPages;

    if (tempPage < tempNumPages) {
        _movies.setCurrentPage(tempPage + 1);
        getPage();
    }
}

function previousPage() {

    var tempPage = _movies.getCurrentPage;

    if (tempPage > 1) {
        _movies.setCurrentPage(tempPage - 1);
        getPage();
    }
}

function lastPage() {

    var tempPage = _movies.getCurrentPage;
    var tempNumPages = _movies.getNumPages;

    if (tempPage != tempNumPages) {
        _movies.setCurrentPage(tempNumPages);
        getPage();
    }
}

function firstPage() {

    var tempPage = _movies.getCurrentPage;

    if (tempPage != 1) {
        _movies.setCurrentPage(1);
        getPage();
    }
}






async function changeGenre(inputGenre) {
    var tempMovieList = [];
    var moviesOnPage = 16;
    _movies.setMovieList(tempMovieList);

    var tempGenre = genre(inputGenre);
    var tempURL = url(tempGenre);
    const response = await fetch(tempURL);
    const data = await response.json();

    var test = data.results.length % moviesOnPage;
    _movies.setNumPages(Math.floor(data.results.length / moviesOnPage));

    var tempNP = _movies.getNumPages();

    if (test != 0) {
        _movies.setNumPages(tempNP + 1);
        tempNP = tempNP + 1;
    }

    for (i = 0; i < data.results.length; i++) {
        _movies.pushMovie(data.results[i]);
    }

    //reset pagination and page index
    _movies.setCurrentPage(1);
    _movies.setMovieIndex(0);

    getPage();

}

function click_Action() {
    changeGenre("Action");
}


function click_Animation() {
    console.log("clicked animation");
    changeGenre("Animation");
}

function click_Crime() {
    changeGenre("Crime");
}

function click_Drama() {
    changeGenre("Drama");
}

function click_Fantasy() {
    changeGenre("Fantasy");
}

function click_Horror() {
    changeGenre("Horror");
}


changeGenre("Action");

