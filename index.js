const url = "https://superheroapi.com/api/104295122591149";

// const xhr = new XMLHttpRequest();
// function fetchPost() {
//     xhr.onload = () => {
//         if (xhr.status == 200) {
//             // let data =JSON.parse( xhr.response)
//             // console.log(data);
//         }
//         else {
//             console.log("There is an error in the connection");
//         }
//     }
//     xhr.open("GET", url);
//     console.log(xhr);
//     xhr.send()
// }

// fetchPost()


const Btn = document.getElementsByClassName("btn")[0]
const heroImageDiv = document.getElementById("hero-image")

const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("searchInput")

const NameTag = document.getElementById("name");



const getSuperHero = (id, name) => {

    fetch(`https://superheroapi.com/api.php/104295122591149/${id}`)
        .then(response => response.json())
        .then(json => {
            showHeroInfo(json)
            searchInput.value = " ";
            console.log(json);
        });
}

const statEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🔋',
    power: '🎏',
    combat: '⚔'
}

const showHeroInfo = (character) => {
    const Heroname = character.name;
    const img = `<img src="${character.image.url}" style="width:400px;height:400px;" /> `

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statEmoji[stat]} ${stat} : ${character.powerstats[stat]}</p>`
    }).join(' ')

    heroImageDiv.innerHTML = `${img} ${stats}`;
    NameTag.innerHTML = `${Heroname}`;
    NameTag.classList.add("heroname");
    heroImageDiv.classList.add("herostats");
    
}


const getSearchSuperHero = (heroName) => {
    fetch(`https://superheroapi.com/api.php/104295122591149/search/${heroName}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]
            showHeroInfo(hero);

        })
}


const randomHero = () => {
    return Math.floor(Math.random() * 731) + 1;
}

Btn.onclick = () => getSuperHero(randomHero())
searchBtn.onclick = () => getSearchSuperHero(searchInput.value)

