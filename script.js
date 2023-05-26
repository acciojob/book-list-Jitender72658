//your JS code here. If required.
const form = document.getElementById('form-group');
const tableBody = document.querySelector('table table-striped');

// Event listener for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get form input values
  const name = document.getElementById('title').value;
  const email = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;

  // Create new table row
  const newRow = document.createElement('tr');

  // Create table data cells and set their content
  const titleCell = document.createElement('td');
  titleCell.textContent = title;

  const authorCell = document.createElement('td');
  authorCell.textContent = author;

 const isbnCell = document.createElement('td');
  isbnCell.textContent = isbn;

  // Append cells to the new row
  newRow.appendChild(titleCell);
  newRow.appendChild(authorCell);
  newRow.appendChild(isbnCell);

  // Append the new row to the table body
  tableBody.appendChild(newRow);

  // Clear form inputs
  form.reset();
});