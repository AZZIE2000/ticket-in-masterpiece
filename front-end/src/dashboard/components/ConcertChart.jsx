import React from 'react'
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
export default function ConcertChart() {
    const { graph } = useContext(AdminContext)


    const [options, setOptions] = useState({
        chart: {
            id: 'basic-line'
        },
        xaxis: {
            categories: []
        },



        tooltip: {
            theme: 'dark',
        }
    });
    const [series, setSeries] = useState([{
        name: 'Sold Ticket',
        data: []
    }]);
    useEffect(() => {
        console.log('graph ======', graph);

        if (graph && graph.data) {
            setOptions({
                ...options, xaxis: {
                    categories: graph.data[1]
                },

            });
            setSeries([{
                name: 'Sold Ticket',
                data: graph.data[0]
            }]);
        }




    }, [graph])
    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>


            <p className='text-2xl '>Sold Tickets</p>
            {
                graph.length === 0 ?
                    <p className='text-center text-5xl '>No Sales Yet</p>
                    : <Chart options={options} series={series} type="line" height={350} />
            }


        </div>
    )
}
