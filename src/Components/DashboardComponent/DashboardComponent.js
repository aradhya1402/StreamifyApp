import React from "react";
import streamApp from '../../streamApp.json';
import { LineComponent } from '../LineComponent/LineComponent';
import { PieComponent } from '../PieComponent/PieComponent';
import { StreamChart } from '../StreamChart/StreamChart';
import './DashboardComponent.css'
import { TableComponent } from "./TableComponent/TableComponent";

export const DashBoardComponent = () => {
    // console.log(streamApp.chartsData.userGrowth)
    let keyMetrics = streamApp.keymetrics;
    let chartData = streamApp.chartsData;
   

    return (
        <div>
           
            <div className="container-fluid bg-dark text-light custom-full-height">
            <h1 className="text-center">Welcome to Streamify!</h1>
            <div className="streamify-progress-cards">
                
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg">
                    <div className="user-label">Total Users</div>
                    <div>{keyMetrics.noOfUsers}</div>
                </div>
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg">
                    <div className="user-label">Active Users</div>
                    <div>{keyMetrics.activeUsers}</div>

                </div>
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg" >
                    <div className="user-label">Total Streams</div>
                    <div>{keyMetrics.totalStreams}</div>

                </div>
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg" >
                    <div className="user-label">Revenue</div>
                    <div>{keyMetrics.revenue}</div>

                </div>
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg" >
                    <div className="user-label">Premium Subscription</div>
                    <div>{keyMetrics.premiumSubscriptions}</div>

                </div>
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg" >
                    <div className="user-label">Average Screen Time</div>
                    <div>{keyMetrics.averageStreamTime}</div>

                </div>
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg" >
                    <div className="user-label">User Growh Rate</div>
                    <div>{keyMetrics.userGrowthRate}</div>

                </div>
                
            </div>
            <div className="streamify-charts d-flex flex-wrap justify-content-between">
                <div className="container user-growth-chart ">
                    <div className="row justify-content-end mt-4 "> 
                        <div className="col-lg-8 ml-auto">
                            <div className="card-header text-center bg-gradient-primary text-light">
                                <h2> User Growth Chart </h2>
                            </div>
                            <div className="card-body p-3 border border-info rounded">
                                <LineComponent chartData={chartData.userGrowth} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container revenue-chart">
                    <div className="row mt-4">
                        <div className="col-lg-8">
                            <div className="card-header text-center bg-gradient-primary text-light">
                                <h2>Revenue Chart</h2>
                            </div>
                            <div className="card-body p-3 border border-info rounded d-flex justify-content-center">
                            <PieComponent chartData={chartData.revenueDistribution} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container float-right">
                    <div className="row justify-content-end mt-4">
                        <div className="col-lg-8 ml-auto">
                            <div className="card-header text-center bg-dark text-light">
                                <h2>Top Songs</h2>
                            </div>
                            <div className="card-body p-3 border border-info rounded">
                            <StreamChart chartData={chartData.topSongs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        </div>
    )

}