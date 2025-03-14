let mate = document.getElementById('mate');
let LeagueName;
LNN = document.getElementById('LN');
urlParams = new URLSearchParams(window.location.search);

const mateID = urlParams.get('matchID');

fetch(`https://noisy-frog-d056.chaudharyayush910.workers.dev/?matchid=${mateID}`)
    .then(response => {return response.json();})
    .then(data => {
        LNN.textContent = data.general.leagueName + ' ' + data.general.leagueRoundName; 
        if (data?.content?.superlive?.superLiveUrl) {
            console.log("Superlive URL:", data.content.superlive.superLiveUrl);

            // fetch("https://pub.fotmob.com/prod/news/api/law?matchid=8k5sbfy6dhtz9xti99ltg7tp0&competition=34pl8szyvrbwcmfkuocjm3r6t&season=4x7uzww3jur4re7sgt3mslyj8&version=v4w")
            //     .then(response => response.json())
            //     .then(dataa => {})
            //     .catch(error => console.error("Error fetching data:", error));s
        } else {
            console.log("superliveURL not available");
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });