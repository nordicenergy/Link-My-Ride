import { Currency } from "../enums"

export const getCurrencyString = (currency: Currency) => {
    let result = ""

    switch (+currency) {
        case Currency.ETH:
            result = "ETH"
            break
        case Currency.USD:
            result = "USD"
            break
        case Currency.GBP:
            result = "GBP"
            break
        case Currency.EUR:
            result = "EUR"
            break
    }

    return result
}