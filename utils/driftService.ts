import axios from "axios";

const getDataDrift = async () => {
  // const dataSOL = await axios.get(
  //   "https://mainnet-beta.api.drift.trade/trades?marketIndex=0&marketType=perp"
  // );
  // const dataBTC = await axios.get(
  //   "https://mainnet-beta.api.drift.trade/trades?marketIndex=1&marketType=perp"
  // );
  const dataETH = await axios.get(
    "https://mainnet-beta.api.drift.trade/trades?marketIndex=2&marketType=perp"
  );
  //   let dataSolMap: any = [];
  // console.log(dataSOL.data);
  // console.log(dataBTC.data);
  console.log(dataETH.data);
  // const dataSolMap = dataSOL.data.data.trades.map((item: any) => {
  //   if (item.actionExplanation !== "orderFilledWithMatch") return null;
  //   else
  //     return {
  //       sizeAsk: parseFloat(item.makerOrderBaseAssetAmount),
  //       ask:
  //         parseFloat(item.makerOrderCumulativeQuoteAssetAmountFilled) /
  //         parseFloat(item.makerOrderCumulativeBaseAssetAmountFilled),
  //       typeAsk: item.takerOrderDirection,
  //       sizeBid: parseFloat(item.takerOrderBaseAssetAmount),
  //       bid:
  //         parseFloat(item.takerOrderCumulativeQuoteAssetAmountFilled) /
  //         parseFloat(item.takerOrderCumulativeBaseAssetAmountFilled),
  //       typeBid: item.makerOrderDirection,
  //       oraclePrice: item.oraclePrice,
  //       createAt: Date.now().toLocaleString(),
  //     };
  // });
  // const dataBTCMap = dataBTC.data.data.trades.map((item: any) => {
  //   if (item.actionExplanation !== "orderFilledWithMatch") return null;
  //   else
  //     return {
  //       sizeAsk: parseFloat(item.makerOrderBaseAssetAmount)-parseFloat(item.makerOrderCumulativeBaseAssetAmountFilled),
  //       ask: item.sizeAsk * parseFloat(item.oraclePrice),  
  //       typeAsk: item.takerOrderDirection,
  //       sizeBid: parseFloat(item.takerOrderBaseAssetAmount)-parseFloat(item.takerOrderCumulativeBaseAssetAmountFilled),
  //       bid:parseFloat(item.takerOrderCumulativeQuoteAssetAmountFilled)-item.sizeBid*parseFloat(item.oraclePrice),
  //       typeBid: item.makerOrderDirection,
  //       oraclePrice: (item.ask+item.bid)/2,
  //       createAt: Date.now().toLocaleString(),
  //     };
  // });
  const dataETHMap = dataETH.data.data.trades.map((item: any) => {
    if (item.actionExplanation !== "orderFilledWithMatch") return null;
    else
      return {
        sizeAsk: parseFloat(item.makerOrderBaseAssetAmount)-parseFloat(item.makerOrderCumulativeBaseAssetAmountFilled),
        ask:
          parseFloat(item.makerOrderCumulativeQuoteAssetAmountFilled) /
          parseFloat(item.makerOrderCumulativeBaseAssetAmountFilled),
        typeAsk: item.takerOrderDirection,
        sizeBid: parseFloat(item.takerOrderBaseAssetAmount)-parseFloat(item.takerOrderCumulativeBaseAssetAmountFilled),
        bid:
          parseFloat(item.takerOrderCumulativeQuoteAssetAmountFilled) /
          parseFloat(item.takerOrderCumulativeBaseAssetAmountFilled),
        typeBid: item.makerOrderDirection,
        oraclePrice: (item.ask+item.bid)/2*item.oraclePrice,
        createAt: Date.now().toLocaleString(),
      };
  });

  // return dataSolMap;
  // return dataBTCMap;
  return dataETHMap;




  //   const dataETH = await axios.get(
  //     "https://mainnet-beta.api.drift.trade/trades?marketIndex=2&marketType=perp"
  //   );
};

export { getDataDrift };
