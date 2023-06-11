// scripts.js
const data = {
    lists: [
        ['first', [15, 11, 13, 7, 5]],
        ['second', [2, 6, 8, 4, 14, 12, 10]],
        ['third', [9, 3, 1]],
    ]
}

// Only edit below
const result = []

const extractBiggest = () => {
    let biggest = -Infinity
    let biggestIndex = -1
    for (let i = 0; i < data.lists.length; i++) {
        const list = data.lists[i][1]
        if (list.length === 0) {
            continue
        }
        const lastElement = list[list.length -1]
        if (lastElement > biggest) {
            biggest = lastElement
            biggestIndex = i
        }
    }
   
    if (biggestIndex === -1) {
        return null
    }
    const list = data.lists[biggestIndex][1]
    list.pop()
    return biggest
}



for (let i = 0; i < 15; i++) {
    result.push(extractBiggest())
}




// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
