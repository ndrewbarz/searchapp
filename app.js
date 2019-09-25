// Init GitHub
const github = new Github;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.querySelector('#searchUser');

// Search input Event Listener
searchUser.addEventListener('keyup', (e) => {
	// Get input value
	const userText = e.target.value;

	if (userText !== '') {
		// Make http call
		github.getUser(userText)
			.then(data => {
				if (data.profile.message === 'Not Found') {
					// Show Alert
					ui.showAlert('User not found', 'alert alert-danger');
				} else {
					// Show Profile
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);
				}
			})
	} else {
		// Clear profile
		ui.clearProfile();
	}
});