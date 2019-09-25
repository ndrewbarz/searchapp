class UI {
	constructor() {
		this.profile = document.querySelector('#profile');
	}

	// Display profile in UI
	showProfile(user) {
		this.profile.innerHTML = `
			<div class"card card-body mb-3">
				<div class="row">
					<div class="col-md-3">
						<img class="img-fluid mb-2" src="${user.avatar_url}">
						<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
					</div>
					<div class="col-md-9">
						<span class="badge badge-primary p-2">Public Repos: ${user.public_repos}</span>
						<span class="badge badge-secondary p-2">Public Gists: ${user.public_gists}</span>
						<span class="badge badge-success p-2">Followers: ${user.followers}</span>
						<span class="badge badge-info p-2">Following: ${user.following}</span>
						<br><br>
						<ul class="list-group">
							<li class="list-group-item">Company: ${user.company}</li>
							<li class="list-group-item">Website/Blog: ${user.blog}</li>
							<li class="list-group-item">Location: ${user.location}</li>
							<li class="list-group-item">Member Since: ${user.created_at}</li>
						</ul>
					</div>
				</div>			
			</div>
			<h3 class="page-heading mb-3">Latest Repos</h3>
			<div id="repos></div>
		`;
	}

	// Show User repos
	showRepos(repos){
		let output = '';

		repos.forEach(repo => {
			output += `
				<div class="card card-body mb-2">
					<div class="row">
						<div class="col-md-6">
							<a href="${repo.html_url}" target="_blank">${repo.name}</a>
						</div>
						<div class="col-md-6 text-right">
							<span class="badge badge-primary p-2">Stars: ${repo.stargazers_count}</span>
							<span class="badge badge-warning p-2">Watchers: ${repo.watchers}</span>
							<span class="badge badge-success p-2">Forks: ${repo.forks_count}</span>
						</div>
					</div>
				</div>
			`;
		});

		// Output repos
		document.querySelector('#repos').innerHTML = output;
	}

	// Show Alert message
	showAlert(message, className) {
		// Clear any remaining alerts
		this.clearAlert();

		// Create div
		const div = document.createElement('div');
		// Add classes
		div.className = className;
		// Add text
		div.appendChild(document.createTextNode(message));
		// Get Parent
		const container = document.querySelector('.searchContainer');
		// Get search box
		const search = document.querySelector('.search');
		// Insert alert
		container.insertBefore(div, search);

		// Timeout after show alert
		setTimeout(() => {
			this.clearAlert();
		}, 1700);
	}

	// Clear Alert message
	clearAlert() {
		const currentAlert = document.querySelector('.alert');

		if (currentAlert) {
			currentAlert.remove();
		}
	}

	// Clear profile
	clearProfile() {
		this.profile.innerHTML = '';
	}
}