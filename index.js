var btnTranslate = document.querySelector("#btn-translate");
var input = document.querySelector("#input");
var output = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
    return serverUrl +"?" +"text="+ text;
}

function errorHandler(error) {
    console.log("Error Occured", error);
    alert("Something went wrong! try sometimes later")
}

function clickHandler() {
    var input_text = input.value;
    fetch(constructUrl(input_text))
    .then(response => response.json())
    .then(json => {
        var translated = json.contents.translated;
        output.innerText = translated;
    })
    .catch(errorHandler)
};  

btnTranslate.addEventListener("click", clickHandler);