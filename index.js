function fetchData() {
    fetch('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw Error('ERROR');
            }
            return response.json();
        }).then(data => {
            console.log(data.data);
            const html = data.data.map(user => {
                return `<div class="user">
                            <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
                            <p>ID : ${user.id}</p>
                            <p>Name : ${user.first_name} ${user.last_name}</p>
                            <p>Email : ${user.email}</p>
                    </div>`
            }).join('');
            document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
        }).catch(error => {
            console.log(error);
        });
}
fetchData();