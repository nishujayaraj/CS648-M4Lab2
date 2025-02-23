// CREATE AN ARRAY OF EMPLOYEES
let employees = JSON.parse(localStorage.getItem('employees')) || [
    { id: 10000001, name: "Alice Johnson", extension: 1234, email: "alice@example.com", department: "Engineering" },
    { id: 10000002, name: "Bob Smith", extension: 5678, email: "bob@example.com", department: "Marketing" },
    { id: 10000003, name: "Charlie Brown", extension: 9101, email: "charlie@example.com", department: "Sales" },
    { id: 10000004, name: "David Wilson", extension: 1121, email: "david@example.com", department: "QA" },
    { id: 10000005, name: "Eva Adams", extension: 3141, email: "eva@example.com", department: "Executive" }
];

// GET DOM ELEMENTS
const empTable = document.querySelector('#empTable tbody');
const form = document.querySelector('#addForm');
const empCount = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.querySelector('#id').value.trim();
    const name = document.querySelector('#name').value.trim();
    const extension = document.querySelector('#extension').value.trim();
    const email = document.querySelector('#email').value.trim();
    const department = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW OBJECT
    const newEmployee = { id, name, extension, email, department };

    // PUSH THE NEW OBJECT TO THE EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});

// DELETE EMPLOYEE
document.querySelector('#empTable').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROW INDEX
            const rowIndex = e.target.parentNode.parentNode.rowIndex - 1;

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex, 1);

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // CLEAR THE EXISTING TABLE BODY
    empTable.innerHTML = '';

    // LOOP THROUGH THE ARRAY AND REBUILD THE TABLE ROWS
    for (const employee of employees) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.extension}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td><button class="btn btn-danger btn-sm">Delete</button></td>
        `;
        empTable.appendChild(row);
    }

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = `(${employees.length})`;

    // STORE THE ARRAY IN LOCAL STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
}
