function gnirtS(word) {

    var newWord = "";
    for (var i = word.length - 1; i >= 0; i--) {

        newWord += word[i];
    }
    console.log(newWord);
}

gnirtS('Tadeu sera contratado');