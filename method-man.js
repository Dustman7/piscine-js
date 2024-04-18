function words (str) {
var a = str.split(' ');
    return a
}

function sentence (str) {
var b =str.join(' ');
    return b
}

function yell (str) {
var c =str.toUpperCase();
    return c
}

function whisper (str) {
var d = '*' + str.toLowerCase() + '*';
    return d
}

function capitalize (str) {
var e =str.toUpperCase()[0] + str.slice(1).toLowerCase();
    return e
}