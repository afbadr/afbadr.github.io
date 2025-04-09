console.log("Initializing gradebook...");
alert("JS is working!");
// ToDo: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
    // This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");
    // Return on empty array for now as a placeholder
    return[];
}

// ToDo: Populate the table with grade data
function PopulateGradebook(data) {
    // This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data:", data);
} 
// ToDo REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
PopulateGradebook(gradeData);
// END REMOVE