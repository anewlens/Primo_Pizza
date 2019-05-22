const menuFilter = document.querySelector('.menu-nav')

menuFilter.childNodes.forEach(option => {
    option.addEventListener('click', () => {
        let button = event.target
        if (!button.classList.contains('selected')) {
            menuFilter.childNodes.forEach(option => {
                if (option !== button && option.classList.contains('selected')) {
                    option.classList.remove('selected')
                }
            })
            button.classList.add('selected')
        }
    })
})


//MAP API
var mymap = L.map('mapid').setView([37.616227, -77.321073], 19);
var marker = L.marker([37.616227, -77.321073], {
    color: 'red' 
}).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5ld2xlbnMiLCJhIjoiY2p2eWo4aXJjMGdpYzRicDhsNnVmb2t3dyJ9.i4PPZTRL40cNVj_Kr2nQGA'
}).addTo(mymap);

