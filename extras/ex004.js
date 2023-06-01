//making faces

function convert(emoji) {
    const modifiedEmoji = sentence.replace(':)','🙂').replace(':(','🙁')
    return modifiedEmoji
}
  
const sentence = prompt('Type a sentence: ')
const modifiedSentence = convert(sentence)

console.log(modifiedSentence)