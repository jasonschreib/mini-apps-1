const _ = require('underscore');

//create function to create html template
var templateOnData = (inputData) => {
  var newObj = {data: inputData};
  console.log('NEW OBJ', newObj);
  var html = '';
  //add the template for the inputted data to html var
  console.log('before append', html);
  html += template(newObj);
  console.log('after append', html);
  return html;
};

//create html template for the response
var template = _.template(
  ' <div><%= data %></div> '
);

module.exports = {
  templateOnData
}