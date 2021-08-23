var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#outputBox");




function getTranslationUrl(text) {
    return ("https://api.funtranslations.com/translate/shakespeare.json" + "?text=" + text)
}




function clickEvent() {

    var inputText = textInput.value;

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {

        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText;
    })
}
  

btnTranslate.addEventListener("click", clickEvent);