import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";
import ECharts from "echarts-for-react";
import { useEffect, useState } from "react";

/** outlet 으로 받아온 값 타입 */
type OutletContextType = {
  coinId: string;
};

/** 코인 히스토리 타입 */
type CoinHistoryType = {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
};
const Chart = () => {
  const { coinId } = useOutletContext<OutletContextType>();

  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  // chart option
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (!isLoading && data) {
      setOptions({
        tooltip: {
          trigger: "axis",
          valueFormatter: (value: string) => `$${Number(value).toFixed(2)}`,
        },
        xAxis: {
          show: false,
          type: "category",
          data: data?.map((coinHistoryData: CoinHistoryType) =>
            new Date(coinHistoryData.time_close * 1000).toLocaleDateString()
          ),
        },
        yAxis: {
          show: false,
          type: "value",
          scale: true,
        },
        series: [
          {
            type: "line",
            data: data?.map((price: CoinHistoryType) => price.close),
          },
        ],
      });
    }
  }, [data, isLoading]);

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ECharts option={options} opts={{ renderer: "svg" }} />
      )}
    </div>
  );
};

export default Chart;
