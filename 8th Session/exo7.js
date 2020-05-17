var TopMovies=[];
function CreateMovie(Title,Rank,isWatched){
    return {
        Title:Title,
        Rank:Rank+"/10",
        isWatched: isWatched
    }
}
TopMovies.push(CreateMovie("THE IRISHMAN", 7.9, true)); 
TopMovies.push(CreateMovie("THE GOD FATHER", 9.2, true));
TopMovies.push(CreateMovie("THE DARK KNIGHT", 9.0, true));
TopMovies.push(CreateMovie("THE AVENGERS: END GAME", 8.4, true));
TopMovies.push(CreateMovie("TRAINING DAY", 7.7, false));
TopMovies.push(CreateMovie("ANGELS AND DEMONS", 6.7, false));
TopMovies.push(CreateMovie("BLACK PANTHER", 7.3, true));
TopMovies.push(CreateMovie("THE DA VINCI CODE", 6.6, true));
TopMovies.push(CreateMovie("INCEPTION", 8.8, true));
TopMovies.push(CreateMovie("THE JOKER", 8.5, true));

TopMovies.forEach(function(el){
    var movie="Title : "+el.Title+"\n";
    if(el.isWatched) movie+="I watched it"; //movie= movie +"i watched it"
    else movie+="I Didn't watch it";
    movie+="\n"+"Ranked: "+el.Rank;
    console.log(movie);
});