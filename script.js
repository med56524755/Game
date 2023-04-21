
    const songs = [
      {
        title: "Song 1",
        url: "https://medmedmedmedmed.000webhostapp.com/MUSIC/Black%20Swan.mp3"
      },
      {
        title: "Song 2",
        url: "https://medmedmedmedmed.000webhostapp.com/MUSIC/Dreams%20Come%20True.mp3"
      },
      {
        title: "Song 3",
        url: "https://medmedmedmedmed.000webhostapp.com/MUSIC/dua%20lipa.mp3"
      }
    ];
    

   

    let isPlaying = false;
    let playedSongs = [];

    function playRandomSong() {
      // If all songs have been played, reset the playedSongs array
      if (playedSongs.length === songs.length) {
        playedSongs = [];
      }
      
      // If a song is already playing, do nothing
      if (isPlaying) {
        return;
      }
      
      // Shuffle the list of remaining songs
      const remainingSongs = songs.filter(song => !playedSongs.includes(song));
      const shuffledSongs = remainingSongs.slice().sort(() => Math.random() - 0.5);
      
      // Get the first song in the shuffled list
      const song = shuffledSongs[0];

      // Create an Audio object and start playing the song
      const audio = new Audio(song.url);
      audio.play();
      
      // Set the isPlaying flag to true
      isPlaying = true;
      
      // Add the song to the list of played songs
      playedSongs.push(song);
      
      // Add an event listener to the audio object to start playing a new song when the current song ends
      audio.addEventListener("ended", function() {
        // Set the isPlaying flag to false
        isPlaying = false;
        playRandomSong();
      });
    }
    
    const midouLabel = document.getElementById("midou");
    midouLabel.addEventListener("click", playRandomSong);