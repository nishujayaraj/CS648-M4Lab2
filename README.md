# Employee Management System

## Description
This Employee Management System allows users to add, view, and delete employees from a table. The system stores the employee data in the browser's `localStorage`, so the data persists even after the page is refreshed. The employee table is dynamically updated whenever a new employee is added or an employee is deleted.

## Features
- **Add Employee**: Users can fill in a form with employee details (ID, Name, Extension, Email, Department) and add the employee to the table.
- **Delete Employee**: Each employee entry has a "Delete" button to remove that entry from the table.
- **Persistent Storage**: Employee data is stored in `localStorage`, so the list remains even after the browser is closed or the page is refreshed.
- **Employee Count**: The total number of employees is displayed next to the employee list header.

## Files
- `index.html`: Contains the HTML structure for the employee form and table.
- `script.js`: Handles the functionality for adding, deleting, and displaying employees, as well as saving data in `localStorage`.

## How It Works
1. **Add Employee**:
   - Users fill out the form and submit it.
   - A new employee object is created and added to the employees array.
   - The employee list is updated and displayed in the table.
   - The form is reset after submission.

2. **Delete Employee**:
   - The user clicks the "Delete" button next to an employee.
   - A confirmation message appears, and if confirmed, the employee is removed from the array and the table is updated.

3. **Persistent Storage**:
   - Employees are stored in the browser's `localStorage`, and the data persists between page refreshes or browser restarts.

## Requirements
- A modern web browser with support for JavaScript and `localStorage`.


