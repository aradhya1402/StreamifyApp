import React from "react";
import { Bar } from "react-chartjs-2";
import './StreamChart.css'
import { Tooltip } from "chart.js";

export const StreamChart =({chartData}) =>{
   
    const userGrowth={
        labels:chartData.songs,
        datasets: [
            {
            label:"Total Users",
            data: chartData.streams,
            fill:false,
            backgroundColor: "rgba(75,192,192,0.6)", // Semi-transparent teal
            borderColor: "rgba(75,192,192,1)",
            tension:0.4

            },
           
        ]
    };
    const options = {
        responsive:true,
        maintainAspectRatio:false,
        scales:{
            y: {
                beginAtZero:true
            }
        },
        plugins:{
            legend:{
                labels:{
                    color:'white'
                }
            },
            tooltip:{
                bodyColor:'white'
            }
        }
    }
    return (
        <div stye={{height:'300px'}}>
            <Bar data={userGrowth} options={options} />
        </div>
    )
}