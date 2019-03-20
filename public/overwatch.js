const baseURL = `https://ow-api.com/v1/stats/`;
const platform = document.getElementById('dropdown');

const region = document.querySelector('.dropdownTwo');
const bTag = document.querySelector('.btag');
const searchBtn = document.querySelector('.search');
const  statHead= document.querySelector('.playerName');
const statBody= document.querySelector('.playerStats');
const ratingIcon= document.getElementById('playerIcon');
const playerFace= document.getElementById('playerFace');



function fetchSpace(e) { //Declaring a function called fetchSpace, which takes in an argument of (e) - or event
    let url = `${baseURL}${platform.value}/${region.value}/${bTag.value}/profile`
    
    fetch(url)
    .then(results => { //Promise resolver. This is grabbing the results we are getting back from our fetch request. 
        return results.json() //Returns the results we receieve from our fetch jsonified (JSON = JavaScript object notation). Also gives us another promise.
    })
    .then( json => { //Promise resolver. Grabbing the jsonfied data from our promise.
        console.log(json);
        displayStats(json) //This drops our jsonified data into our displayRockets function. 
    })
} 



searchBtn.addEventListener('click', fetchSpace); 


//pc/us/NatrlCauses-1105/profile
function displayStats(data){
    
    // console.log(url);
    while (statBody.firstChild){
            statBody.removeChild(statBody.firstChild);
    }
    console.log(data);
    let stats = data;
    /*while (statHead.firstChild && statBody.firstChild) {              //this will remove the intial ten results after we make another search
        statHead.removeChild(statHead.firstChild);
        statBody.removeChild(statBody.firstChild);
    }*/
    //console.log(data)
    //for (let s in stats) {
        let name = document.querySelector('.h3')
        let level = document.createElement('li');
        let prestige = document.createElement('li')
        let gamesWon = document.createElement('li');
        let endorsement = document.createElement('li');
        let rating = document.createElement('li');
        


        
        name.textContent = 'Name: ' + data.name;
        level.textContent = 'Level: ' + data.level
        prestige.textContent = 'Prestige Level: ' + data.prestige
        gamesWon.textContent = 'Games Won: ' + data.gamesWon
        endorsement.textContent = 'Endorsement Level: ' + data.endorsement
        rating.textContent = 'Competitive Rating: ' +  data.rating
       
        //console.log(level)
    
        //statHead.appendChild(name);
        statBody.appendChild(level);
        statBody.appendChild(prestige);
        statBody.appendChild(gamesWon);
        statBody.appendChild(endorsement);
        statBody.appendChild(rating);
       
        ratingIcon.src = data.ratingIcon
        playerFace.src = data.icon
        
    
    
    
    //s}
}
   