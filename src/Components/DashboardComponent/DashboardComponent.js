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
    let tableData = streamApp.dataTable;

    return (
        <div>
            <h1 className="text-center">Welcome to Streamify!</h1>
            <div className="container-fluid bg-dark text-light min-vh-100">
            <div className="d-flex justify-content-between streamify-progress-cards">
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg">
                    <h3>Total Users</h3>
                    <div>{keyMetrics.noOfUsers}</div>
                </div>
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg">
                    <h3>Active Users</h3>
                    <div>{keyMetrics.activeUsers}</div>

                </div>
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg">
                    <h3>Total Streams</h3>
                    <div>{keyMetrics.totalStreams}</div>

                </div>
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg">
                    <h3>Revenue</h3>
                    <div>{keyMetrics.revenue}</div>

                </div>
                <div className="card user-card text-center p-3 bg-primary text-light shadow-lg">
                    <h3>Top Artist</h3>
                    <div>{keyMetrics.topArtist}</div>

                </div>
            </div>
            <div className="streamify-charts d-flex flex-wrap justify-content-between">
                <div className="container user-growth-chart ">
                    <div className="row justify-content-end mt-4 "> 
                        <div className="col-lg-8 ml-auto">
                            <div className="card-header text-center bg-gradient-primary text-light">
                                <h2> User Growth Chart </h2>
                            </div>
                            <div className="card-body">
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
                            <div className="card-body ">
                            <PieComponent chartData={chartData.revenueDistribution} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container revenue-chart float-right">
                    <div className="row justify-content-end mt-4">
                        <div className="col-lg-8 ml-auto">
                            <div className="card-header text-center bg-dark text-light">
                                <h2>Top Songs</h2>
                            </div>
                            <div className="card-body">
                            <StreamChart chartData={chartData.topSongs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="streamify-table streamify-table bg-dark text-light p-3 shadow-lg">
                <TableComponent tableData={tableData} />

            </div>
        </div>
        </div>
    )

}