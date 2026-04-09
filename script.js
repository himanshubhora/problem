function showForm() {
  document.getElementById("formSection").style.display = "block";
}

const form = document.querySelector("form");
const output = document.createElement("div");
document.body.appendChild(output);

// Load saved complaints
let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

function displayComplaints() {
  output.innerHTML = "<h2 style='text-align:center;'>Submitted Complaints</h2>";

  complaints.forEach((c) => {
    output.innerHTML += `
      <div style="background:#eee; margin:10px; padding:15px; border-left:5px solid blue;">
        <h3>${c.title}</h3>
        <p>${c.description}</p>
        <p><b>Category:</b> ${c.category}</p>
        <p><b>Location:</b> ${c.location}</p>
        <p><b>Status:</b> Pending</p>
      </div>
    `;
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const complaint = {
    title: form.children[0].value,
    description: form.children[1].value,
    category: form.children[2].value,
    location: form.children[3].value
  };

  complaints.push(complaint);
  localStorage.setItem("complaints", JSON.stringify(complaints));

  form.reset();
  displayComplaints();
});

// Initial display
displayComplaints();