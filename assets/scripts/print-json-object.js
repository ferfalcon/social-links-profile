export default function printJsonObject(jsonObject) {
	document.querySelector('[data-image]').setAttribute('src', jsonObject.imagelocation);
	document.querySelector('[data-image]').setAttribute('alt', jsonObject.imagealt);
	document.querySelector('[data-name]').textContent = jsonObject.name;
	document.querySelector('[data-location]').textContent = jsonObject.location;
	document.querySelector('[data-description]').textContent = jsonObject.description;

	let linkMarkup = '';
	if (jsonObject.links) {
		jsonObject.links.forEach(link => {
			linkMarkup += `<a href="${link.url}" class="profile-card__social-link">${link.name}</a>`;
		});
	}

	document.querySelector('[data-links]').innerHTML = linkMarkup;
}