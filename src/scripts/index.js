const btnSearch = document.getElementById("btn-search")

btnSearch.addEventListener("click", () => {
    const addressIp = document.getElementById("address-ip").value


})

async function address () {
    // const url = "https://geo.ipify.org/api/v2/country?apiKey=at_GQHZq86hVh3laClN0Rx7smnw5SuKU&ipAddress=8.8.8.8"
    const response = await fetch(url)
    return await response.json()
}

function getAddress() {
    address().then((addressData) => {
        console.log(addressData);
    })
}

getAddress()

/* 
IPP ADDRESS
LOCATION
TIMEZONE
ISP
*/