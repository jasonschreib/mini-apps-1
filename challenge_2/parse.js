//parseBody function that will take in the JSON data from req.body and send it back as a response that is in CSV style
// var parseBody = (jsonObject) => {
//   //set string var for the csv
//   var csvString = '';

// //take care of case where req.body.inputText is not an object
// if (typeof jsonObject !== Object) {
//   csvString += jsonObject;
// } else {
//   //iterate over the keys and set them as the top row of the csv
//   for (var [key, value] of Object.entries(jsonObject)) {
//     //if the key's value is an array, then don't add it to the list
//     if (Array.isArray(value)) {
//       continue;
//     } else {
//       csvString += `${key} `;
//     }
//   }
//   //create new line
//   csvString += "\n";
//   //create recursive function for iterating through nested objects
//   var iterateOverNested = function(currObj) {
//     //set variable for the current object
//     var current = currObj;
//     //then iterate over the object and add each value of each property to the next row
//     for (var [key, value] of Object.entries(current)) {
//         //if the key's value is an array, then don't add it to the list
//         if (Array.isArray(value)) {
//           continue;
//         } else {
//         //add the string val to the result string
//         csvString +=`${value} `;
//         }
//     }
//     //create new line
//     csvString += "\n";
//     //if the current object's children property is empty
//     if (current.children.length === 0) {
//       //then just return
//       return;
//       //otherwise iterate over each object by going into children arrays
//     } else {
//       for (var i = 0; i < current.children.length; i++) {
//         //and recurse on each child
//         return iterateOverNested(current.children[i]);
//       }
//     }
//   }

//   //invoke the function on the original object
//   iterateOverNested(jsonObject);
//   }

//   return csvString.split(" ").join(",");
// };


//O: csv formatted string
//I: JSON text object
//C: input must be a string
//E: if the input string is empty string, then just return an empty string

//Justification = GOAL: To successfully convert a JSON object into CSV format

//Explanation: If the input object is empty, then return an empty string. Otherwise, iterate over the top level item in the object and add the properties to the first line of the csv string. Then iterate over once more to add the values(from key/value pairs) to the csv string. Iterate over the current level's children and add their values as new lines to the csv string. Return this csv string.
var parseBody = (jsonObject) => {
  //edge case: if the input object is empty string,
  if (jsonObject === '') {
    //then return an empty string
    return '';
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
  //iterate over the root object and add the values as new keys to the csv report

  ///set current obj variable

  //inner recursive function to add keys:
  var addKeys = (currentObj, csv) => {
    //if the currentObj has no children,
      //then just add the keys to the csv - iterate over the current object and add each value that is not an array
      //and return
    //if the current object has children
      //add the keys of currentObj to the csv - iterate over the current object's keys and add each value that is not an array
      //iterate over the children and
        //call the addKeys function on current obj
        //return
  }

//call the addKeys function with the root object


//iterate over the array of arrays
  //join each array and push this string to the csvString followed by a new line

//return the csv string
}

//create function to add values of each object to csv string
//O: should return the updated csv string
//I: a string object to add keys from
//C: input must be a string object??
//E: if the input is an empty object, then just add a new line to csv that is empty string

//Justification = GOAL: To add an additional line to the csv report with the inputted object's values

