class MobilShop {
  constructor() {
    this.mobiles = [];
  }

  addMobile(mobile) {
    this.mobiles.push(mobile);
  }

  removeMobile(mobile) {
    this.mobiles.filter((mob) => mob.name !== mobile);
  }

  listAllMobiles() {
    this.mobiles.forEach(function (mob, idx) {
      console.log(
        `${idx + 1} -> ${mob.brand} - ${mob.model} - ${mob.price} - ${
          mob.color
        }`
      );
    });
  }
}

class Mobile {
  constructor(brand, model, price, color) {
    this.id = Math.floor(Math.random * 1000);
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.sims = [];
  }

  getMobileInfo() {
    console.log(
      `${this.brand} - ${this.model} - ${this.price} - ${this.color} - ${this.sims[0]?.brand} - ${this.sims[1]?.brand} `
    );
  }

  insertSim(sim) {
    if (this.sims.length === 2) {
      console.log("Sorry You already have 2 sims installed");
      return;
    }
    this.sims.push(sim);
  }
}

class Sim {
  constructor(brand, balance) {
    this.brand = brand;
    this.balance = balance;
  }

  addBalance(balance) {
    if (balance < 0) {
      console.log("Balance should be grater than zero");
      return;
    }
    this.balance += balance;
  }
}

let myMobileShop = new MobilShop();
let myMobile = new Mobile("Samsung", "Galaxy S3", 120000, "black");
let mySim = new Sim("Airtel", "149");

myMobile.insertSim(mySim);
myMobileShop.addMobile(myMobile);
myMobileShop.listAllMobiles();
myMobile.getMobileInfo();
