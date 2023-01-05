/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descript = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

apik = "dkscsdkskd";

function convertion(val){
    return (val - 273).toFixed(2);
}
btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
            .then(res => res.json())
            .then(data => {
                
                var nameval = data['name'];
        var descrip = data['weather']['0']['descrption'];
        var tempature = data['main']['temp'];
        var wndspd = data['wind']['speed'];
        var time = data['datetime']['hour']['minute']['second']
        
        city.innerHTML = 'Weather of <span>${nameval}<span>';
        temp.innerHTML = 'Temparature: <span>${convertion(temparature)}<span>';
        description.innerHTML = 'Sky conditions: <span>${descrip}<span>';
        wind.innerHTML = 'Wind speed: <span>${wndspd} km/h<span>';
        time.innerHTML = 'Time: <span>${time}<span>';
        
    }).catch(err => alert('Open your Location'));
});