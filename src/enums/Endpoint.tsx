export const enum Endpoint {
    POST_SIGN_IN = "auth/login",
    POST_SIGN_UP = "auth/signup",
    POST_EMAIL_SEND = "auth/send",
    POST_EMAIL_CHECK = "auth/check",
    POST_VALIDATE_TOKEN = "auth/validate-token",

    PATCH_REGISTER_ACCOUNT = "account/user",
    POST_REGISTER_MOCK_KEY = "account/mock-key",
    POST_REGISTER_REAL_KEY = "account/real-key",

    POST_APPROVAL_KEY_MOCK = "oauth2/mock-approval-key",
    POST_APPROVAL_KEY_REAL = "oauth2/real-approval-key",
    POST_ACCESS_TOKEN_MOCK = "oauth2/mock-token",
    POST_ACCESS_TOKEN_REAL = "oauth2/real-token",

    POST_ORDER = "trading/order",
    POST_ORDER_REVERSE = "trading/order-reverse",
    GET_NCCS = "trading/nccs",
    GET_BALANCE = "trading/balance",
    GET_PSAMOUNT = "trading/psamount",
    GET_PRESENT_BALANCE = "trading/present-balance",
    GET_CCNL = "trading/ccnl",

    GET_PRICE = "quotations/basic/price",
    GET_DAILY_PRICE = "quotations/basic/daily-price",
    GET_DAILY_CHART_PIRCE = "quotations/basic/inquire-daily-chartprice",
    GET_SEARCH = "quotations/basic/inquire-search",

    GET_COUNTRIES_HOLIDAY = "quotations/basic/countries-holiday",
    GET_PRICE_DETAIL = "quotations/basic/price-detail",
    GET_TIME_ITEM_CHART_PRICE = "quotations/basic/inquire-time-itemchartprice",
    GET_TIME_INDEX_CHART_PRICE = "quotations/basic/inquire-time-indexchartprice",
    GET_SEARCH_INFO = "quotations/basic/search-info",
    GET_ASKING_PRICE = "quotations/basic/inquire-asking-price",

    GET_NEWS_TITLE = "quotations/analysis/news-title",
}