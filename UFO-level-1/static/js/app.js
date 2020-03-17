// from data.js
var tableData = data;
var tbody = d3.select('tbody');

// VALLIE CODE
// Console.log the weather data from data.js
// ****************************
console.log(tableData);
// ****************************

// // Step 1: Loop Through `data` and console.log each ufo sighting report object
// ************************************
tableData.forEach(function(ufoReport) {
  console.log(ufoReport);
});
// **************************************

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// tableData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// With this step, our objects will print out in the console looking more like we want them
// Nothing will appear in the table on the live server just yet
// This will create the <tr> hooks for the table (is hook the right word??)
// tableData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// This step is creating the variable (called 'cell') that we'll add text to, located within <td> of the table
// The first row of <td>'s.
// tableData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// **********************************************888
// tableData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });



var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");
// button.on("click", function() {
//   console.log("hey");
//   console.log(d3.event.target);
// });
// button.on("click", function() {
//     var userInput = d3.select(".form-control");
//     console.log(`USERINPUT: ${userInput}`);

//     var userDate = userInput.property("value");
  
//     console.log(`USER DATE: ${userDate}`);
//     console.log(tableData);

//     var filteredDates = tableData.filter(objectRow => objectRow.datetime === userDate);
//     console.log(filteredDates);
// });

button.on("click", handleClick);

function handleClick() {
  var filteredDates = tableData;
  var userInput = d3.select(".form-control");
  var userDate = userInput.property("value");
  console.log(`USER DATE: ${userDate}`);
  var filteredDates = tableData.filter(objectRow =>
    objectRow.datetime === userDate);
  console.log(filteredDates);
  renderTable(filteredDates);  
}









// inputField.on("change", function() {
//     var newDate = d3.event.target.value;
//     console.log(`New Date Input: ${newDate}`);

// });

// *****************************************************

//TRYING TO MAKE ABOVE CODE LOOK LIKE GERONIMO'S
//******************************************************* */
function renderTable(arrayOfObjects) {
  arrayOfObjects.forEach(objectRow => {
    console.log(arrayOfObjects);
    var row = tbody.append("tr");

    Object.values(objectRow).forEach(value => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

renderTable(tableData);



//********************************************************* */

// function handleClick() {
//     console.log("The filter button was clicked!");
//     console.log(d3.event.target);
// }

// button.on("click", handleClick);

// This will change the text that's in the date-input box
// ******************************************************
// inputField.on("change", function() {
//     var newDate = d3.event.target.value;
//     console.log(`New Date Input: ${newDate}`);

// });

// button.on("click", function() {
//     var userInput = d3.select(".form-control");

//     var userDate = userInput.property("value");
  
//     console.log(`User Date: ${userDate}`);
//     console.log(tableData);

//     var filteredDates = tableData.filter(ufoRow => ufoRow.datetime === userDate);
//     console.log(filteredDates);
// });
// ****************************************************************

// function handleClick() {
//     var filteredData = tableData;
//     var date = d3.select('#datetime').property('value');
//     if (date) { filteredData = filteredData.filter(row => row.date === date) };
//     d3.select('#datetime').property("value","");
//     renderTable(filteredData);
// };

// d3.select('#filter-btn').on("click", handleClick);

























// EVERYTHING BELOW PLUS LINES 1 - 3 IS GERONIMO
// renderTable(tableData);
// d3.selectAll('#filter-btn').on('click', handleClick);

// ==================================================
// function renderTable(data) {
//     tbody.html('');

//     data.forEach(dataRow => {
//         var row = tbody.append('tr');

//         Object.values(dataRow).forEach(val => {
//             var cell = row.append('td');
//             cell.text(val);
//         });
//     });
// };

// function handleClick() {
//     var filteredData = tableData;
//     var date = d3.select('#datetime').property('value');
//     if (date) { filteredData = filteredData.filter(row => row.date === date) };
//     d3.select('#datetime').property('value',"");
//     renderTable(filteredData);
// }





