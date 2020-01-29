#!/usr/bin/env node
const MESSAGE = 'zhofrph wr judylwb idoov'

function splitSentence (rawString) {
  return rawString.split('')
}

function decrypt (message) {
  return splitSentence(message).reduce((decrypt, char, index) => {
    let shiftedCharCode = char.charCodeAt(0) - this.cipherKey

    if (shiftedCharCode < this.charCodeRange[0]) {
      shiftedCharCode += this.charCodeAmplitude
    } else if (shiftedCharCode > this.charCodeRange[1]) {
      shiftedCharCode -= this.charCodeAmplitude
    }

    return char.match(/[a-z]/)
      ? [
          ...decrypt.slice(0, index),
          String.fromCharCode(shiftedCharCode),
          ...decrypt.slice(index + 1)
        ].join('')
      : decrypt
  }, message)
}

function CaesarShift ({ charCodeRange, cipherKey, decryptFn }) {
  this.charCodeAmplitude = charCodeRange[1] - charCodeRange[0] + 1
  this.charCodeRange = charCodeRange
  this.cipherKey = cipherKey
  this.decrypt = decryptFn
}

const cipherConfig = {
  charCodeRange: ['a'.charCodeAt(0), 'z'.charCodeAt(0)], // lowercase [a-z] constraint
  cipherKey: 3,
  decryptFn: decrypt
}
const cipher = new CaesarShift(cipherConfig)

console.log(cipher.decrypt(MESSAGE))
