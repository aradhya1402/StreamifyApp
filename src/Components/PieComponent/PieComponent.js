import { Legend, plugins, Tooltip } from "chart.js";
import { color } from "chart.js/helpers";
import React from "react";
import { Pie } from "react-chartjs-2";

export const PieComponent =({chartData}) =>{
   
    const revenue={
        labels:Object.keys(chartData),
        datasets: [
            {
            label:"Total Users",
            data: Object.values(chartData),
            backgroundColor: [
                '#073980',
                '#008E97'
            ],
            borderColor:[
                '#073980',
                '#008E97'
            ],
            borderWidth:1
            

            },
          
        ]
    };
    const options = {
        responsive:true,
        plugins:{
            legend:{
                position:'top',
                labels: {
                    color:'white',
                    font:{
                    size:18,
                    
                }
            }

            },
            tooltip:{
                enabled:true,
                mode:'index',
                intersect:false
            }
        }
    }
    return (
        <div style={{height:'300px'}}>
            <Pie data={revenue} options={options} />
        </div>
    )
}