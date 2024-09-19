import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TableComponent.css'

export const TableComponent = ({ tableData }) => {

    const [filteredData, setFilteredData] = useState(tableData);
    const [sortOrder, setSortOrder] = useState({ column: null, order: 'asc' });
    const [filters, setFilters] = useState({ songName: '', artist: '' })

    const handleFilters = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => {
            const updatedFilters = { ...prevFilters, [name]: value };

            let filtered = tableData.filter((row) => {
                return row.songName.toLowerCase().includes(updatedFilters.songName.toLowerCase()) &&
                    row.artist.toLowerCase().includes(updatedFilters.artist.toLowerCase());
            })
            setFilteredData(filtered);
            return updatedFilters

        })
    }

    const handleSort = (column) => {
        let newOrder = sortOrder.column === column && sortOrder.order === 'desc' ? 'asc' : 'desc';
        let sortedData = [...filteredData];
        
       
        sortedData.sort((a, b) => {
            if (column === 'dateStreamed') {
                return newOrder === 'asc' ? new Date(a[column]) - new Date(b[column]) : new Date(b[column]) - new Date(a[column])
            }
            else {
                return newOrder === 'asc' ? a[column] - b[column] : b[column] - a[column]
            }
        })
        setFilteredData(sortedData)
        setSortOrder({column,order:newOrder})


    }

    return (
        <div className="container mt-4">
            <h2 className="text-light">Recent Streams</h2>
            <table className="table table-dark table-striped table-hover">
                <div className="d-flex mb-3">
                    <input
                        type="text"
                        name="songName"
                        className="form-control me-2"
                        placeholder="Filter by Song Name"
                        value={filters.songName}
                        onChange={(e) => handleFilters(e)} />
                    <input
                        type="text"
                        name="artist"
                        className="form-control me-2"
                        placeholder="Filter by Artist"
                        value={filters.artist}
                        onChange={(e) => handleFilters(e)} />

                </div>
                <thead className="table-custom-header">
                    <tr>
                        <th scope="col">Song Name</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Date Streamed
                            <button className='btn btn-sm btn-outline-light' onClick={() => handleSort('dateStreamed')}>
                            Sort {sortOrder.column === 'dateStreamed' ? (sortOrder.order === 'asc' ? '↓' : '↑') : ''}
                            </button>
                        </th>
                        <th scope="col">Stream Count
                            <button className="btn btn-small btn-outline-light" onClick={() => handleSort('streamCount')}>
                                Sort {sortOrder.column==='streamCount'?(sortOrder.order==='asc'?'↓' : '↑') :''}
                                </button>
                        </th>
                        <th scope="col">User ID</th>
                    </tr>
                </thead>
                <tbody className="table-custom-row">
                    {filteredData && filteredData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.songName}</td>
                            <td>{row.artist}</td>
                            <td>{row.dateStreamed}</td>
                            <td>{row.streamCount}</td>
                            <td>{row.userID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}