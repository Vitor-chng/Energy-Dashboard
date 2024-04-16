import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const EnergyChart = ({dataPessoas,dataEnergia}) => {
    const [chartData, setChartData] = useState({});

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3001/consumo');
    //             const data = await response.json();
    //             setChartData({
    //                 labels: data.map(item => new Date(item.timestamp).toLocaleDateString()),
    //                 datasets: [
    //                     {
    //                         label: 'Consumo de Energia',
    //                         data: data.map(item => item.valor),
    //                         borderColor: 'rgb(75, 192, 192)',
    //                         tension: 0.1
    //                     }
    //                 ]
    //             });
    //         } catch (error) {
    //             console.error('Erro ao buscar dados:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);


    const data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",  "21", "22", "23"],
        datasets: [
          {
            label: "Energia",
            data: dataEnergia,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Eessoas",
            data: dataPessoas,
            fill: false,
            borderColor: "#742774"
          }
        ]
      };

    return (
        <div>
            <h2>Consumo de Energia</h2>
            <Line data={data} options={{ scales: { y: { beginAtZero: true } } }} />
        </div>
    );
};

export default EnergyChart;
