//O: csv formatted string
//I: JSON text object
//C: input must be a string
//E: if the input string is empty string, then just return an empty string

//Justification = GOAL: To successfully convert a JSON object into CSV format

//Explanation: If the input object is empty, then return an empty string. Otherwise, iterate over the top level item in the object and add the properties to the first line of the csv string. Then iterate over once more to add the values(from key/value pairs) to the csv string. Iterate over the current level's children and add their values as new lines to the csv string. Return this csv string.
var parseBody = (jsonObject) => {
  //edge case: if the input object is empty string,
  if (jsonObject === '') {
    //then return an empty []
    return [];
  }
  //create var for csv array of arrays
  var csvArray = [];
  //create a temp var as an array
  var tempArray = [];
  //iterate over the root of the json file and add the properties to the first line of the csv
  for (var prop in jsonObject) {
    //once we hit the children prop,
    if (prop === 'children') {
      //then break
      break;
    }
    //otherwise, add these props to the temp array
    tempArray.push(prop);
  }
  //push this array to the csvArray
  csvArray.push(tempArray);
  //inner recursive function to add keys:
  var addKeys = (currentObj, array) => {
    //if the currentObj has no children,
    console.log('children', currentObj.children);
    if (currentObj.children.length === 0) {
      //create temp array
      var temporaryArray = [];
      //then just push the keys to a new array - iterate over the current object's keys and add each value(except for the children prop)
      for (var prop in currentObj) {
        //once we hit the children prop,
        if (prop === 'children') {
          //then skip it
          continue;
        }
        //otherwise, add these props to the temp array
        temporaryArray.push(currentObj[prop]);
      }
      //push this array to the csvArray
      csvArray.push(temporaryArray);
      //and return
      return;
      //if the current object has children
    } else {
      //create temp array
      var temporary2Array = [];
      //add the keys of currentObj to a new array - iterate over the current object's keys and add each value(except for the children prop)
      for (var prop in currentObj) {
        //once we hit the children prop,
        if (prop === 'children') {
          //then skip it
          continue;
        }
        //otherwise, add these props to the temp array
        temporary2Array.push(currentObj[prop]);
      }
      //push this array to the csvArray
      csvArray.push(temporary2Array);
      //iterate over the children and
      for (var i = 0; i < currentObj.children.length; i++) {
        //return - call the addKeys function on current obj
        addKeys(currentObj.children[i], csvArray);
      }
    }
  }
  //call the addKeys function with the root object
  addKeys(jsonObject, csvArray);

  return csvArray;
}


var convertToCSVFormat = (array) => {
  //create resultString var
  var resultString = '';
  //iterate over the array of arrays
  for (var i = 0; i < array.length; i++) {
    //join each array and push this string to the csvString followed by a new line
    var tempString = array[i].join(',');
    resultString = resultString + tempString;
    resultString = resultString + '\n';
  }
  //return the result string
  return resultString;
}

module.exports = {
  parseBody,
  convertToCSVFormat
}


// var object = {
//   "firstName": "Joshie",
//   "lastName": "Wyattson",
//   "county": "San Mateo",
//   "city": "San Mateo",
//   "role": "Broker",
//   "sales": 1000000,
//   "children": [
//   {
//     "firstName": "Beth Jr.",
//     "lastName": "Johnson",
//     "county": "San Mateo",
//     "city": "Pacifica",
//     "role": "Manager",
//     "sales": 2900000,
//     "children": [
//       {
//         "firstName": "Smitty",
//         "lastName": "Won",
//         "county": "San Mateo",
//         "city": "Redwood City",
//         "role": "Sales Person",
//         "sales": 4800000,
//         "children": []
//       },
//       {
//         "firstName": "Allen",
//         "lastName": "Price",
//         "county": "San Mateo",
//         "city": "Burlingame",
//         "role": "Sales Person",
//         "sales": 2500000,
//         "children": []
//       }
//     ]
//   },
//   {
//     "firstName": "Beth",
//     "lastName": "Johnson",
//     "county": "San Francisco",
//     "city": "San Francisco",
//     "role": "Broker/Sales Person",
//     "sales": 7500000,
//     "children": []
//   }
// ]
// };

// var object = {
//   "firstName": "Smitty",
//     "lastName": "Won",
//       "county": "San Mateo",
//         "city": "Redwood City",
//           "role": "Sales Person",
//             "sales": 4800000,
//               "children": []
// }


// var parsed = parseBody(object);

// var string = convertToCSVFormat(parsed);

// console.log(string);


