const API = "http://localhost:5000/api/students";

function fetchStudents() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = "";

      data.forEach(s => {
        list.innerHTML += `<li>${s.name} - ${s.email}
        <button onclick="deleteStudent(${s.id})">Delete</button>
        </li>`;
      });
    });
}

function addStudent() {
  const data = {
    name: name.value,
    email: email.value,
    age: age.value,
    class_id: class_id.value
  };

  fetch(API, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }).then(fetchStudents);
}

function deleteStudent(id) {
  fetch(`${API}/${id}`, { method: "DELETE" })
    .then(fetchStudents);
}

fetchStudents();
