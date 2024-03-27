document.addEventListener('DOMContentLoaded', function () {
    // Get the current date
    const currentDate = new Date();

    // Get the day, month, and year from the date object
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so January is 0
    const year = currentDate.getFullYear();

    // Format the date as desired (e.g., "MM/DD/YYYY")
    const formattedDate = `${month}/${day}/${year}`;

    // Display the formatted date on the web page
    const currentDateElement = document.getElementById('currentDate');
    currentDateElement.textContent = `Current Date: ${formattedDate} `;
});


function saveAndDisplay() {

    var txt =  document.getElementById("txt").value;


    // demo = document.getElementById("demo")
    // demo.innerHTML = txt;

    eraseText()

  }

function eraseText() {
    document.getElementById("txt").value = "";
}