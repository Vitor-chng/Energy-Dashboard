document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3001/consumo')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('energyChart').getContext('2d');
            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(item => new Date(item.timestamp).toLocaleDateString()),
                    datasets: [{
                        label: 'Consumo de Energia',
                        data: data.map(item => item.valor),
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});
