function addProjects() {
	var projectDiv = document.getElementById("ourProjects");
	for (var i =0; i < 4; i++) {
		var project = document.createElement("div");
		var projectLink = document.createElement("a");
		var projectImage = document.createElement("img");
		project.setAttribute("class", "project");
		projectLink.setAttribute("href", "https://github.com/RettBehrens/mini-tShoot");
		projectImage.setAttribute("src", "project"+i+".png");
		projectLink.appendChild(projectImage);
		project.appendChild(projectLink);
		projectDiv.appendChild(project);
	}
}