const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  get appetizers() {
    return;
  },
  get mains() {},
  get dessert() {},
  set appetizers(app) {},
  set mains(main) {},
  set dessert(dessert) {},
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomNum = Math.floor(dishes.length * Math.random());
    return dishes[randomNum];
  },
  generateRadomMeal() {
    appetizer = this.getRandomDishFromCourse("appetizers");
    main = this.getRandomDishFromCourse("mains");
    dessert = this.getRandomDishFromCourse("desserts");
    totalCost = appetizer.price + main.price + dessert.price;
    return `You ordered a ${appetizer.name}, ${main.name}, and the ${dessert.name}. Your total is ${totalCost} dollars`
  },
};

menu.addDishToCourse("appetizers", "salad", 5.0);
menu.addDishToCourse("appetizers", "bread", 2.0);
menu.addDishToCourse("appetizers", "slider", 5.5);

menu.addDishToCourse("mains", "Burger", 10.0);
menu.addDishToCourse("mains", "Steak", 15.5);
menu.addDishToCourse("mains", "Salmon", 18.0);

menu.addDishToCourse("desserts", "cookie", 5.0);
menu.addDishToCourse("desserts", "cake", 8.0);
menu.addDishToCourse("desserts", "ice cream", 8.0);

meal = menu.generateRadomMeal()
console.log(meal)