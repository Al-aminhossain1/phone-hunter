const errorText = document.getElementById('error');
const searchFild = () => {
    document.getElementById('display-result').textContent = '';
    document.getElementById('display-detalets').textContent = '';
    const searchInput = document.getElementById('input-fild');
    const searchText = searchInput.value;
    searchInput.value = '';
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data.slice(0, 5)))
}
const displayResult = phones => {
    // console.log(phones);

    if (phones.length == 0) {
        const errorText = document.getElementById('error-text');
        errorText.style.display = 'block';
        // errorText.textContent = '';
        // errorText.innerText = 'No Search Result'
    }
    else {
        document.getElementById('error-text').style.display = 'none';
        const displayOutput = document.getElementById('display-result');
        displayOutput.textContent = '';
        // console.log(phones);
        phones.forEach(phone => {
            // console.log(phone.slug);
            const div = document.createElement('div');
            div.classList.add('col')
            div.innerHTML = `<div class="card h-50 w-50 mx-auto">
            <img src="${phone.image}"card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">${phone.phone_name}</p>
                <button onclick="PhoneDetales('${phone.slug}')" type="button" class="btn btn-primary btn-sm">Phon Detailes</button>
            </div>
        </div>`
            displayOutput.appendChild(div)

        });
    }

}
const PhoneDetales = phoneId => {
    // console.log(id);
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetales(data.data))
}
const displayPhoneDetales = (detailes) => {
    console.log(detailes.releaseDate);
    const detaile = document.getElementById('display-detalets');
    detaile.textContent = '';
    const div = document.createElement('div');
    // div.classList.add('card h-50 w-50 mx-auto');
    div.innerHTML = `<div class="card h-50 w-50 mx-auto">
    <img class="card h-25 w-25 mx-auto" src="${detailes.image}"card-img-top" alt="...">
      <div class="card-body text-center">
        <h4 class="card-title">${detailes.brand}</h4>
        <h5 class="card-text">${detailes.name}</h5> <p><span class="fs-4">releaseDate:</span>  ${detailes.releaseDate}</p>
        <p><span class="fs-4">chipSet:</span>  ${detailes.mainFeatures.chipSet}</p>
        <p><span class="fs-4">displaySize:</span>  ${detailes.mainFeatures.displaySize}</p> <p><span class="fs-4">memory:</span>  ${detailes.mainFeatures.memory}</p>
        </div>
       
    </div > `
    detaile.appendChild(div)

}


