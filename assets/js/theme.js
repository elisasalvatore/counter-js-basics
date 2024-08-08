const themeInput = document.querySelector("#changeTheme");

themeInput.addEventListener("change", (e) => {
	e.preventDefault();
	if (themeInput.checked) {
		darkMode();
	} else {
		lightMode();
	}
});

function darkMode() {
	document.body.classList.add("dark-mode");
	themeInput.checked = true;
}

function lightMode() {
	document.body.classList.remove("dark-mode");
	themeInput.checked = false;
}
