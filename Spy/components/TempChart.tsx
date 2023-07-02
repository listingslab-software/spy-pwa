// import "./styles.css";
import React from "react";
import moment from "moment"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  usePwaSelect,
  selectPWA,
} from "../../"
import {CustomTooltip} from "../"

export default function TempChart() {
  const pwa = usePwaSelect(selectPWA)
  const {lilly} = pwa

  const overTime: Array<any> = []
  for(let i = 0; i<lilly.length; i++){
    overTime.push({
      timeAgo: moment(lilly[i].timestamp).fromNow(),
      temp: lilly[i].readings.temperature,
    })
  }

  return (<>
    <div style={{ width: '100%', height: 175 }}>          
      <ResponsiveContainer >
        <AreaChart          
          data={overTime}>
            <Tooltip content={<CustomTooltip 
                                active={undefined} 
                                payload={undefined} 
                                label={undefined} />}/>
          <XAxis 
            stroke="#FFFFFF"
            dataKey={"timeAgo"} />
          <YAxis 
            stroke="#FFFFFF" 
          />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#FFFFFF"
            fill="#3EDA1F"
            fillOpacity={"100%"}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </>)
}