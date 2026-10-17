import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

import { formatDateShort } from "../utils/dateUtils";

const BAR_SIZE = 20;
const BAR_GAP = 16; // space between bars (barCategoryGap)
const ROW_HEIGHT = BAR_SIZE + BAR_GAP; // 36px per bar
const MARGIN = { top: 4, right: 16, left: 8, bottom: 4 };
const X_AXIS_HEIGHT = 30;
const MAX_INTERVALS = 7;

const DateTick = ({ x, y, payload }) => (
  <text
    x={0}
    y={y}
    dy={4}
    textAnchor="start"
    fill="#597557"
    fontSize={12}
    fontFamily="Nunito, sans-serif"
  >
    {payload.value}
  </text>
);

export const IntervalsChart = ({ dates }) => {
  function constructData(numberOfIntervals) {
    const data = [];
    const intervalCount = Math.min(numberOfIntervals, dates.length - 1);
    for (let i = intervalCount - 1; i >= 0; i--) {
      const earlierDate = dates[dates.length - i - 2];
      const latterDate = dates[dates.length - 1 - i];
      const daysDifference = Math.floor(
        (latterDate - earlierDate) / (1000 * 3600 * 24)
      );

      data.push({
        date: `${formatDateShort(earlierDate)} - ${formatDateShort(latterDate)}`,
        interval: daysDifference,
      });
    }
    return data;
  }

  const data = constructData(MAX_INTERVALS);
  if (data.length === 0) return null;

  // Plot area = rows * ROW_HEIGHT, plus everything that isn't plot area
  const chartHeight =
    data.length * ROW_HEIGHT + X_AXIS_HEIGHT + MARGIN.top + MARGIN.bottom;

  return (
    <div className="w-full font-nunito">
      <BarChart
        width={undefined}
        height={chartHeight}
        style={{ width: "100%", height: chartHeight }}
        responsive
        data={data}
        layout="vertical"
        margin={MARGIN}
        barCategoryGap={BAR_GAP}
      >
        <CartesianGrid
          horizontal={false}
          stroke="#DCE5D3"
          strokeDasharray="3 5"
        />

        <XAxis
          type="number"
          height={X_AXIS_HEIGHT}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#87947D", fontSize: 12 }}
          tickFormatter={(value) => `${value}d`}
        />

        <YAxis
          type="category"
          dataKey="date"
          width={120}
          interval={0}
          axisLine={false}
          tickLine={false}
          tick={<DateTick />}
        />

        <Tooltip
          cursor={{ fill: "#F5F7F5", radius: 8 }}
          contentStyle={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #DCE5D3",
            borderRadius: "12px",
            padding: "10px 14px",
            color: "#426040",
            fontFamily: "Nunito, sans-serif",
            boxShadow: "0 4px 12px rgba(66, 96, 64, 0.08)",
          }}
          labelStyle={{ color: "#426040", fontWeight: 400, marginBottom: 4 }}
          formatter={(value) => [`${value} days`, "Interval"]}
        />

        <Bar
          dataKey="interval"
          fill="#99B674"
          radius={[10, 10, 10, 10]}
          barSize={BAR_SIZE}
          animationDuration={600}
        />
      </BarChart>
    </div>
  );
};