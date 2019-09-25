class Github {
	constructor() {
		this.client_id = 'c33fea2a852469cb6996';
		this.client_secret = '338e4fa9ee05e14e0165c3ab22cfe2342e8cbec4';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos
		}
	}
}