function getUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            let user = data.results[0];

            let name = user.name.first + " " + user.name.last;
            let email = user.email;
            let image = user.picture.large;

            document.getElementById("userData").innerHTML = `
                <h3>${name}</h3>
                <p>${email}</p>
                <img src="${image}" alt="User Image">
            `;
        })
        .catch(error => {
            console.error("Error fetching user:", error);
        });
}