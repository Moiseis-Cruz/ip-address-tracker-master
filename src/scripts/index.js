document.querySelector(".btn-search").addEventListener("click", () => {
    const searchIp = document.querySelector(".search-ip").value
    console.log(addressTracker(searchIp))
})

const addressResult = document.getElementById("address-result")
const locationResult = document.getElementById("location-result")
const timezoneResult = document.getElementById("timezone-result")
const ipsResult = document.getElementById("ips-result")


async function addressTracker(teste) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_Ebs0EI2Bfqs4cvI1Yf7yyDhrlHpkH&ipAddress=${teste}`)
    const action = await response.json()
    
    const ip = action.ip
    const timezone = action.location.timezone
    const ips = action.isp
    const location = action.location
    console.log(action);

    addressResult.innerHTML = `${ip}`
    locationResult.innerHTML = `${location.city}, ${location.region}`
    timezoneResult.innerHTML = `${timezone}`
    ipsResult.innerHTML = `${ips}`
}

// addressTracker()

// async function getAddress() {
    //     console.log(await addressTracker());
    //     console.log(domains);
    // }
    
    // getAddress()
    

    // console.log(location.city, location.region);
// }
// 194.212.174.101