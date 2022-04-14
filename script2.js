let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let curr_track = document.createElement('audio');

let track_index = 0;
let randomIcon = document.querySelector('.fa-random');
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg',
        name : 'Lesson 1',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/01 1.mp3'
    },
   
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg',
        name : 'Lesson 2',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/02 2.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 3',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/03 3.mp3'
    },
  
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 4',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/04 4.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 5',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/05 5.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 6',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/06 6.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 7',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/07 7.mp3'
    },
    
    {
        img :'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 8',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/08 8.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 9',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/09 9.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 10',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/10 10.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 11',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/11 11.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 12',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/12 12.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 13',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/13 13.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 14',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/14 14.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 15',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/15 15.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 16',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/16 16.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 17',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/17 17.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 18',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/18 18.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 19',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/19 19.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 20',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/20 20.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 21',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/21 21.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 22',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/22 22.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 23',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/23 23.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 24',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/24 24.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 25',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/25 25.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 26',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/26 26.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 27',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/27 27.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 28',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/28 28.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 29',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/29 29.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 30',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/30 30.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 31',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/31 31.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 32',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/32 32.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 33',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/33 33.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 34',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/34 34.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 35',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/35 35.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 36',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/36 36.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 37',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/37 37.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 38',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/38 38.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 39',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/39 39.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 40',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/40 40.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 41',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/41 41.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 42',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/42 42.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 43',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/43 43.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 44',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/44 44.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 45',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/45 45.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 46',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/46 46.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 47',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/47 47.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 48',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/48 48.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 49',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/49 49.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 50',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/50 50.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 51',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/51 51.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 52',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/52 52.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 53',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/53 53.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 54',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/54 54.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 55',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/55 55.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 56',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/56 56.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 57',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/57 57.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 58',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/58 58.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 59',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/59 59.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 60',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/60 60.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 61',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/61 61.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 62',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/62 62.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 63',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/63 63.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 64',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/64 64.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 65',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/65 65.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 66',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/66 66.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 67',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/67 67.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 68',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/68 68.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 69',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/69 69.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 70',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/70 70.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 71',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/71 71.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 72',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/72 72.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 73',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/73 73.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 74',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/74 74.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 75',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/75 75.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 76',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/76 76.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 77',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/77 77.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 78',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/78 78.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 79',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/79 79.mp3'
    },
    
    {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 80',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/80 80.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 81',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/81 81.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 82',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/82 82.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 83',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/83 83.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 84',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/84 84.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 85',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/85 85.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 86',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/86 86.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 87',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/87 87.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 88',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/88 88.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 89',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/89 89.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 90',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/90 90.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 91',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/91 91.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 92',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/92 92.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 93',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/93 93.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 94',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/94 94.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 95',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/95 95.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 96',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/96 96.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 97',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/97 97.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 98',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/98 98.mp3'
    },
    
     {
        img : 'CIVIC_TEST_IMAGE/usa_flag.jpg' ,
        name : 'Lesson 99-100',
        artist : 'Citizenship and Immigration Services',
        music : 'USCIS_CIVIC_TEST_AUDIO/99 99-100.mp3'
    },

];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}