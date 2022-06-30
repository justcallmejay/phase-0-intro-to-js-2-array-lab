let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    return cats.push('Ralph')
}

////

function destructivelyPrependCat(){
    return cats.unshift('Bob')
}

////

function destructivelyRemoveLastCat(){
    return cats.pop()
}

////

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

////

function appendCat() {
    const catCopy = [...cats, "Broom"]
    return catCopy
}

////

function prependCat() {
    const catCopy = ["Arnold", ...cats]
    return catCopy
}

////

function removeLastCat() {
    const copyOfCats = cats.slice(0, 2)
    return copyOfCats
}

////

function removeFirstCat() {
    const copyOfCats = cats.slice(1, 3)
    return copyOfCats
}
