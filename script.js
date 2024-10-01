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
alert(`Время в пути: ${time} часов`); */

/* let shoppingList = [
    { name: "Картошка", count: 5, bought: false },
    { name: "Морковка", count: 2, bought: true },
    { name: "Арбуз", count: 1, bought: false },
];

function displayShoppingList() {
    const sortedList = shoppingList.sort((a, b) => {
        return a.bought - b.bought;
    });

    sortedList.forEach(item => {
        console.log(`${item.name} - ${item.count} ${item.bought ? '(Куплено)' : '(Не куплено)'}`);
    });
}

function addPurchase(productName, count) {
    const existingProduct = shoppingList.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.count += count;
    } else {
        shoppingList.push({ name: productName, count: count, bought: false });
    }
}

function purchaseProduct(productName) {
    const product = shoppingList.find(item => item.name === productName);
    if (product) {
        product.bought = true;
    } else {
        console.log("Продукт не найден в списке.");
    }
}

console.log("Изначальный список:");
displayShoppingList();

console.log("Добавляем покупку:");
addPurchase("Яблоки", 3);
addPurchase("Кефир", 1);
displayShoppingList();

console.log("Покупаем продукт:");
purchaseProduct("Картошка")
purchaseProduct("Морковка")
purchaseProduct("Яблоки")
purchaseProduct("Кефир")
purchaseProduct("Арбуз");
displayShoppingList(); */

/* const receipt = [
    { name: "Яблоки", count: 3, price: 50 },
    { name: "Хлеб", count: 2, price: 30 },
    { name: "Молоко", count: 1, price: 60 },
    { name: "Сыр", count: 1, price: 90 },
];

function printReceipt(receipt) {
    console.log("Чек:");
    receipt.forEach(item => {
        const totalPrice = item.count * item.price;
        console.log(`${item.name}: ${item.count} шт. по ${item.price} руб. (${totalPrice} руб.)`);
    });
}

function calculateTotal(receipt) {
    return receipt.reduce((total, item) => total + item.count * item.price, 0);
}

function getMostExpensiveItem(receipt) {
    return receipt.reduce((mostExpensive, item) => {
        const totalPrice = item.count * item.price;
        return totalPrice > mostExpensive.totalPrice ? { name: item.name, totalPrice } : mostExpensive;
    }, { name: "", totalPrice: 0 });
}

function calculateAverageCost(receipt) {
    const totalCost = calculateTotal(receipt);
    const totalItems = receipt.reduce((count, item) => count + item.count, 0);
    return totalItems > 0 ? totalCost / totalItems : 0;
}

printReceipt(receipt);
console.log(`Общая сумма покупки: ${calculateTotal(receipt)} руб.`);
const mostExpensiveItem = getMostExpensiveItem(receipt);
console.log(`Самая дорогая покупка: ${mostExpensiveItem.name} на сумму ${mostExpensiveItem.totalPrice} руб.`);
console.log(`Средняя стоимость одного товара: ${calculateAverageCost(receipt).toFixed(2)} руб.`); */

/* class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.normalize();
    }

    normalize() {
        if (this.seconds >= 60) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds %= 60;
        } else if (this.seconds < 0) {
            this.minutes -= Math.ceil(Math.abs(this.seconds) / 60);
            this.seconds = (this.seconds % 60 + 60) % 60;
        }

        if (this.minutes >= 60) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes %= 60;
        } else if (this.minutes < 0) {
            this.hours -= Math.ceil(Math.abs(this.minutes) / 60);
            this.minutes = (this.minutes % 60 + 60) % 60;
        }

        if (this.hours >= 24) {
            this.hours %= 24;
        } else if (this.hours < 0) {
            this.hours = (this.hours % 24 + 24) % 24;
        }
    }

    displayTime() {
        const formattedHours = String(this.hours).padStart(2, '0');
        const formattedMinutes = String(this.minutes).padStart(2, '0');
        const formattedSeconds = String(this.seconds).padStart(2, '0');
        console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
    }

    changeSeconds(sec) {
        this.seconds += sec;
        this.normalize();
    }

    changeMinutes(min) {
        this.minutes += min;
        this.normalize();
    }

    changeHours(hr) {
        this.hours += hr;
        this.normalize();
    }
}

const time = new Time(20, 30, 45);
time.displayTime();

time.changeSeconds(30);
time.displayTime();

time.changeMinutes(10);
time.displayTime();

time.changeHours(5);
time.displayTime();

time.changeSeconds(2000);
time.displayTime(); */