
function reverseWords(sentence) {
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = reverseString(words[i]);
    }

    let reversedSentence = words.join(' ');

    return reversedSentence;
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let inputSentence = "One honest conversation can change everything";
let reversedResult = reverseWords(inputSentence);
console.log(reversedResult);