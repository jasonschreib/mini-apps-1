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

debugger;
  //inner recursive function to add keys:
  var addKeys = (currentObj, array) => {
    //if the currentObj has no children,
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
//iterate over the array of arrays
  //join each array and push this string to the csvString followed by a new line

//return the csv string
}
