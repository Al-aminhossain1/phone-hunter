// Search input
const searchFild = () => {
    document.getElementById('display-result').textContent = '';
    document.getElementById('display-details').textContent = '';
    const searchInput = document.getElementById('input-fild');
    const searchText = searchInput.value;
    // Clear input
    searchInput.value = '';
    // Api load
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data.slice(0, 20)))
}
//  Show Display Result
const displayResult = phones => {
    // Erorr message
    if (phones.length == 0) {
        const errorText = document.getElementById('error-text');
        errorText.style.display = 'block';
    }
    else {
        document.getElementById('error-text').style.display = 'none';
        const displayOutput = document.getElementById('display-result');
        displayOutput.innerHTML = '';
        phones.forEach(phone => {
            const div = document.createElement('div');
            div.innerHTML = `<div class="card h-50 w-50 mx-auto">
            <img src="${phone.image}"card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">${phone.phone_name}</p>
                <button onclick="PhoneDetales('${phone.slug}')" type="button" class="btn btn-primary btn-sm">Phone Details</button>
            </div>
        </div>`
            displayOutput.appendChild(div)

        });
    }

}
// Phone Details start
const PhoneDetales = phoneId => {
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetales(data.data))
}
// Show Phone Details
const displayPhoneDetales = (details) => {
    console.log(details);
    console.log(details.others);
    const detaile = document.getElementById('display-details');
    const div = document.createElement('div');
    detaile.innerHTML = '';
    div.innerHTML = `<div class="card h-50 w-50 mx-auto bg-info bg-gradient bg-opacity-25 my-5 ">
    <img class="card h-25 w-25 mx-auto" src="${details.image}"card-img-top" alt="...">
      <div class="card-body ">
        <h4 class="card-title">${details.brand}</h4>
         <h5 class="card-text">${details.name}</h5> <p><span class="fs-5">releaseDate:</span>${details.releaseDate ? details.releaseDate : 'release date not found!'}</p>
        <p><span class="fs-5">chipSet:</span>  ${details.mainFeatures.chipSet}</p>
        <p><span class="fs-5">displaySize:</span>  ${details.mainFeatures.displaySize}</p>
         <p><span class="fs-5">memory:</span>  ${details.mainFeatures.memory}</p>
        <p><span class="fs-5">Sensors:</span>  ${details.mainFeatures.sensors}</p> 
        <h4>Others:</h4>
        <p><span class="fs-5">Bluetooth:</span>  ${details.others.Bluetooth}</p> 
        <p><span class="fs-5">GPS:</span>  ${details.others.GPS}</p> 
        <p><span class="fs-5">NFC:</span>  ${details.others.NFC}</p> 
        <p><span class="fs-5">Radio:</span>  ${details.others.Radio}</p> 
        <p><span class="fs-5">USB:</span>  ${details.others.USB}</p> 
        <p><span class="fs-5">WLAN:</span>  ${details.others.WLAN}</p> 
        </div>
    </div > `
    detaile.appendChild(div)

}
