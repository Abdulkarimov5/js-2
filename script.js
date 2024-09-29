/* let styles = ["Джаз", "Блюз"]

styles.push("Rock-n-Roll")

styles[1] = "Classic"

let firstElement = styles.shift()
alert(firstElement)

styles.unshift("Reggae")
styles.unshift("Rap")

function sumInput() {
    let arr = []
    let num
    let result = 0

    do {
        num = prompt("Введите число")
        if (num && (+num || num === 0)) {
            arr.push(+num)
            result += +num
        }
    } while(num && (+num || +num === 0))

    return result
}

alert(sumInput()) */
// Это не относится к домашке

/* const auto = {
    brand: "BMW",
    model: "X5",
    year: 2021,
    avgSpeed: 80,

    toString(){
        return `
        brand: ${this.brand}
        model: ${this.model}
        year: ${this.year}
        avgSpeed: ${this.avgSpeed}
        `
    },

    calculateDriveTime(distance) {
        const travelTime = distance / this.avgSpeed;
        const breaks = Math.floor(travelTime / 4);
        const totalTime = travelTime + breaks;
        return totalTime;
    }
}

const distance = +prompt("Введите расстояние в километрах:");
const time = auto.calculateDriveTime(distance);
alert(`Время в пути: ${time} часов`);
 */

let list = [
    {name: "Картошка", count: 3, bought: false, price: 50},
    {name: "Морковка", count: 5, bought: true, price: 40},
    {name: "Арбуз", count: 1, bought: true, price: 100},
]

function dispalyList () {
    return list.sort((item1) => {
        return item1.bought ? 1 : -1 
    })
}


function addToList(name, price) {
    for (item of list) {
        if (item.name === name) {
            item.count += 1
            return list
        }
    }
    list.push({name, count: 1, bought: false, price})
    return list
}

alert(addToList)

function buyProduct(name) {
    for (item of list) {
        if(item.name === name) {
            item.bought = true
        }
    }
    return list
}

