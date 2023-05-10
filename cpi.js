// SPI Calculation
var spiTableBody = document.getElementById("spiTableBody");
document.getElementById("addCourseBtn").addEventListener("click", addCourseRow);
document.getElementById("calculateSPIBtn").addEventListener("click", calculateSPI);

function addCourseRow() {
  var row = document.createElement("tr");
  row.innerHTML = `
    <td>Course ${spiTableBody.children.length + 1}</td>
    <td><input type="number" class="credit" min="0" required></td>
    <td>
      <select class="grade" required>
        <option value="10">A*</option>
        <option value="10">A</option>
        <option value="9">B+</option>
        <option value="8">B</option>
        <option value="7">C+</option>
        <option value="6">C</option>
        <option value="5">D+</option>
        <option value="4">D</option>
        <option value="0">E</option>
        <option value="0">F</option>
        <option value="0">I</option>
      </select>
    </td>
  `;
  spiTableBody.appendChild(row);
}

function calculateSPI() {
  var rows = spiTableBody.children;
  var totalCredit = 0;
  var totalGrade = 0;

  for (var i = 0; i < rows.length; i++) {
    var credit = parseInt(rows[i].querySelector(".credit").value);
    var grade = parseInt(rows[i].querySelector(".grade").value);
    totalCredit += credit;
    totalGrade += credit * grade;
  }

  var spi = totalGrade / totalCredit;

  document.getElementById("spiResult").innerText = `SPI: ${spi.toFixed(2)}`;
}

// CPI Calculation
var cpiTableBody = document.getElementById("cpiTableBody");
document.getElementById("addSemesterBtn").addEventListener("click", addSemesterRow);
document.getElementById("calculateCPIBtn").addEventListener("click", calculateCPI);

function addSemesterRow() {
  var row = document.createElement("tr");
  row.innerHTML = `
    <td>Semester ${cpiTableBody.children.length + 1}</td>
    <td><input type="number" class="tcredit" min="0" required></td>
    <td><input type="number" class="spi" min="0" required></td>
  `;
  cpiTableBody.appendChild(row);
}

function calculateCPI() {
  var rows = cpiTableBody.children;
  var totalTCredit = 0;
  var totalSPI = 0;

  for (var i = 0; i < rows.length; i++) {
    var tcredit = parseInt(rows[i].querySelector(".tcredit").value);
    var spi = parseFloat(rows[i].querySelector(".spi").value);
    totalTCredit += tcredit;
    totalSPI += tcredit * spi;
  }

  var cpi = totalSPI / totalTCredit;

  document.getElementById("cpiResult").innerText = `CPI: ${cpi.toFixed(2)}`;
}
