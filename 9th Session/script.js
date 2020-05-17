var TopMovies=[];
function CreateMovie(Title,Rank,isWatched,urlImg){
    return {
        Title:Title,
        Rank:Rank+"/10",
        urlImg:urlImg,
        isWatched: isWatched
    }
}
TopMovies.push(CreateMovie("THE IRISHMAN", 7.9, true,"https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg")); 
TopMovies.push(CreateMovie("THE GOD FATHER", 9.2, true,"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"));
TopMovies.push(CreateMovie("THE DARK KNIGHT", 9.0, true,"https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg"));
TopMovies.push(CreateMovie("THE AVENGERS: END GAME", 8.4, true));
TopMovies.push(CreateMovie("TRAINING DAY", 7.7, false));
TopMovies.push(CreateMovie("ANGELS AND DEMONS", 6.7, false));
TopMovies.push(CreateMovie("BLACK PANTHER", 7.3, true));
TopMovies.push(CreateMovie("THE DA VINCI CODE", 6.6, true));
TopMovies.push(CreateMovie("INCEPTION", 8.8, true));
TopMovies.push(CreateMovie("THE JOKER", 8.5, true));

var UlTopMovies=document.querySelector("ol.TopMovies");
TopMovies.forEach(function(el){
    var li =document.createElement("li");
    li.innerHTML=el.Title+" : <ul>"+
        "<img src=\""+el.urlImg+"\">"
        "<li> is Watched : "+el.isWatched+"</li> "+
        "<li> Rank : "+el.Rank+"</li> "+
        "</ul>";
    UlTopMovies.appendChild(li);
})