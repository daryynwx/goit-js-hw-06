class Storage {
    #items; // приватна властивість

    constructor(items) {
        this.#items = items; // ініціалізація приватної властивості
    }

    // Метод для отримання поточного списку товарів
    getItems() {
        return this.#items;
    }

    // Метод для додавання нового товару
    addItem(newItem) {
        this.#items.push(newItem);
    }

    // Метод для видалення товару за назвою
    removeItem(itemToRemove) {
        this.#items = this.#items.filter(item => item !== itemToRemove);
    }
}

// Код для перевірки роботи
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
