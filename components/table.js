"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  async function fetchDetails() {
    const query = await axios.get("http://localhost:8080/");
    console.log("query", query);
  }
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div>
      {data && (
        <table>
          <thead>
            <th>Email</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Passenger Count</th>
          </thead>
          <tbody>
            {data.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{data.email}</td>
                  <td>{data.homeLocation}</td>
                  <td>{data.destination}</td>
                  <td>{data.departureDate}</td>
                  <td>{data.passengerCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
