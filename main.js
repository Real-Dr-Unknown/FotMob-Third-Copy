matchess = [];
matchesID = [];
let i = 0;

dateee = new Date().toISOString().split('T')[0].replace(/-/g, "");
url = `https://lucky-lake-139b.devch-4522.workers.dev/?date=${dateee}`;

async function fetchMatchData(matchID, hLogo, aLogo) {
  let cachedData = getCookie(`match_${matchID}`);

  if (cachedData) {
    try {
      let parsedData = JSON.parse(cachedData);
      hLogo.src = parsedData.homeLogo;
      aLogo.src = parsedData.awayLogo;
      console.log("Loaded from cookie:", parsedData.homeLogo, parsedData.awayLogo);
      return;
    } catch (error) {
      console.error("Error parsing cached data:", error);
    }
  }

  // Fetch the data if not in the cookie
  setTimeout(async () => {
    try {
      const response = await fetch(`https://noisy-frog-d056.chaudharyayush910.workers.dev/?matchid=${matchID}`);
      const data = await response.json();

      if (data.header && data.header.teams) {
        let homeLogoUrl = data.header.teams[0].imageUrl;
        let awayLogoUrl = data.header.teams[1].imageUrl;

        hLogo.src = homeLogoUrl;
        aLogo.src = awayLogoUrl;
        console.log("Fetched from API:", homeLogoUrl, awayLogoUrl);

        setCookie(`match_${matchID}`, JSON.stringify({ homeLogo: homeLogoUrl, awayLogo: awayLogoUrl }), 1);
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 1000); // 1-second delay before fetching
}

// Function to set a cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}


function addAdBlock(parentElement) {
  let adDiv = document.createElement("div");
  adDiv.className = "ads90";

  let script1 = document.createElement("script");
  script1.type = "text/javascript";
  script1.text = `
        atOptions = {
            'key' : 'a605aef295d285c68c6f3abaa67183c5',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
        };
    `;

  let script2 = document.createElement("script");
  script2.type = "text/javascript";
  script2.src = "//www.highperformanceformat.com/a605aef295d285c68c6f3abaa67183c5/invoke.js";

  adDiv.appendChild(script1);
  adDiv.appendChild(script2);
  parentElement.parentNode.insertBefore(adDiv, parentElement.nextSibling);
}



function blurData() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementsByClassName("tempLoader")[0].style.display = "none";

      data.leagues.forEach(league => {
        let height = 60;
        let div = document.createElement("div");
        div.id = "myDiv";
        div.style.backgroundColor = '#1A1A1A';
        div.style.alignItems = 'start';
        div.style.marginTop = '15px';
        div.style.width = '92%';
        div.style.height = '60px';
        div.style.borderRadius = '15px';
        div.style.marginLeft = '4%';

        let leagueNamediv = document.createElement("div");
        leagueNamediv.style.width = '95%';
        leagueNamediv.style.height = '60px';
        leagueNamediv.style.display = 'flex';
        leagueNamediv.style.alignItems = 'center';
        leagueNamediv.style.paddingLeft = '5%';
        leagueNamediv.style.color = 'white';
        leagueNamediv.style.fontSize = '16px';
        leagueNamediv.style.fontWeight = 'bold';
        leagueNamediv.style.backgroundColor = '#262626';
        leagueNamediv.style.borderRadius = '15px';
        leagueNamediv.textContent = league.name;

        document.body.appendChild(div);
        div.appendChild(leagueNamediv);

        league.matches.forEach(match => {

          let matchContainer = document.createElement("div");
          matchContainer.id = match.id;
          matchContainer.onclick = function () {
            if (Math.random < 0.9) {
              window.open("https://www.effectiveratecpm.com/sedb7ha8?key=78845e17581c4645e78ee558d9d078cd", "_blank");
            }else {
              window.location.href = 'match.html?matchID=' + match.id;
            }
          }

          matchContainer.className = 'matchContainer';
          matchContainer.style.width = '100%';
          matchContainer.style.height = '70px';
          matchContainer.style.display = 'flex';
          matchContainer.style.alignItems = 'center';
          matchContainer.style.color = 'white';
          matchContainer.style.fontSize = '16px';
          height += 70;
          div.style.height = height + 'px';
          div.appendChild(matchContainer);

          let livebtn = document.createElement("div");
          livebtn.textContent = 'Live';
          livebtn.className = 'liveButton';

          let homeName = document.createElement("div");
          homeName.className = 'homeName';
          console.log(window.innerWidth);
          if (window.innerWidth > 700) {
            homeName.style.fontSize = '14px';
          }
          homeName.textContent = match.home.name;

          let homeLogo = document.createElement("div");
          homeLogo.className = 'homeLogo';

          let hLogo = document.createElement("img");
          hLogo.className = 'hLogo';

          let timer = document.createElement("div");
          timer.className = 'timer';
          timer.id = String(i);
          timer.textContent = match.status.utcTime.substring(11, 16);

          let awayLogo = document.createElement("div");
          awayLogo.className = 'awayLogo';

          let aLogo = document.createElement("img");
          aLogo.className = 'aLogo';

          let awayName = document.createElement("div");
          awayName.className = 'awayName';
          if (window.innerWidth > 700) {
            awayName.style.fontSize = '14px';
          }
          awayName.textContent = match.away.name;

          matchesID.push(match.id);

          // fetchMatchData(match.id, hLogo, aLogo);

          homeLogo.appendChild(hLogo);
          awayLogo.appendChild(aLogo);

          if (match.status.started && !match.status.finished) {
            let livebtn = document.createElement("div");
            livebtn.textContent = 'Live';
            livebtn.className = 'liveButton';
            matchContainer.appendChild(livebtn);
            timer.textContent = match.home.score + ' - ' + match.away.score;
          }else if(match.status.finished){
            timer.textContent = 'FT';
            // timer.textContent = match.status.utcTime.substring(11, 16);
          }else{
            timer.textContent = match.status.utcTime.substring(11, 16);
          }

          matchContainer.appendChild(homeName);
          matchContainer.appendChild(homeLogo);
          matchContainer.appendChild(timer);
          matchContainer.appendChild(awayLogo);
          matchContainer.appendChild(awayName);
          i++;
        });
        if (Math.random() < 0.3) {
          addAdBlock(div);
        }
      });
    })
    .catch(error => console.error("Error fetching data:", error));
}

blurData();
