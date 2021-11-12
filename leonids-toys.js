const cards = [
{
    id: 1,
    name: "Uno",
    maker: "Mattel",
    deckSize: 112,
    price: 7.79,
    playersNeeded: 2
},
{
    id: 2,
    name: "Cards Against Humanity",
    maker: "Max Temkin",
    deckSize: 600,
    price: 25.00,
    playersNeeded: 3
},
{
    id: 3,
    name: "Standard",
    maker: "Bicylce Store",
    deckSize: 52,
    price: 6.82,
    playersNeeded: 2
}
]

//Chapter 3
// console.log(uno.maker)
// console.log(humanity.deckSize)
// console.log(standard.price)

//////////////////////////////////////////

//Chapter 4
// console.log(cards)

//////////////////////////////////////

//Chapter 5
// for (const card of cards) {
//     console.log(card.price)
// }

// for (const card of cards) {
//     console.log(card.deckSize)
// }

// for (const card of cards) {
//     console.log(`You need at least ${card.playersNeeded}`)
// }

// for (const card of cards) {
//     console.log(`${card.maker} created ${card.name}. It cost $${card.price} per deck. Each desk has ${card.deckSize} cards. You need at least ${card.playersNeeded} players to play a game.`)
// }

/////////////////////////////////////////

//Chapter 6

const dutchBlitz = {
    id: 4,
    name: "Dutch Blitz",
    maker: "Dutch Blitz",
    price: 11.99,
    playersNeeded: 4
}

const oldMaid = {
    id: 5,
    name: "Old Maid",
    maker: "Old",
    price: 9.00,
    playersNeeded: 2
}

const meme = {
    id: 6,
    name: "What Do You Meme?",
    maker: "Meme",
    price: 29.99,
    playersNeeded: 3
}


// cards.push(dutchBlitz)
// cards.push(oldMaid)
// cards.push(meme)
cards.push(dutchBlitz, oldMaid, meme)


// for (card of cards) {
//     console.log(card)
// }

//Chapter 7

///////////////////////////////////////

// for (const card of cards) {
//     console.log(`${card.maker} created ${card.name}. It cost $${card.price} per deck. Each desk has ${card.deckSize} cards. You need at least ${card.playersNeeded} players to play a game.`)
// }

////////////////////////////

//Chapter 8

// for (card of cards) {
//     card.price = (card.price * .005) + card.price
//     console.log(`${card.name} is now ${card.price}.`)

// }

// for (card of cards) {
//     card.playersNeeded = card.playersNeeded + 5
//     console.log(`When playing ${card.name}, it's more fun to have at least ${card.playersNeeded} players in the game.`)
// }

///////////////////////////

//Chapter 9 
//Why not use splice or one of the other suffix's to take information out of a array?

// const myCardGame = 1

// for (const card of cards) {
//     if (card.id === myCardGame) {
//         card.playersNeeded = card.playersNeeded + 5
//         console.log(`When playing ${card.name}, it's more fun to have at least ${card.playersNeeded} players in the game.`)
//     }
// }

//////////////////////////////////////////

//Chapter 10
// Why does cardObject work without being defined?
// By substracting one from the card.length is that suppose to have the id count start at one?
//why doesn't addCardToIntventory read multiple parameters?
    //I noticed that when I entered applesToApples, which has an id of 8, will output a id of 7. 
    //I believe this due to the function is overriding the the object id because the function is counting the objects not outpting the id as is. 
    //With this being said, is this why the function is not able to read multiple parameters within the paratheses?


const phaseTen = {
    id: 7,
    name: "Phase 10",
    maker: "Mattel",
    price: 9.32,
    playersNeeded: 2
}

const applesToApples = {
    id: 8,
    name: "Apples to Apples",
    maker: "Mattel",
    price: 23.97,
    playersNeeded: 4
}

const addCardToIntventory = (cardObject) => {
    const lastIndex = cards.length - 1
    const currentLastCard = cards[lastIndex]
    const maxId = currentLastCard.id
    const idForNewCard = maxId + 1

    cardObject.id = idForNewCard
    cards.push(cardObject)
}


addCardToIntventory(phaseTen)
addCardToIntventory(applesToApples)
//addCardToIntventory(applesToApples, phaseTen)

// for (const card of cards) {
//     console.log(`${card.maker} created ${card.name}. It cost $${card.price} per deck. Each desk has ${card.deckSize} cards. You need at least ${card.playersNeeded} players to play a game.`)
// }

//console.log(cards)



const myCardGame = 7

for (const card of cards) {
    if (card.id === myCardGame) {
        card.playersNeeded = card.playersNeeded + 3
        console.log(`When playing ${card.name}, it's more fun to have at least ${card.playersNeeded} players in the game.`)
    }
}