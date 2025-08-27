const projects = [
    { name: "Raspberry PI Computer", class: "sec-01" },
    { name: "Arduino Bluetooth Car", class: "sec-02" },
    { name: "Ender 3 Pro 3D Printer", class: "sec-03" },
    { name: "Weather Station", class: "sec-04" },
    { name: "Arduino Bluetooth Boat", class: "sec-05" }
];

function showSuggestions() {
    const query = document.getElementById("searchbar").value.toLowerCase();
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    if (query.length === 0) return;

    projects
        .filter(project => project.name.toLowerCase().includes(query))
        .forEach(project => {
            const listItem = document.createElement("li");
            listItem.textContent = project.name;
            listItem.onclick = () => scrollToProject(project.class);
            suggestionsList.appendChild(listItem);
        });
}

function scrollToProject(projectClass) {
    const projectElement = document.querySelector(`.${projectClass}`); // Use class selector
    
    if (projectElement) {
        projectElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    document.getElementById("suggestions").innerHTML = ""; // Clear suggestions
}
