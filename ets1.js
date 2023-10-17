const url = 'http://159.223.51.203/api/bio';

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        display(data);
    })
    .catch((error) => {
        console.error('Error fetching data from the API:', error);
    });

function display(data) {
    for (let i = 0; i < data.length; i++) {
        const namaElement = document.getElementById(`name${i + 1}`);
        const idElement = document.getElementById(`id${i + 1}`);

        namaElement.textContent = data[i].name;
        idElement.textContent = data[i].id;
    }
}
