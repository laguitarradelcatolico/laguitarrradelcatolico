// =============================================== //
// - Remove any active classes (yellow boxes)
// - Add active class to the clicked example box
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //


// Handle: All Example boxes
$('.card-content').click(function () {
    $('.card-content').removeClass('active');
    $(this).addClass('active');
    
    // Destroy any pervious Kast
    // before we call a new Kast
    $.kast('destroy')    
})

// Handle: Example 1 click function
$('#demo-1').click(function () {
    $.kast({	
		protocol: "http://64.37.55.231:8652/;" ,
		host: '1',
        port: 0000,
        version: 1,
        artwork: ['images/video-games-music.jpg', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "EMISORA MINUTO DE DIOS"

    })
})

// Handle: Example 2 click function
$('#demo-2').click(function () {
    $.kast({
		protocol: "http://centova.paradigmaweb.com:9320/;"  ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: ['../images/SAN PABLO.jpg', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "RADIO SAN PABLO"
    })
})

// Handle: Example 3 click function
$('#demo-3').click(function () {
    $.kast({
		protocol: " http://64.37.55.231:8628/;" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "RCC RADIO"
    })
})

// Handle: Example 4 click function
$('#demo-4').click(function () {
    $.kast({
       protocol: "http://dreamsiteradiocp.com:8076/stream?type=http&amp;nocache=1056" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO MARIA COLOMBIA "
    })
})

// Handle: Example 5 click function
$('#demo-5').click(function () {
    $.kast({
        protocol: "http://162.144.253.233:8074/;" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "LA VOZ DE JESUCRISTO BOGOTA COLOMBIA  "
    })
})

// Handle: Example 6 click function
$('#demo-6').click(function () {
    $.kast({
        protocol: "http://ample-zeno-12.radiojar.com/unuv8t77eyduv.aac?1542757955=&rj-token=AAABZzOTbQT44myJywSaAdaTNo4x-WA9nuER-B7HI96oYZQxQW67jQ&rj-ttl=5" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "  RADIO ALFAREROS FM  "
    })
})

// Handle: Example 7 click function
$('#demo-7').click(function () {
    $.kast({
		protocol: "http://190.3.169.97:9304/;" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO STELLA MARIS CHILE "
    })
})

// Handle: Example 8 click function
$('#demo-8').click(function () {
    $.kast({
        protocol: "http://198.27.68.65:8785/;" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO SINAI COSTA RICA  "
    })
})

// Handle: Example 9 click function
$('#demo-9').click(function () {
    $.kast({
        protocol: "http://147.135.11.82:7906/;" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO ORIENTAL URUGUAY "
    })
})


// MODELO

$('#demo-10').click(function () {
    $.kast({
        protocol: "http://ca4.rcast.net:8034/;?1572551048097" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "RADIO MISION CATOLICA EEUU "
    })
})

$('#demo-11 ').click(function () {
    $.kast({
        protocol: "http://dreamsiteradiocp.com:8096/stream.mp3  " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "  RADIO MARIA VENEZUELA"
    })
})

$('#demo-12 ').click(function () {
    $.kast({
        protocol: "http://dreamsiteradiocp.com:8088/stream?type=http&nocache=115 " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO MARIA URUGUAY "
    })
})

$('#demo-13').click(function () {
    $.kast({
        protocol: "http://dreamsiteradiocp.com:8090/stream?type=http&nocache=1259 " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO MARIA PARAGUAY "
    })
})
$('#demo-14 ').click(function () {
    $.kast({
        protocol: "http://dreamsiteradiocp4.com:8048/;?1507607076079 " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "RADIO MARIA NICARAGUA  "
    })
})
$('#demo-15 ').click(function () {
    $.kast({
        protocol: "http://37.187.164.152:8004/; " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "RADIO MARIA MEXICO  "
    })
})
$('#demo-16').click(function () {
    $.kast({
        protocol: "http://radioserver9.profesionalhosting.com:47307/;stream " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO MARIA ECUADOR  "
    })
})
$('#demo-17 ').click(function () {
    $.kast({
        protocol: " http://dreamsiteradiocp.com:8060/stream " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "RADIO MARIA ESPAÑA  "
    })
})
$('#demo-18 ').click(function () {
    $.kast({
        protocol: "http://london-dedicated.myautodj.com:8114/stream2 " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "RADIO ESPIRITU SANTO ARGENTINA  "
    })
})
$('#demo-19 ').click(function () {
    $.kast({
        protocol: " http://66.55.64.133:8000/; " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO FE PANAMA "
    })
})
$('#demo-20 ').click(function () {
    $.kast({
        protocol: "http://149.202.198.86:3461/;listen.mp3" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO CRISTO REY MEXICO "
    })
})
$('#demo-21 ').click(function () {
    $.kast({
        protocol: "https://streamseguro.com/radio/8010/stream?1563152898" ,
        host: '186.4.136.144',
        port: 8000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "RADIO CATOLICA NACIONAL ECUADOR  "
    })
})
$('#demo-22 ').click(function () {
    $.kast({
        protocol: " http://janus.shoutca.st:8987/;" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO CATOLICA INTERNACIONAL REPUBLICA DOMINICANA "
    })
})
$('#demo-23 ').click(function () {
    $.kast({
        protocol: "http://server.aacplus.com.gt:8000/;" ,
        host: 'miradioenlinea.net',
        port: 8708,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO CATOLICA GUATEMALA 107.9  "
    })
})
$('#demo-24 ').click(function () {
    $.kast({
        protocol: "http://radiocatolica.serverroom.net:7766/stream " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO CATOLICA DE OLANCHO HONDURAS "
    })
})
$('#demo-25 ').click(function () {
    $.kast({
        protocol: "http://144.217.67.108:8053/;" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "RADIO CATOLICA DE AUTLAN  "
    })
})
$('#demo-26 ').click(function () {
    $.kast({
        protocol: "http://198.27.68.65:8555/;stream.mp3" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO CATOLICA NICARAGUA "
    })
})
$('#demo-27 ').click(function () {
    $.kast({
        protocol: "http://200.1.201.244:8000/680AM?1572557192269" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO CARITAS PARAGUAY "
    })
})
$('#demo-28 ').click(function () {
    $.kast({
        protocol: "http://72.29.89.35:8036/;" ,
        host: 'icecast.radiobetania.com',
        port: 8000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "RADIO CATOLICA CARISMA BOLIVIA  "
    })
})
$('#demo-29 ').click(function () {
    $.kast({
        protocol: "https://s42.maxcast.com.br:8004/live?id=1572557684127" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO CONEXAO JOVEM CATOLICA BRAZIL "
    })
})
$('#demo-30 ').click(function () {
    $.kast({
        protocol: " http://01.solumedia.com.ar:7411/;stream.nsv" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " RADIO ALEGRATE ARGENTINA "
    })
})
$('#demo-31 ').click(function () {
    $.kast({
        protocol: "http://audiocdn.mainstreaming.tv/101161/radio-spanish-aac" ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: " ETWN "
    })
})
$('#demo-32 ').click(function () {
    $.kast({
        protocol: "http://192.99.18.164:9886/; " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "APOSTOLES DE LA PALABRA CHILE  "
    })
})
$('#demo-33 ').click(function () {
    $.kast({
        protocol: " " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "  "
    })
})
$('#demo- ').click(function () {
    $.kast({
        protocol: " " ,
        host: '1',
        port: 0000,
        version: 1,
        artwork: [' ', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'light',
        autoPlay: true,
        startTemplate: 'minimized',
        played: true,
		currentTrack: "  "
    })
})












