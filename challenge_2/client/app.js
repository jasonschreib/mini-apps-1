//global counter variable
var counter = 1;


//Model
//if the submit button is clicked, then trigger the post request
var post = function (e) {
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
  //send ajax request to server at /convertToCSV
  $.ajax({
    url: '/convertToCSV',
    type: 'post',
    data: formData,
    processData: false,
    contentType: false,
    //on success - download functionality
    success: (response) => {
      console.log('response', response);
      //we get the html back and need to append it
      $('.csvData').append(response);
      //create a download button
      var downloadButton = $("<button id='downloadButton'onClick=clickedDownload(response) >Download</button>")
      $('csvData').append(downloadButton);
    }
  });
};

//if the download button is clicked, then trigger this function to write the file to hard drive
var clickedDownload = function (response, e) {
  //prevent the page from reloading
  e.preventDefault();
  //write the file to the hard drive
    fs.writeFile(`csvFile${counter}.csv`, response, function(err) {
      //error check
      if (err) {
        throw err;
      }
      console.log('Added new file')
    });
    //increment the counter
};


///View




//Controller


//Create event listener for the submit button
document.getElementById('submitButton').addEventListener("click", post);
