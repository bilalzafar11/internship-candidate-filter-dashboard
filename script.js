// Clean & Consolidated script.js

import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


// 📥 Load candidates from Firestore on page load
async function loadCandidatesFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "candidates"));
    allCandidates = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        Name: data.Name || "",
        Gender: data.Gender || "",
        Phone: data.Phone || "",
        Email: data.Email || "",
        "City": data["City"] || "",
        "Degree": data["Degree"] || "",
        "Year of Study": data["Year of Study"] || "",
        Role: data.Role || "",
        "Interview Status": data["Interview Status"] || "",
        "Do you have any prior experience in the selected role?": data["Do you have any prior experience in the selected role?"] || "",
        "Preferred Internship Mode": data["Preferred Internship Mode"] || "",
        "Would you like to enroll in our professional training program?": data["Would you like to enroll in our professional training program?"] || "",
        "Available Full Month": data["Available Full Month"] || "",
        "Interested in Job After Internship": data["Interested in Job After Internship"] || "",
        "Comments or Questions": data["Comments or Questions"] || ""
      };
    });

    // 👇 Mock Candidates Data
    const mockCandidates = [
      {
        Name: "Ahmed Khan",
        Gender: "Male",
        Phone: "03001230001",
        Email: "ahmed@example.com",
        City: "Karachi",
        Degree: "BS CS",
        "Year of Study": "3rd Year, Batch 2022",
        Role: "Frontend Developer",
        "Interview Status": "Pending",
        "Do you have any prior experience in the selected role?": "Yes",
        "Preferred Internship Mode": "Remote",
        "Would you like to enroll in our professional training program?": "Yes",
        "Available Full Month": "Yes",
        "Interested in Job After Internship": "Yes",
        "Comments or Questions": ""
      },
      {
        Name: "Fatima Noor",
        Gender: "Female",
        Phone: "03001230002",
        Email: "fatima@example.com",
        City: "Lahore",
        Degree: "BS IT",
        "Year of Study": "Final Year, Batch 2021",
        Role: "Backend Developer",
        "Interview Status": "Selected",
        "Do you have any prior experience in the selected role?": "No",
        "Preferred Internship Mode": "Onsite",
        "Would you like to enroll in our professional training program?": "No",
        "Available Full Month": "Yes",
        "Interested in Job After Internship": "No",
        "Comments or Questions": "Looking forward!"
      },
      {
        Name: "Hassan Raza",
        Gender: "Male",
        Phone: "03001230003",
        Email: "hassan@example.com",
        City: "Islamabad",
        Degree: "BS SE",
        "Year of Study": "2nd Year, Batch 2023",
        Role: "Full Stack Developer",
        "Interview Status": "Pending",
        "Do you have any prior experience in the selected role?": "Yes",
        "Preferred Internship Mode": "Hybrid",
        "Would you like to enroll in our professional training program?": "Yes",
        "Available Full Month": "Yes",
        "Interested in Job After Internship": "Yes",
        "Comments or Questions": ""
      },
      {
        Name: "Sara Ali",
        Gender: "Female",
        Phone: "03001230004",
        Email: "sara@example.com",
        City: "Multan",
        Degree: "BS IT",
        "Year of Study": "3rd Year, Batch 2022",
        Role: "UI/UX Designer",
        "Interview Status": "Selected",
        "Do you have any prior experience in the selected role?": "Yes",
        "Preferred Internship Mode": "Remote",
        "Would you like to enroll in our professional training program?": "No",
        "Available Full Month": "Yes",
        "Interested in Job After Internship": "Yes",
        "Comments or Questions": ""
      },
      {
        Name: "Ali Hamza",
        Gender: "Male",
        Phone: "03001230005",
        Email: "ali@example.com",
        City: "Faisalabad",
        Degree: "BS CS",
        "Year of Study": "Final Year, Batch 2021",
        Role: "Mobile App Developer",
        "Interview Status": "Rejected",
        "Do you have any prior experience in the selected role?": "Yes",
        "Preferred Internship Mode": "Onsite",
        "Would you like to enroll in our professional training program?": "Yes",
        "Available Full Month": "No",
        "Interested in Job After Internship": "No",
        "Comments or Questions": ""
      },
      {
        Name: "Zainab Fatima",
        Gender: "Female",
        Phone: "03001230006",
        Email: "zainab@example.com",
        City: "Quetta",
        Degree: "BS SE",
        "Year of Study": "3rd Year, Batch 2022",
        Role: "Data Analyst",
        "Interview Status": "Pending",
        "Do you have any prior experience in the selected role?": "No",
        "Preferred Internship Mode": "Remote",
        "Would you like to enroll in our professional training program?": "Yes",
        "Available Full Month": "Yes",
        "Interested in Job After Internship": "Yes",
        "Comments or Questions": ""
      },
      {
        Name: "Talha Yousuf",
        Gender: "Male",
        Phone: "03001230007",
        Email: "talha@example.com",
        City: "Peshawar",
        Degree: "BS IT",
        "Year of Study": "2nd Year, Batch 2023",
        Role: "DevOps Engineer",
        "Interview Status": "Pending",
        "Do you have any prior experience in the selected role?": "No",
        "Preferred Internship Mode": "Onsite",
        "Would you like to enroll in our professional training program?": "Yes",
        "Available Full Month": "Yes",
        "Interested in Job After Internship": "No",
        "Comments or Questions": ""
      },
      {
        Name: "Areeba Khan",
        Gender: "Female",
        Phone: "03001230008",
        Email: "areeba@example.com",
        City: "Hyderabad",
        Degree: "BS CS",
        "Year of Study": "3rd Year, Batch 2022",
        Role: "QA Engineer",
        "Interview Status": "Selected",
        "Do you have any prior experience in the selected role?": "Yes",
        "Preferred Internship Mode": "Hybrid",
        "Would you like to enroll in our professional training program?": "Yes",
        "Available Full Month": "Yes",
        "Interested in Job After Internship": "Yes",
        "Comments or Questions": ""
      },
      {
        Name: "Usman Tariq",
        Gender: "Male",
        Phone: "03001230009",
        Email: "usman@example.com",
        City: "Rawalpindi",
        Degree: "BS SE",
        "Year of Study": "Final Year, Batch 2021",
        Role: "Software Engineer",
        "Interview Status": "Rejected",
        "Do you have any prior experience in the selected role?": "Yes",
        "Preferred Internship Mode": "Remote",
        "Would you like to enroll in our professional training program?": "No",
        "Available Full Month": "No",
        "Interested in Job After Internship": "Yes",
        "Comments or Questions": "Thanks for considering!"
      }
    ];

    // ✅ Merge firestore + mock data
    allCandidates = [...allCandidates, ...mockCandidates];

    // ✅ Display everything
    renderTable(allCandidates);
    populateRoleFilter(allCandidates);
    populateStatusFilter(allCandidates);
  } catch (error) {
    console.error("🔥 Error fetching data from Firestore:", error);
  }
}

