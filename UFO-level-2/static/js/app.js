// From data.js
var ufoData = data;
var tbody = d3.select("tbody");

function renderTable(arrayofObjects) {
    arrayofObjects.forEach(objectRow => {
        var row = tbody.append("tr");

        Object.values(objectRow).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

renderTable(ufoData);