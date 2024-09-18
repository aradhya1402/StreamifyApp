import { color } from "chart.js/helpers";
import React from "react";
import { Line } from "react-chartjs-2";

export const LineComponent =({chartData}) =>{
    
    const userGrowth={
        labels:chartData.months,
        datasets: [
            {
            label:"Total Users",
            data: chartData.totalUsers,
            fill:false,
            borderColor:"rgba(75,192,192,1)",
            tension:0.4

            },
            {
                label:"Active Users",
                data:chartData.activeUsers,
                fill:false,
                borderColor:"rgba(153,102,255,1)",
                tension:0.4

            }
        ]
    };
    const options= { 
        plugins:{
            legend: {
            labels: {
                color: "white",
                font:{
                    size:18
                }
            }
        }
    },
        scales: {
            y: {
                ticks: {
                    color: "white",
                    font: {
                        size:18
                    },
                    stepSize: 1,
                    beginAtZero: true
                }
            },
            x: {
                ticks: {
                    color: "white",
                    font: {
                        size: 18},
                    stepSize: 1,
                    beginAtZero: true
                }
            }
        }
    
    }
    return (
        <div style={{height:'400px'}} className="bg-dark shadow">
            <Line data={userGrowth} options={options} />
        </div>
    )
}