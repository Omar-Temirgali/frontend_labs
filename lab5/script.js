function larger(element) {
    element.style.fontSize = "21px";
}
function smaller(element) {
    element.style.fontSize = "18px";
}
function onLogo() {
    document.getElementById("logO").src = "media/logo2.png";
}
function outLogo() {
    document.getElementById("logO").src = "media/logo1.png";
}
function adventureTime() {
    document.getElementById("picture").src = "media/adventureTime.gif";
}
function back() {
    document.getElementById("picture").src = "media/167448.png";
}
function changeContent(element) {
    var e = element.innerHTML;
    var videoElement = '<video width = 400px controls><source src = "media/musicVideo.mp4" type="video/mp4"></source></video>';
    var gamesPicture = '<img id="picture" src="media/XiPp.gif" alt="comp" width="400px">';
    var artPicture = '<img id="picture" onclick = "back()" onmouseover = "adventureTime()" src="media/167448.png" alt="comp" width="400px">';
    switch(e) {
        case "GAMES": 
            document.getElementById("container").innerHTML = gamesPicture;
            document.getElementById("header_h1").innerHTML = "Video Games";
            document.getElementById("myP").innerHTML = "This era contributed many influential aspects to the history of the development of video games. The third generation saw the release of many of the first console role-playing video games (RPGs). Editing and censorship of video games was often used in localizing Japanese games to North America. During this era, many of the most famous video game franchises of all time were founded that outlived the third generation and continued through releases on later consoles. Some examples are Super Mario Bros., Final Fantasy, The Legend of Zelda, Dragon Quest, Metroid, Mega Man, Metal Gear, Castlevania, Phantasy Star, Megami Tensei, Ninja Gaiden, and Bomberman.";
            break;
        case "MUSIC": 
            document.getElementById("container").innerHTML = videoElement; 
            document.getElementById("header_h1").innerHTML = "8-bit music";
            document.getElementById("myP").innerHTML = "A few decades ago, when Commodore, Atari and Nintendo chipsets entered the marketplace, many computer users were underwhelmed by the way these devices reproduced music. The intriguing 8-bit music scene has rendered such ideas moot. In 2007, 8-bit artists are creating very listenable, and at times downright beautiful music using the square-wave based sound generators of decades old devices.";
            break;
        case "ARTS": 
            document.getElementById("container").innerHTML = artPicture;
            document.getElementById("header_h1").innerHTML = "8-bit art";
            document.getElementById("myP").innerHTML = "8-bit art is a form of digital art made with raster graphics software, where images are edited on the pixel level. The aesthetic for this kind of graphics comes from 8-bit and 16-bit computers and video game consoles, in addition to other limited systems such as graphing calculators. In most pixel art, the color palette used is extremely limited in size, with some pixel art using only two colors.";
            break;
    }
}