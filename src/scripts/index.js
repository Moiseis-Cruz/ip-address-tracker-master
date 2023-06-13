document.querySelector(".btn-search").addEventListener("click", () => {
    
})

const addressResult = document.getElementById("address-result")
const locationResult = document.getElementById("location-result")
const timezoneResult = document.getElementById("timezone-result")
const ipsResult = document.getElementById("ips-result")


async function addressTracker() {
    const response = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_Ebs0EI2Bfqs4cvI1Yf7yyDhrlHpkH&ipAddress=8.8.8.8")
    const action = await response.json()
    
    const ip = action.ip
    const timezone = action.location.timezone
    const ips = action.ips
    const location = action.location
}

addressTracker()

// async function getAddress() {
    //     console.log(await addressTracker());
    //     console.log(domains);
    // }
    
    // getAddress()
    

    // console.log(location.city, location.region);