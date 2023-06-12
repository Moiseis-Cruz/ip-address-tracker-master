async function rastreadorDeEndereco() {
    const response = await fetch("https://geo.ipify.org/api/v2/country?apiKey=at_Ebs0EI2Bfqs4cvI1Yf7yyDhrlHpkH&ipAddress=8.8.8.8")
    const teste = await response.json()
    console.log(teste);
}

rastreadorDeEndereco()

// IP ADDRESS
// LOCATION
// TIMEZONE
// ISP