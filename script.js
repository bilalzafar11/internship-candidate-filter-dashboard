// Clean & Consolidated script.js

// 🔄 Store CSV data globally
let allCandidates = [];

// 📤 Handle CSV Upload
const csvUpload = document.getElementById("csv-upload");
csvUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    allCandidates = parseCSV(event.target.result);
    renderTable(allCandidates);
    populateRoleFilter(allCandidates);
    populateStatusFilter(allCandidates);
  };
  reader.readAsText(file);
});

// 📄 Parse CSV
function parseCSV(csvText) {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    return headers.reduce((obj, key, i) => {
      obj[key] = values[i] || "";
      return obj;
    }, {});
  });
}

// 📊 Render Table with click listener
function renderTable(data) {
  const tbody = document.getElementById("candidate-table-body");
  tbody.innerHTML = "";

  data.forEach((candidate) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${candidate.Name || ""}</td>
      <td>${candidate.Gender || ""}</td>
      <td>${candidate.Phone || ""}</td>
      <td>${candidate.Role || ""}</td>
      <td>${candidate["Interview Status"] || ""}</td>
    `;

    // 👉 Add click event to row
    row.addEventListener("click", () => {
      showCandidateDetails(candidate);
    });

    tbody.appendChild(row);
  });
}

// 📦 Show Candidate Details in Popup Modal
function showCandidateDetails(candidate) {
  const modal = document.getElementById("details-modal");
  const modalContent = document.getElementById("modal-details-content");

  modalContent.innerHTML = `
    <strong>Full Name:</strong> ${candidate.Name || "—"}<br/>
    <strong>Gender:</strong> ${candidate.Gender || "—"}<br/>
    <strong>Phone Number:</strong> ${candidate.Phone || "—"}<br/>
    <strong>Email Address:</strong> ${candidate.Email || "—"}<br/>
    <strong>City & Province:</strong> ${candidate["City & Province"] || "—"}<br/>
    <strong>Institute Name:</strong> ${candidate["Institute Name"] || "—"}<br/>
    <strong>Degree / Program:</strong> ${candidate["Degree / Program"] || "—"}<br/>
    <strong>Year of Study with Batch:</strong> ${candidate["Year of Study with Batch"] || "—"}<br/>
    <strong>Internship Role:</strong> ${candidate.Role || "—"}<br/>
    <strong>Interview Status:</strong> ${candidate["Interview Status"] || "—"}<br/>
    <strong>Experience Level:</strong> ${candidate["Do you have any prior experience in the selected role?"] || "—"}<br/>
    <strong>Preferred Internship Mode:</strong> ${candidate["Preferred Internship Mode"] || "—"}<br/>
    <strong>Enrolled in Training Program:</strong> ${candidate["Would you like to enroll in our professional training program?"] || "—"}<br/>
    <strong>Available Full Month:</strong> ${candidate["Are you available for the full month of July 2025?"] || "—"}<br/>
    <strong>Interested in Job After Internship:</strong> ${candidate["Are you interested in job opportunities after internship (if selected)?"] || "—"}<br/>
    <strong>Comments or Questions:</strong> ${candidate["Comments, questions, or anything we should know? (Optional)"] || "—"}
  `;

  modal.style.display = "block";
}

// ❌ Close Modal on (×) Click
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("details-modal").style.display = "none";
});




// 🎯 Populate Role Filter
function populateRoleFilter(data) {
  const roleFilter = document.getElementById("role-filter");
  const roles = [...new Set(data.map((c) => c.Role))];
  roleFilter.innerHTML = `<option value="">All Roles</option>`;
  roles.forEach((role) => {
    const option = document.createElement("option");
    option.value = role;
    option.textContent = role;
    roleFilter.appendChild(option);
  });
}

// ✅ Populate Status Filter
function populateStatusFilter(data) {
  const statusFilter = document.getElementById("status-filter");
  const statuses = [...new Set(data.map((c) => c["Interview Status"]))];
  statusFilter.innerHTML = `<option value="">All Status</option>`;
  statuses.forEach((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    statusFilter.appendChild(option);
  });
}

// 🔍 Apply All Filters: Keyword + Role + Status
function applyFilters() {
  const keyword = document.getElementById("search-input").value.trim().toLowerCase();
  const selectedRole = document.getElementById("role-filter").value;
  const selectedStatus = document.getElementById("status-filter").value;

  // 📋 Filter candidates based on all selected criteria
  const filteredCandidates = allCandidates.filter(candidate => {
    const fullText = Object.values(candidate).join(" ").toLowerCase();

    const matchesKeyword = keyword === "" || fullText.includes(keyword);
    const matchesRole = selectedRole === "" || candidate.Role === selectedRole;
    const matchesStatus = selectedStatus === "" || candidate["Interview Status"] === selectedStatus;

    return matchesKeyword && matchesRole && matchesStatus;
  });

  // 🖨️ Show filtered results
  renderTable(filteredCandidates);

  // ❌ No match found message
  const tableBody = document.getElementById("candidate-table-body");
  if (filteredCandidates.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; color:#777; padding: 1rem;">
          No matching candidates found. Try different filters or search keywords.
        </td>
      </tr>`;
  }
}

// 🔗 Filter Event Listeners
document.getElementById("search-input").addEventListener("input", applyFilters);
document.getElementById("role-filter").addEventListener("change", applyFilters);
document.getElementById("status-filter").addEventListener("change", applyFilters);

// 🛠️ Column Show/Hide Logic
function setupColumnToggles() {
  document.getElementById("column-toggle-btn").addEventListener("click", () => {
    const box = document.getElementById("column-checkboxes");
    box.style.display = box.style.display === "block" ? "none" : "block";
  });

  document.querySelectorAll(".toggle-column").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const index = parseInt(checkbox.getAttribute("data-column"));
      const display = checkbox.checked ? "" : "none";

      document.querySelectorAll(`table th:nth-child(${index + 1}), table td:nth-child(${index + 1})`).forEach((el) => {
        el.style.display = display;
      });
    });
  });

  document.addEventListener("click", (e) => {
    const btn = document.getElementById("column-toggle-btn");
    const dropdown = document.getElementById("column-checkboxes");
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
}

// 🚀 Init
window.addEventListener("DOMContentLoaded", () => {
  setupColumnToggles();
});


