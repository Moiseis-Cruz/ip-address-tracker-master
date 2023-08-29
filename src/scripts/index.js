const btnSearch = document.getElementById("btn-search")

btnSearch.addEventListener("click", () => {
    const addressIp = document.getElementById("address-ip").value

    getAddress(addressIp)
})

async function address (ipNumber) {
    // const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_GQHZq86hVh3laClN0Rx7smnw5SuKU&ipAddress=${ipNumber}`
    const response = await fetch(url)
    return await response.json()
}

function getAddress(ipNumber) {
    address(ipNumber).then((addressData) => {
        let addressInfo = `
        <li>
            <h3 class="teste-1">IP ADDRESS</h3>
            <p class="teste-2">${addressData.ip}</p>
        </li>
        <li>
            <h3 class="teste-1">LOCATION</h3>
            <p class="teste-2">${addressData.location.city}, ${addressData.location.region} <br> ${addressData.location.geonameId}</p>
        </li>
        <li>
            <h3 class="teste-1">TIMEZONE</h3>
            <p class="teste-2">UTC -05:00</p>
        </li>
        <li>
            <h3 class="teste-1">ISP</h3>
            <p class="teste-2">SpaceX <br> Starlink</p>
        </li>`

        document.getElementById("address-data").innerHTML = addressInfo
    })
}

getAddress()

/* 
IPP ADDRESS     {ip}
LOCATION    {location.city  /   location.region     /   location.geonameId}
TIMEZONE    {location.timezone}
ISP     {ips}

LATITUDE    {location.lat}
LONGITUDE   {location.lng}
*/