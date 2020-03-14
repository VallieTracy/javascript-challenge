// from data.js
var tableData = data;
var tbody = d3.select('tbody');

renderTable(tableData);
d3.selectAll('#filter-btn').on('click', handleClick);

// ==================================================
function renderTable(data) {
    tbody.html('');

    data.forEach(dataRow => {
        var row = tbody.append('tr');

        Object.values(dataRow).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

function handleClick() {
    var filteredData = tableData;
    var date = d3.select('#datetime').property('value');
    if (date) { filteredData = filteredData.filter(row => row.date === date) };
    d3.select('#datetime').property('value',"");
    renderTable(filteredData);
}

