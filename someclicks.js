setInterval(function () {
    let j = 0;
    
    if (Math.random < 0.1) {
        window.open("https://www.effectiveratecpm.com/sedb7ha8?key=78845e17581c4645e78ee558d9d078cd", "_blank");
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementsByClassName("tempLoader")[0].style.display = "none";

            data.leagues.forEach(league => {
                league.matches.forEach(match => {
                    let matchContainer = document.getElementById(match.id);
                    let timer = document.getElementById(String(j));

                    if (!matchContainer || !timer) {
                        console.warn(`Missing matchContainer or timer for match ID: ${match.id}`);
                        return;
                    }

                    let existingLiveButton = matchContainer.querySelector('.liveButton');
                    if (existingLiveButton) {
                        existingLiveButton.remove();
                    }

                    if (match.status.started && !match.status.finished) {
                        console.log('Live: ' + match.home.name + ' - ' + match.away.name);

                        let livebtn = document.createElement("div");
                        livebtn.textContent = 'Live';
                        livebtn.className = 'liveButton';
                        matchContainer.appendChild(livebtn);

                        timer.textContent = match.home.score + ' - ' + match.away.score;
                    } else if (match.status.finished) {
                        timer.textContent = 'FT';
                    } else {
                        timer.textContent = match.status.utcTime.substring(11, 16);
                    }

                    j++;
                });
            });
        })
        .catch(error => console.error("Error fetching data:", error));
}, 60000);
