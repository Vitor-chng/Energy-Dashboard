import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const EnergyChart = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/consumo');
                const data = await response.json();
                setChartData({
                    labels: data.map(item => new Date(item.timestamp).toLocaleDateString()),
                    datasets: [
                        {
                            label: 'Consumo de Energia',
                            data: data.map(item => item.valor),
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }
                    ]
                });
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Consumo de Energia</h2>
            <Line data={chartData} options={{ scales: { y: { beginAtZero: true } } }} />
        </div>
    );
};

export default EnergyChart;
