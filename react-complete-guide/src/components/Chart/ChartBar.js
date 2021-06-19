import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    let barrFillHeight = '0%';

    if(props.maxValue > 0){
        barrFillHeight = Math.round((props.value/props.maxValue)*100) + "%"
    }

    const style = {
        height: barrFillHeight
    };


  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style = {style}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
