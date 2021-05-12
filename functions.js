const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element, index, array) {
    result.push(iterator(element));
  });

  return result;
};

const filter = function (collection, callback) {
  let newNumsArray = [];

  // for (let i = 0; i < collection.length; i++) {
  //   if(callback(collection[i]) === true) {
  //     newNumsArray.push(collection[i]);
  //   }
  // }

  // try to refactor above, using each() function that we created

  each(collection, function(value) {
    if(callback(value)) {
      newNumsArray.push(value);
    }
  })

  return newNumsArray;
};



//reject([1, 2, 3, 4, 5, 6], isEven);
const reject = function (collection, callbackTest) {
  let newNumsArray = [];

  // for (let i = 0; i < collection.length; i++) {
  //   if (callbackTest(collection[i]) === false) {
  //     newNumsArray.push(collection[i]);
  //   }
  // }

  // refactor above using each()

  each(collection, function(value) {
    if(callbackTest(value)!= true) {
      newNumsArray.push(value);
    }
  })

  return newNumsArray;
};



const uniq = function (array) {
  //declare new array that will not include repeat numbers
  let uniqArray = [];
  //loop through the array, only push into uniqArray if uniqArray does NOT already include the integer
  for (let i =0; i < array.length; i++) {
    if (!uniqArray.includes(array[i])) {
      uniqArray.push(array[i])
    }
  }
  return uniqArray;
};


// solves 3/4 test but does not account for
// "should not invoke the iterator on the first element when using it as an accumulator"
const reduce = function (collection, iterator, accumulator) {
  let count = 0;
  if (accumulator === undefined) {
    let count = collection[0];
  } else {
    let count = accumulator;
  }
  for (let i = 0; i < collection.length; i++) {
    count = iterator(count, collection[i]);
  }

  return count;
};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
