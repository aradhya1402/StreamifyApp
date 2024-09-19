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
        scales: {
            y: {
                ticks: {
                    color: "white",
                    font: {
                        size:18
                    },
                    
                    beginAtZero: true
                }
            },
            x: {
                ticks: {
                    color: "white",
                    font: {
                        size: 18},
                   
                    beginAtZero: true
                }
            }
        },
        plugins:{
            legend:{
                labels:{
                    color:'white',
                    font: {
                        size:'20px'
                    }
                }
            },
            tooltip:{
                bodyColor:'white'
            }
        }
    }
    return (
        <div style={{height:'40vh'}}>
            <Bar data={userGrowth} options={options} />
        </div>
    )
}