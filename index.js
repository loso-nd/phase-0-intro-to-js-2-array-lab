// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = function(){
    cats.push('Ralph')
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

const destructivelyRemoveLastCat =() => {
    cats.pop()
}

const destructivelyRemoveFirstCat = () => {
    cats.shift()
}

const appendCat = function(){
    const array = [...cats, "Broom"];
   return array
}

const prependCat = function(){
    const array = ["Arnold", ...cats];
   return array
}

const removeLastCat = function(){
   return  cats.slice(0,2)

}

const removeFirstCat = function(){
    return  cats.slice(1,3)
 
 }