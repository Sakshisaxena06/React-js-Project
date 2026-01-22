import axios from "axios"
 
axios.create({
   baseURL:  "https://v6.exchangerate-api.com/v6/1eeccfb59edc61c8c944107e"
})

export const currencyConvertor = (fromCurrency,toCurrency,amount)=>{
return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`)
}