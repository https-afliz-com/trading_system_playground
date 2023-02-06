import axios from "axios";

const getDataDrift = async () => {
  const dataSOL = await axios.get(
    "https://mainnet-beta.api.drift.trade/trades?marketIndex=0&marketType=perp"
  );
  const dataBTC = await axios.get(
    "https://mainnet-beta.api.drift.trade/trades?marketIndex=1&marketType=perp"
  );
  const dataETH = await axios.get(
    "https://mainnet-beta.api.drift.trade/trades?marketIndex=2&marketType=perp"
  );

  return dataSOL.data;
};

export { getDataDrift };
