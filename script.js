const url = "https://www.nbrb.by/api/exrates/currencies"

fetch(url)
.then((response) =>response.json())

.then((data) => data.filter ((element)=>
new Date (element.Cur_DateEnd)>= new Date (2022,0,1)))
.then((data)=> data[Math.floor(Math.random()*data.length)])

.then(function(data){
    document.querySelector('.currency-name').innerText = `${data.Cur_Name}_${data.Cur_Name_Eng}`;
    return data
})

.then((data) => fetch (`https://www.nbrb.by/api/exrates/rates/${data.Cur_ID}?ondate=2022-1-1`)) 
.then((response) => response.json())

.then(function(data){
    document.querySelector('.well')
    .innerText = `${data.Cur_Scale}  ${data.Cur_Abbreviation}  `
    document.querySelector('.rate')
    .innerText = `${data.Cur_OfficialRate.toFixed(2)}BYN`
})
