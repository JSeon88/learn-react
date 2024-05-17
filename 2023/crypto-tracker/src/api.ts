export const fetchCoins = () => {
  return fetch("https://api.coinpaprika.com/v1/coins").then((res) =>
    res.json()
  );
};

export const fetchCoinInfo = (coinId: string) => {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then((res) =>
    res.json()
  );
};

export const fetchTickersInfo = (coinId: string) => {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then((res) =>
    res.json()
  );
};

/** 코인 히스토리 - 차트 */
export const fetchCoinHistory = (coinId: string) => {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((res) => res.json());
};