// 🔄 Store CSV data globally
let allCandidates = [];

// 📤 Handle CSV Upload with smart column mapping
const csvUpload = document.getElementById("csv-upload");
csvUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      allCandidates = parseCSV(event.target.result);
      
      // Validate we got at least the essential fields
      if (allCandidates.length > 0) {
        const sampleCandidate = allCandidates[0];
        if (!sampleCandidate.Name || !sampleCandidate.Phone || !sampleCandidate.Role) {
          throw new Error("CSV must contain Name, Phone, and Role columns");
        }
      }
      
      renderTable(allCandidates);
      populateRoleFilter(allCandidates);
      populateStatusFilter(allCandidates);
      
    } catch (error) {
      console.error("Error processing CSV:", error);
      alert(`Error: ${error.message}. Please check your CSV format.`);
    }
  };
  reader.readAsText(file);
});

// 📄 Smart CSV Parser with column name mapping
function parseCSV(csvText) {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",").map(h => h.trim());
  
  // Column name mappings (case insensitive)
  const columnMap = {
    'name': 'Name',
    'full name': 'Name',
    'candidate': 'Name',
    'gender': 'Gender',
    'sex': 'Gender',
    'phone': 'Phone',
    'mobile': 'Phone',
    'contact': 'Phone',
    'email': 'Email',
    'email address': 'Email',
    'city': 'City & Province',
    'province': 'City & Province',
    'location': 'City & Province',
    'degree': 'Degree / Program',
    'program': 'Degree / Program',
    'education': 'Degree / Program',
    'year': 'Year of Study with Batch',
    'batch': 'Year of Study with Batch',
    'study year': 'Year of Study with Batch',
    'role': 'Role',
    'position': 'Role',
    'applying for': 'Role',
    'status': 'Interview Status',
    'interview status': 'Interview Status',
    'experience': 'Do you have any prior experience in the selected role?',
    'prior experience': 'Do you have any prior experience in the selected role?',
    'mode': 'Preferred Internship Mode',
    'internship mode': 'Preferred Internship Mode',
    'training': 'Would you like to enroll in our professional training program?',
    'availability': 'Are you available for the full month of July 2025?',
    'july availability': 'Are you available for the full month of July 2025?',
    'job interest': 'Are you interested in job opportunities after internship (if selected)?',
    'comments': 'Comments, questions, or anything we should know? (Optional)',
    'notes': 'Comments, questions, or anything we should know? (Optional)'
  };

  return lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim());
    const candidate = {};
    
    headers.forEach((originalHeader, index) => {
      const lowerHeader = originalHeader.toLowerCase();
      let mappedField = originalHeader; // default to original
      
      // Find the best matching field
      for (const [pattern, fieldName] of Object.entries(columnMap)) {
        if (lowerHeader.includes(pattern)) {
          mappedField = fieldName;
          break;
        }
      }
      
      candidate[mappedField] = values[index] || "";
    });
    
    return candidate;
  });
}

