const btnSearch = document.getElementById("btn-search")

btnSearch.addEventListener("click", () => {
    const addressIp = document.getElementById("address-ip").value


})

async function address () {
    const url = "https://geo.ipify.org/api/v2/country?apiKey=at_Ebs0EI2Bfqs4cvI1Yf7yyDhrlHpkH&ipAddress=194.212.172.101"
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