let mate = document.getElementById('mate');
let sad = document.getElementById('sad');
let WLB = document.getElementById('wss');
let SUB = document.getElementById('sss');
let GBB = document.getElementById('hss');
let box = document.getElementById('notifier');

let MHN = document.getElementById('HName');
let MHL = document.getElementById('HLogoI');
let GorT = document.getElementById('timeur');
let MAL = document.getElementById('ALogoI');
let MAN = document.getElementById('AName');


if (window.innerWidth > 700) {
    MHN.style.fontSize = '25px'
    MHL.style.fontSize = '25px'
    GorT.style.fontSize = '25px'
    MAL.style.fontSize = '25px'
    MAN.style.fontSize = '25px'
}




function fadeIn() {
    box.classList.add("show");

    setTimeout(() => {
        fadeOut();
    }, 5000);
}

function fadeOut() {
    document.getElementById("notifier").classList.remove("show");
}

function subbb() {
    if (Math.random < 0.8) {
        window.open("https://www.effectiveratecpm.com/sedb7ha8?key=78845e17581c4645e78ee558d9d078cd", "_blank");
    } else {
        box.textContent = '\u{2764} Love You';
        fadeIn();
    }
}

function wsss() {
    if (Math.random < 0.9) {
        window.open("https://www.effectiveratecpm.com/sedb7ha8?key=78845e17581c4645e78ee558d9d078cd", "_blank");
    } else {
        box.textContent = 'Live Unavailable';
        fadeIn();
    }
}

function whsss() {
    if (Math.random < 0.3) {
        window.open("https://www.effectiveratecpm.com/sedb7ha8?key=78845e17581c4645e78ee558d9d078cd", "_blank");
    } else {
        box.textContent = "We are facing heavy traffic";
        fadeIn();
    }
}
 
let LeagueName;
LNN = document.getElementById('LN');
urlParams = new URLSearchParams(window.location.search);

const mateID = urlParams.get('matchID');

SUB.addEventListener('click', subbb);
GBB.addEventListener('click', () => {
    if (Math.random < 0.3) {
        window.open("https://www.effectiveratecpm.com/sedb7ha8?key=78845e17581c4645e78ee558d9d078cd", "_blank");
    } else {
        window.location.href = 'index.html';
    }
});

fetch(`https://noisy-frog-d056.chaudharyayush910.workers.dev/?matchid=${mateID}`)
    .then(response => {return response.json();})
    .then(data => {

        MHN.style.visibility = 'visible'
        MHL.style.visibility = 'visible'
        GorT.style.visibility = 'visible'
        MAL.style.visibility = 'visible'
        MAN.style.visibility = 'visible'

        LNN.textContent = data.general.leagueName + ' ' + data.general.leagueRoundName; 
        sad.style.display = 'none';
        MHN.textContent = data.general.homeTeam.name;
        MAN.textContent = data.general.homeTeam.name;
        GorT.textContent = data.general.matchTimeUTCDate.substring(11, 16);
        MHL.src = data.header.teams[0].imageUrl;
        MAL.src = data.header.teams[1].imageUrl;
        console.log(data.header.teams[0].imageUrl)
        console.log(data.header.teams[1].imageUrl)

        if (data.general.started && !data.general.finished) {
            GorT.textContent = data.header.teams[0].score + '  -  ' + data.header.teams[1].score;
        }else if (data.general.finished) {
            GorT.innerHTML = data.header.teams[0].score + '  -  ' + data.header.teams[1].score + '<br>FT';
        }

        if (data?.content?.superlive?.superLiveUrl) {

            console.log("Superlive URL:", data.content.superlive.superLiveUrl);
            let SuLBtn = document.createElement('button');
            SuLBtn.textContent = 'SuperLive';
            SuLBtn.className = 'SLBTN';

            WLB.addEventListener('click', () => {
                if (Math.random < 0.3) {
                    window.open("https://www.effectiveratecpm.com/sedb7ha8?key=78845e17581c4645e78ee558d9d078cd", "_blank");
                } else {
                    if (data.general.started && !data.general.finished) {
                        window.location.href = data.content.superlive.superLiveUrl;
                    }else if (data.general.finished) {
                        box.textContent = 'Match has been ended';
                        fadeIn();
                    }else if (!data.general.started) {
                        box.textContent = 'Match isn\'t started';
                    }
                    fadeIn();
                }
            });


        } else {
            WLB.addEventListener('click', wsss);
            console.log("superliveURL not available");
        }
    })
    .catch(error => {
        box.textContent = "We are facing heavy traffic";
        WLB.addEventListener('click', whsss);
        console.error("Error fetching data:", error);
    });