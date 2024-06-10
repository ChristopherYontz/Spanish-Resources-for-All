// Translate border-left-width to borderLeftWidth

let str = 'my-short-string';

camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase + word.slice(1))
        .join('');
}

camelize(str);

// Filter range
let arrayOfNums = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return arr.filter(num => (num >= a && num <= b));
}

let filtered = filterRange(arrayOfNums, 1, 4)

console.log(filtered);

// Filter range "in place"
function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if(a >= val || val >= b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4);

alert(array);

// Sort in decreasing order
let arr = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

        // OR

arr.sort((a, b) => b - a);

arr.sort(compareNumeric);

console.log(arr);



// Copy and sort array
let arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
    let sorted = arr.map(item => item);
    sorted.sort((a, b) => a.localeCompare(b))
    // console.log(sorted);
    // console.log(arr)
}

        //OR

function copySorted(arr) {
    return arr.slice().sort();
  }

copySorted(arr);



// Create and extendable calculator
function calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }



// Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);



// Map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))



// Sort users by age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}



// Shuffle an array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
}



// Get average age
function getAverageAge(users) {
    let totalAge = 0;
    users.forEach((item) => totalAge += item.age);
    let averageAge = totalAge / users.length;
    return averageAge;
}

        // OR

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log(getAverageAge(arr));



// Filter unique array members
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}



// Create keyed object from array
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

  let usersById = groupById(users);
  

//   ELOQUENT JAVASCRIPT OBJECT TASKS
// The Sum of a Range
function range(start, end) {
    const result = [];
    for(let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

        // OR

function range(start, end, step) {
    const result = [];
    for(let i = start; i <= end; i += step) { // += step defaults to 1 if step is not provided
        result.push(i);
    }
    return result;
}

function sum(arrayOfNums) {
    let sum = 0;
    arrayOfNums.forEach(num => sum += num);
    return sum;
}
        // OR
function sum(arrayOfNums) {
    arrayOfNums.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}



// Reversing an Array
function reverseArray(array) {
    let reversedArray = [];
    for(i = array.length; i >= 0; i--) {
        reversedArray.push();
    }
    return reversedArray;
}

let reverseArrayInPlace = (array) => array.slice(0);



// A List
function arrayToList(array) {
    let list = {};
    for(i = array.length; i >= 0; i--) {
        rray.push();
    }
}

function listToArray(array) {

}



// Deep Comparison
function deepEqual(value1, value2) {
    if(value1 == value2) {
        return true;
    }
}