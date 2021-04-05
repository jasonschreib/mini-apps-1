const _ = require('underscore');

//create function to create html template
var templateOnData = (inputData) => {
  var newObj = {data: inputData};
  var html = '';
  //add the template for the inputted data to html var
  console.log('before append');
  html += template(newObj);
  console.log('after append');
  //append to the body
  document.getElementsByClassName('.csvData').append(html);
};

//create html template for the response
var template = _.template(
  '<h1>CSV Record Generator</h1> <h2>Insert your JSON data into the form below:</h2> <!--Create div with form and submit button--> <div class="form"> <form name="myForm" id="myForm"> <label for="myfile">Select a file:</label> <input type="file" id="myfile" name="myfile"> <div class="form"> <input id="submitButton" type="submit" value="Submit!"> </div> </form> </div> <div class="csvData"> <div><%= data %></div> </div>'
);

module.exports = {
  templateOnData
}