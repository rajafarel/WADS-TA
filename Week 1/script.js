window.addEventListener("DOMContentLoaded", FetchData)


const advice_title = document.querySelector('#adviceid');
const advice_body = document.querySelector('#advicetext');
const dice = document.querySelector('#dice')
async function FetchData(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    console.log(json);
    advice_title.innerText = `ADVICE # ${json.slip.id}`
    advice_body.innerText = `"${json.slip.advice}"`;
}
dice.addEventListener("click",FetchData);