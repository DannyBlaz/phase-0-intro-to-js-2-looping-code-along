// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

const array = ["Ada", "Brendan", "Ali"]

function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(`Happy ${event} ${element}`);
    }
}

writeCards(array, "Birthday")

var count = 10
while (count >= 0) {
    console.log(count--);
}
