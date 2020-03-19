// Everything for app.js in ufo folder 1, all working. Geronimo
// From data.js
var ufoData = data;
var tbody = d3.select("tbody");

// Step 1: Loop through `data` and log each ufo sighting object to the console
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each ufo sighting object
// // Note: this won't add cells or text, just appending the <tr> table tags to the table body
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to log each ufo sighting object to the console
// Still nothing will appear in the table on the live server just yet
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Now we'll create a variable called 'cell' that will append the <td> tags for the table rows
// Table will still be empty (but striped rows); we haven't added the actual data yet
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with ufo sightings values (datetime, city, state, country, shape, durationMinutes, comments)
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// Now make 'Step 5' code into a function called 'renderTable'
function renderTable(arrayofObjects) {
  // Because we'll be appending the table data <td> when filtering later, start the function by emptying the table
  tbody.html("");
    
    // For each object in the given parameter, the function will loop thru each object & create a new & empty <tr> table tag
    arrayofObjects.forEach(object => {
        var row = tbody.append("tr");
        
        // For each object in the data, we'll pull out the value from each key:value pair, and place it into a newly created 'cell'
        Object.values(object).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

renderTable(ufoData);

// Set a reference to the 'Filter Button' in the index.html
var button = d3.select("#filter-btn"); 
button.on("click", handleClick); 
 

// Create a function that tells the table what to do when the 'Filter Button' is clicked
function handleClick() {
  var filteredData = ufoData;
  console.log("The button was clicked.");
  
  // Set a reference to the input element on the page & pull out the input value
  var userInput = d3.select("input");
  var userDate = userInput.property("value");
  
  console.log(`USER DATE: ${userDate}`);
  
  // If the user's input is in the table, then set 'filteredData' to the filtered ufo Data
  if (userDate) {
    filteredData = ufoData.filter(object =>
      object.datetime === userDate);
    console.log(filteredData);
    
    // Build new table based on user input
    renderTable(filteredData);
    // Put the original placeholder text back in the input field
    d3.select("input").property("value", "");
  }
  
  // Outside of the 'if' statement, so that the table renders regardless
  // renderTable(filteredData);
  // d3.select("input").property("value", "");
}
// *********************** END OF WORKING GERONIMO CODE *************************************************************





// // from data.js
// var ufoData = data;
// var tbody = d3.select('tbody');


// console.log(ufoData);


// // Step 1: Loop Through `data` and console.log each ufo sighting report object
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
// });


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


// 88888888888888888888888888888888888888888888888888888888888888888888888888888
// var button = d3.select("#filter-btn");
// var inputField = d3.select("#datetime");
// 88888888888888888888888888888888888888888888888888888888888888888888888888888
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

// 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// button.on("click", handleClick);

// function handleClick() {
//   var filteredDates = tableData;
//   var userInput = d3.select(".form-control");
//   var userDate = userInput.property("value");
//   console.log(`USER DATE: ${userDate}`);
//   var filteredDates = tableData.filter(objectRow =>
//     objectRow.datetime === userDate);
//   console.log(filteredDates);
//   renderTable(filteredDates);  
// }
// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888









// inputField.on("change", function() {
//     var newDate = d3.event.target.value;
//     console.log(`New Date Input: ${newDate}`);

// });

// *****************************************************

//TRYING TO MAKE ABOVE CODE LOOK LIKE GERONIMO'S
//******************************************************* */
// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// function renderTable(arrayOfObjects) {
//   arrayOfObjects.forEach(objectRow => {
//     console.log(arrayOfObjects);
//     var row = tbody.append("tr");

//     Object.values(objectRow).forEach(value => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
// }

// renderTable(tableData);
// 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888


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



// Everything for app.js in ufo folder 1, all working. Geronimo
// From data.js
// var ufoData = data;
// var tbody = d3.select("tbody");

// function renderTable(arrayofObjects) {
//   // Empty table
//   tbody.html("");
    
//     arrayofObjects.forEach(objectRow => {
//         var row = tbody.append("tr");

//         Object.values(objectRow).forEach(value => {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// }

// renderTable(ufoData);

// var button = d3.select("#filter-btn"); 
// button.on("click", handleClick);   

// function handleClick() {
//   var filteredDates = ufoData;
//   //"input" might have to be different in level 2
//   var userInput = d3.select("input");
//   var userDate = userInput.property("value");
//   console.log(`USER DATE: ${userDate}`);
//   if (userDate) {

//     filteredDates = ufoData.filter(objectRow =>
//       objectRow.datetime === userDate);
//     console.log(filteredDates);
//   }
//   //line below is outside the 'if' statement so that if the userDate
//   //doesn't exist, the table still renders
//   renderTable(filteredDates);
//   d3.select("input").property("value", "");
// }

























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





