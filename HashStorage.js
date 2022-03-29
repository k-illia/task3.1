class HashStorage {
    #meaning = {}

    addValue(key,value) {
        this.#meaning[key] = value

    } //сохраняет указанное значение под указанным ключом;
    // getValue(key) {
    //
    //    return this.#meaning[key];
    //
    // }
    getValue(key) {
        if (key in this.#meaning) {
            return this.#meaning[key];
            return true;
        } else {
            return false;
        }


    }
    //  возвращает значение по указанному ключу либо undefined;

    deleteValue(key) {
        if (key in this.#meaning) {
            delete this.#meaning[key];
            return true;
        } else {
            return false;
        }

    }
    //  удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    getKeys() {
        return Object.keys(this.#meaning)
    }  // возвращает массив, состоящий из одних ключей.
}

//////
let coctailsStorage = new HashStorage()

function addCoctaile ( ) { //Добавление коктелей
    let newCoctail = {
        alcogol: null,
        ingredients:null,
        recipe:null,
    }
    let name = prompt('Введите название коктеля')
    newCoctail["alcogol"] = prompt('Алкогольный ли коктель (да/нет)')
    newCoctail['ingredients'] = prompt('Перечислите ингридиенты коктеля')
    newCoctail['recipe'] = prompt('Напишите рецепт коктеля')
    coctailsStorage.addValue(name, newCoctail)
}

//////
function getCoctaile() {
    let coctaile = coctailsStorage.getValue(prompt("О каком коктеле вы хотите узнать?"));
// alert( "Алкольный ли котель? " + coctaile['alcogol'] + ". Ингридиенты: " + coctaile['ingredients'] + ". Рецепт: " + coctaile['recipe'])
    alert( coctaile['alcogol'] + " " + coctaile['ingredients'] + " " + coctaile['recipe'])

}
//////

//////
function deliteCoctaile() { //Удаление коктелей
    alert(coctailsStorage.deleteValue(prompt('Какой коктель удалить?')));
}

//////
function getAllCoctaile () { //Вывод всех коктелей
    alert(coctailsStorage.getKeys())

}
//////

coctailsStorage.addValue('Маргарита', {
    alcogol: 'Алкогольный',
    ingredients: 'Водка Finlandia 50мл Кофейный ликер 25мл Лед в кубиках 120 г',
    recipe: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой'
})
coctailsStorage.addValue('Тест 2', {
    alcogol: 'true/false',
    ingredients: 'Водка Finlandia 50мл Кофейный ликер 25мл Лед в кубиках 120 г',
    recipe: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой'
})