function renderTable(data) {
  const tbody = document.getElementById("candidate-table-body");
  tbody.innerHTML = "";

  if (!data || data.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; color:#777; padding: 1rem;">
          No candidates found. Please upload data or check your connection.
        </td>
      </tr>`;
    return;
  }

  data.forEach((candidate) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${candidate.Name || ""}</td>
      <td>${candidate.Gender || ""}</td>
      <td>${candidate.Phone || ""}</td>
      <td>${candidate.Role || ""}</td>
      <td>${candidate["Interview Status"] || ""}</td>
    `;

    // Store unique phone number to find full data later
    row.dataset.phone = candidate.Phone;

    row.addEventListener("click", () => {
      const clickedPhone = row.dataset.phone;
      const fullCandidate = allCandidates.find(c => c.Phone === clickedPhone);
      if (fullCandidate) {
        showCandidateDetails(fullCandidate);
      }
    });

    tbody.appendChild(row);
  });
}
function showCandidateDetails(candidate) {
  const modal = document.getElementById("details-modal");
  const modalContent = document.getElementById("modal-details-content");

  modalContent.innerHTML = `
    <p><strong>Full Name:</strong> ${candidate.Name || "—"}</p>
    <p><strong>Gender:</strong> ${candidate.Gender || "—"}</p>
    <p><strong>Phone Number:</strong> ${candidate.Phone || "—"}</p>
    <p><strong>Email Address:</strong> ${candidate.Email || "—"}</p>
    <p><strong>City:</strong> ${candidate["City"] || "—"}</p>
    <p><strong>Degree:</strong> ${candidate["Degree"] || "—"}</p>
    <p><strong>Year of Study :</strong> ${candidate["Year of Study"] || "—"}</p>
    <p><strong>Internship Role:</strong> ${candidate.Role || "—"}</p>
    <p><strong>Interview Status:</strong> ${candidate["Interview Status"] || "—"}</p>
    <p><strong>Do you have any prior experience in the selected role?:</strong> ${candidate["Do you have any prior experience in the selected role?"] || "—"}</p>
    <p><strong>Preferred Internship Mode:</strong> ${candidate["Preferred Internship Mode"] || "—"}</p>
    <p><strong>Available Full Month:</strong> ${candidate["Available Full Month"] || "—"}</p>
    <p><strong>Interested in Job After Internship:</strong> ${candidate["Interested in Job After Internship"] || "—"}</p>
    <p><strong>Comments or Questions:</strong> ${candidate["Comments or Questions"] || "—"}</p>
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
  const roles = [...new Set(data.map((c) => c.Role).filter(Boolean))];
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
  const statuses = [...new Set(data.map((c) => c["Interview Status"]).filter(Boolean))];
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

  const filteredCandidates = allCandidates.filter(candidate => {
    const fullText = Object.values(candidate).join(" ").toLowerCase();
    const matchesKeyword = keyword === "" || fullText.includes(keyword);
    const matchesRole = selectedRole === "" || candidate.Role === selectedRole;
    const matchesStatus = selectedStatus === "" || candidate["Interview Status"] === selectedStatus;

    return matchesKeyword && matchesRole && matchesStatus;
  });

  renderTable(filteredCandidates);
}

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
  loadCandidatesFromFirestore().then(() => {
    // ✅ Add these listeners AFTER Firebase data is loaded
    document.getElementById("search-input").addEventListener("input", applyFilters);
    document.getElementById("role-filter").addEventListener("change", applyFilters);
    document.getElementById("status-filter").addEventListener("change", applyFilters);
  });
});

