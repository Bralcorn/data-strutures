// Question 6

class CustomerInfo {
  constructor(infoArray) {
    if(infoArray === undefined) {
      this.customers = [];
    }
    else {
      this.customers = infoArray;
    }
  }

  hashingFunction(number) {
    var total = 0;
    if (number.length == 0) return total;
    for (i = 0; i < number.length; i++) {
        char = number.charCodeAt(i);
        total = ((total<<3)-total)+char;
    }
    return total;
  }

  findIndex(number) {
    var hashCode = hashingFunction(number);
    var index = hashCode%1000;
    return index;
  }

  lookUpCustomer(number) {
    var index = findIndex(number);
    for(var i=0; i < this.customers[index].length; i++) {
      if(this.customers[index][i][2] === number) {
        return this.customers[index][i];
      }
    }
    return "Customer not found";
  }

  addCustomer(firstName, lastName, number, address) {
    var index = findIndex(number);
    if(this.customers[index] === undefined) {
      this.customers[index] = [];
    }
    this.customers[index].push([firstName, lastName, number, address]);
  }

  updateCustomer(firstName, lastName, number, address) {
    var index = findIndex(number);
    var modifiedBucket = this.customers[index].map(customer => {
      if(customer[2] === number) {
        customer = [firstName, lastName, number, address];
      }
      return customer;
    });
    this.customers[index] === modifiedBucket;
  }

  removeCustomer(number) {
    var index = findIndex(number);
    var modifiedBucket = this.customers[index].filter(customer => customer[2] !== number);
    this.customers[index] === modifiedBucket;
  }
}

//----------------------------------------------------------
// Question 7
class InventoryInfo {
  constructor(savedArray) {
    if(savedArray === undefined) {
      this.items = [];
    }
    else {
      this.items = inventoryArray;
    }
  }

  hashingFunction(item) {
    var total = 0;
    if (item.length == 0) return total;
    for (i = 0; i < item.length; i++) {
        char = item.charCodeAt(i);
        total = ((total<<3)-total)+char;
    }
    return total;
  }

  findIndex(item){
    var hashCode = hashingFunction(item);
    var index = hashCode%100;
    return index;
  }

  lookUpItem(item) {
    var index = findIndex(item);
    for(var i=0; i < this.items[index].length; i++) {
      if(this.items[index][i][0] === item) {
        return this.items[index][i];
      }
    }
    return "Item not found";
  }

  addItem(item, amount) {
    var index = findIndex(item);
    if(this.items[index] === undefined) {
      this.items[index] = [];
    }
    this.items[index].push([item, amount]);
  }

  updateItem(item, amount) {
    var index = findIndex(item);
    var modifiedBucket = this.items[index].map(itemA => {
      if(itemA[0] === item) {
        itemA = [item, amount];
      }
      return itemA;
    });
    this.items[index] === modifiedBucket;
  }

  removeItem(item) {
    var index = findIndex(item);
    var modifiedBucket = this.items[index].filter(itemA => itemA[0] !== item);
    this.items[index] === modifiedBucket;
  }
}

//----------------------------------------------------------
// Question 8
class newspaperInfo {
  constructor(savedArray) {
    if(savedArray === undefined) {
      this.items = [];
    }
    else {
      this.items = inventoryArray;
    }
  }

  hashingFunction(publisher, date) {
    var total = 0;
    var add = publisher + date;
    if (add.length == 0) return total;
    for (i = 0; i < add.length; i++) {
        char = add.charCodeAt(i);
        total = ((total<<3)-total)+char;
    }
    return total;
  }

  findIndex(publisher, date){
    var hashCode = hashingFunction(publisher, date);
    var index = hashCode%10000;
    return index;
  }

  lookUpItem(publisher, date) {
    var index = findIndex(publisher, date);
    for(var i=0; i < this.items[index].length; i++) {
      if(this.items[index][i][0] === publisher && this.items[index][i][1] === date) {
        return this.items[index][i];
      }
    }
    return "Item not found";
  }

  addItem(publisher, date, newspaper) {
    var index = findIndex(publisher, date);
    if(this.items[index] === undefined) {
      this.items[index] = [];
    }
    this.items[index].push([publisher, date, newspaper]);
  }

  updateItem(publisher, date, newspaper) {
    var index = findIndex(publisher, date);
    var modifiedBucket = this.items[index].map(item => {
      if(item[0] === publisher && item[1] === date) {
        item = [publisher, date, newspaper];
      }
      return item;
    });
    this.items[index] === modifiedBucket;
  }

  removeItem(publisher, date) {
    var index = findIndex(publisher, date);
    var modifiedBucket = this.items[index].filter(item => item[0] !== publisher && item[1] !== date);
    this.items[index] === modifiedBucket;
  }
}