const fromLang = document.querySelector("#from-lang");
const toLang = document.querySelector("#to-lang");
const btnTranslate =$("#btnTranslate")
const fromText =$("#from-text")
const toText =$("#to-text")
const exchange =$(".exchange")
const icons = $(".icons")

for(let lang in languages) {
    let option = `<option value="${lang}">${languages[lang]}</option>`;
    fromLang.insertAdjacentHTML("beforeend", option);
    toLang.insertAdjacentHTML("beforeend", option);

    fromLang.value = "tr-TR";
    toLang.value = "en-GB";
}

$(btnTranslate).click(function () { 
    let text = $(fromText).val();
    let from = $(fromLang).val();
    let to = $(toLang).val();
    console.log(text)

    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            $(toText).val(data.responseData.translatedText);
        })

});

$(exchange).click(function () { 
     $(fromText).val();
    let text = $(fromText).val();
    $(fromText).val($(toText).val());
    $(toText).val(text) 

    let lang = fromLang.value;
    fromLang.value = toLang.value;
    toLang.value = lang
});

for(let icon of icons){
    $(icon).click(function (e) { 
        if(e.target.classList.contains("fa-copy")){
            if(e.target.id=="from"){
                navigator.clipboard.writeText($(fromText).val())
            }else{
                navigator.clipboard.writeText($(toText).val())
            }
        }else{
            let utterance;
            if(e.target.id =="from"){
                utterance = new SpeechSynthesisUtterance($(fromText).val())
                utterance.lang =  $(fromLang).val();
                
            }else{
                utterance = new SpeechSynthesisUtterance($(toText).val())
                utterance.lang = $(toLang).val();
                
            }
            speechSynthesis.speak(utterance)
        }
        
    })
}