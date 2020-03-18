// From data.js
var ufoData = data;
//var filteredData = data;
var tbody = d3.select("tbody");



var filters = {};

function renderTable(arrayofObjects) {
  // Empty table before iterating thru 'arrayofObjects'
  tbody.html("");
    
    // Iterate thru each object, create variable 'row' which will add <tr> tags to tbody for each object
    arrayofObjects.forEach(objectData => {
        var row = tbody.append("tr");
        
        // Loop thru Object values, create variable 'cell' which will add empty <td> tags for each for every <tr> tag created above
        Object.values(objectData).forEach(value => {
            var cell = row.append("td");
            // Place values inside of those cells
            cell.text(value);
          });
    });
}

// Create table using function 'renderTable'
renderTable(ufoData);

var button = d3.select("input"); 
button.on("change", handleChange);   

function handleChange() {
  var filteredData = ufoData;
  //"input" might have to be different in level 2
  var userInput = d3.select("input");
  var userDate = userInput.property("value");
  console.log(`USER DATE: ${userDate}`);
  if (userDate) {

    filteredData = ufoData.filter(objectRow =>
      objectRow.datetime === userDate);
    console.log(filteredData);
  }
  //line below is outside the 'if' statement so that if the userDate
  //doesn't exist, the table still renders
  renderTable(filteredDates);
  d3.select("input").property("value", "");
}






  

  




//   var userInput = d3.select("input");
//   var userDate = userInput.property("value");
//   console.log(`USER DATE: ${userDate}`);
//   if (userDate) {

//     filteredData = filteredData.filter(objectRow =>
//       objectRow[key] === value);
//     console.log(filteredDates);
//   }
//   //line below is outside the 'if' statement so that if the userDate
//   //doesn't exist, the table still renders
//   renderTable(filteredDates);
//   d3.select("input").property("value", "");
// }

















// function filterTable() {
//   let filteredData = ufoData;

//   console.log("Contents of filters():");
//   console.log(filters);

//   Object.entries(filters).forEach(([key, value]) => {
//     filteredData = filteredData.filter(row => row[key] === value);
//   });
  
//   renderTable(filteredData);  
  

// }

// renderTable(ufoData); 



// var input = d3.selectAll('input');
// input.on('change', handleChange);


// function handleChange() {
//   var key = d3.select(this).property('id');
//   var value = d3.select(this).property('value');

//   console.log(key,': ',value);

//   var userInput = d3.select("#Date");
//   var userDate = userInput.property("value");
//   console.log(`USER DATE: ${userDate}`);

//   if (userDate) {
//     filteredData = filteredData.filter(objectRow => objectRow[key] === value);
//     console.log(filteredData);
//   }


//--------------------------------------------------------------------

  //"input" might have to be different in level 2
//   var userInput = d3.select("input");
//   var userDate = userInput.property("value");
//   console.log(`USER DATE: ${userDate}`);
//   if (userDate) {

//     filteredData = filteredData.filter(objectRow =>
//       objectRow[key] === value);
//     console.log(filteredDates);
//   }
//   //line below is outside the 'if' statement so that if the userDate
//   //doesn't exist, the table still renders
//   renderTable(filteredDates);
//   d3.select("input").property("value", "");
// }

