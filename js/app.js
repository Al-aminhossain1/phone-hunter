const searchFild = () => {
    const searchInput = document.getElementById('input-fild');
    const searchText = searchInput.value;
    searchInput.value = '';
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data.slice(0, 5)))
}
const displayResult = phones => {
    console.log(phones);

    if (phones.length === 0) {

        const errorText = document.getElementById('error');
        errorText.innerText = 'No Search Result'
    }
    const displayOutput = document.getElementById('display-result');
    displayOutput.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `<div class="card h-50 w-50 mx-auto">
            <img src="${phone.image}"card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">${phone.phone_name}</p>
                <button>button</button>
            </div>
        </div>`
        displayOutput.appendChild(div)
    });
}

