
//Model
//if the submit button is clicked, then trigger the post request
var post = function(e) {
  //prevent the page from reloading
  e.preventDefault();
  //create formData
  var formData = new FormData();
  //get the inputted file
  var file = $('#myfile')[0].files[0];
  console.log('FILE', file);
  //append the file to the formData
  formData.append('myfile', file);
  console.log('myData', formData.get("myfile"));
  send ajax request to server at /convertToCSV
  $.ajax({
    url: '/convertToCSV',
    type: 'post',
    data: formData,
    //on success download functionality
    success: () => {}
    //if the button is clicked then write the file to the hard drive
  });
};




///View




//Controller


//Create event listener for the submit button
document.getElementById('submitButton').addEventListener("click", post);
