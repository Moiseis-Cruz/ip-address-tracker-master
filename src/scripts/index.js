async function addressTracker() {
    const response = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_Ebs0EI2Bfqs4cvI1Yf7yyDhrlHpkH&ipAddress=8.8.8.8")
    const action = await response.json()
    
    const ip = action.ip
    const location = action.location
    const ips = action.ips
    console.log(action);
}

addressTracker()

// async function getAddress() {
//     console.log(await addressTracker());
//     console.log(domains);
// }

// getAddress()

// IP ADDRESS
// LOCATION
// TIMEZONE
// ISP