const container = document.querySelector(".container");
const contBody = document.querySelector(".cont-body");



imageUrl = "https://source.unsplash.com/random/";

    for(var i=0; i<15; i++) {

        const i = document.createElement("img");
        i.src = `${imageUrl}${randomNumber()}`, contBody.appendChild(i);

    };

function randomNumber() {
    return Math.floor(200 * Math.random()) + 300 ;
};





