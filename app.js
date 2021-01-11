var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("Bello!");
    txtOutput.value = txtInput.value;
});
