const songs = [
    "Thirsty",
    "Lover",
    "The Last",
    "I Love You",
    "The Way",
    "My Love",
    "The Night",
    "The End",
    "The Beginning",
    "The Dream",
    "The Light",
    "The Shadow"
];

document.getElementById('checkFortune').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];
    document.getElementById('fortuneResult').innerText = `선택된 노래: ${selectedSong}`;
});

