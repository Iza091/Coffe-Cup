class Coffee {
    constructor() {
      this.empty = true;
    }
  
    drink() {
      if (!this.empty) {
        document.getElementById('coffeeLiquid').style.display = 'none';
        document.getElementById('coffeeStatus').textContent = "You have taken a sip of coffee. Enjoy!";
      } else {
        document.getElementById('coffeeStatus').textContent = "Your coffee cup is empty. Please refill it.";
      }
    }
  
    refill() {
      this.empty = false;
      document.getElementById('coffeeLiquid').style.display = 'block';
      document.getElementById('coffeeStatus').textContent = "Your coffee cup has been refilled. Enjoy!";
    }
  }
  
  const coffee = new Coffee();
  
  document.getElementById('drinkButton').addEventListener('click', function() {
    if (coffee.empty) {
      coffee.refill();
    } else {
      coffee.drink();
    }
  });
  
  document.getElementById('refillButton').addEventListener('click', function() {
    coffee.refill();
  });
  