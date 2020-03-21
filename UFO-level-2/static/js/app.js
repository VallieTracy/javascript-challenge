// From data.js
var ufoData = data;
var tbody = d3.select("tbody");

// A function that will render the data into a table
function renderTable(arrayOfObjects) {
  
  // Empty table before iterating thru 'arrayofObjects'
  tbody.html("");
    
  // Iterate thru each object, create variable 'row' which will add <tr> tags to tbody for each object
    arrayOfObjects.forEach(objectRow => {
        var row = tbody.append("tr");
        
        // Loop thru Object values, create variable 'cell' which will add empty <td> tags for every <tr> tag created above
        Object.values(objectRow).forEach(value => {
            var cell = row.append("td");
            
            // Place values inside of those cells
            cell.text(value);
          });
    });
}

renderTable(ufoData);

var filter_criteria = {};

var button = d3.select("#filter-btn");
button.on("click", handleClick);

function handleClick() {
  filter_criteria = {};
  var filteredData = ufoData;
  //console.log("Button was clicked.");

  var dateInput = d3.select("#datetime");
  var dateData = dateInput.property("value");
  var dateID = dateInput.attr("id");

  if (dateData != "") {
    filter_criteria[dateID] = dateData;
  }
  
  var cityInput = d3.select("#city");
  var cityData = cityInput.property("value");
  var cityID = cityInput.attr("id");
  
  if (cityData != "") {
    filter_criteria[cityID] = cityData;
  }

  var stateInput = d3.select("#state");
  var stateData = stateInput.property("value");
  var stateID = stateInput.attr("id");
  
  if (stateData != "") {
    filter_criteria[stateID] = stateData;
  }
  
  var countryInput = d3.select("#country");
  var countryData = countryInput.property("value");
  var countryID = countryInput.attr("id");
  
  if (countryData != "") {
    filter_criteria[countryID] = countryData;
  }
  
  var shapeInput = d3.select("#shape");
  var shapeData = shapeInput.property("value");
  var shapeID = shapeInput.attr("id");
  
  if (shapeData != "") {
    filter_criteria[shapeID] = shapeData;
  }
  
  filterTable();
  
  
}


function filterTable() {
  //tbody.html("");
  let filteredData = ufoData;
  let filters = filter_criteria;
  
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
    //console.log(row[key]);
  });
  console.log(filter_criteria);
  renderTable(filteredData);
  console.log("filter ran");
}

d3.selectAll(".filter").on("click", handleClick);









// var input = d3.selectAll('input');
// // "change" is working better than "click", line below
// input.on('change', handleClick);

// // Create the handler function (which will tell the table how to behave when the button is clicked)
// function handleClick() {
//   console.log("Button clicked.");
//   let filteredData = ufoData;
  
//   var key = d3.select(this).property('id');
//   var value = d3.select(this).property('value');
//   //var input = d3.selectAll('input');
//   //console.log(input);
  
//   console.log("KEY:", key, ":","VALUE:", value); 
  
//   var userInput = d3.select("input");
//   var userData = userInput.property("value");
//   console.log(`USER DATE: ${userData}`);
  
//   if (userData) {
//     filteredData = ufoData.filter(object => object[key] === value);
//     console.log(filteredData);
//   }
//   renderTable(filteredData);
//   d3.select("input").property("value", "");
// }




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