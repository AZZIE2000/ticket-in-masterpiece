import React from 'react'
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
export default function ConcertChart() {
    const { graph } = useContext(AdminContext)
    useEffect(() => {
        console.log('graph ======', graph);
    }, [graph])
    const [options, setOptions] = useState({
        chart: {
            id: 'basic-line'
        },
        xaxis: {
            categories: graph?.data[1]
        },
        theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            }
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        markers: {
            style: 'inverted',
            size: 6
        },
        tooltip: {
            theme: 'dark'
        }
    });
    const [series, setSeries] = useState([{
        name: 'series-1',
        data: graph?.data[0]
    }]);
    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>


            <p className='text-2xl'>Sold Tickets</p>
            <Chart options={options} series={series} type="line" height={350} />

        </div>
    )
}
