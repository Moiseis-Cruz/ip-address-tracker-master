async function ipAddress () {
    const url = "https://geo.ipify.org/api/v2/country?apiKey=at_Ebs0EI2Bfqs4cvI1Yf7yyDhrlHpkH&ipAddress=194.212.172.101"
    const response = await fetch(url)
    const action = await response.json()
    console.log(await action);
}

ipAddress()