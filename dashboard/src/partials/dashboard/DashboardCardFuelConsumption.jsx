import React from 'react';
import FuelConsumptionChart from '../../charts/FuelConsumptionChart';
import { tailwindConfig } from '../../utils/Utils';

function SummaryComponent({ data, isPeer }) {
    // Calculate average fuel consumption
    const fuelConsumptionAvg = data.datasets[0].data.reduce((a, b) => a + b, 0) / data.datasets[0].data.length;
    const formattedFuelConsumption = Math.round(fuelConsumptionAvg * 10) / 10;

    // Define color based on whether it's peer data or not
    const fuelColor = isPeer ? tailwindConfig().theme.colors.purple[500] : tailwindConfig().theme.colors.blue[500];

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
            <span style={{ color: fuelColor, fontWeight: 'bold' }}>
                {formattedFuelConsumption} MPG Average Fuel Consumption
            </span>
        </div>
    );
}

function DashboardCardFuelConsumption() {
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Fuel Consumption',
                data: [7.8, 7.5, 7.0, 7.3, 6.8, 7.9],
                backgroundColor: tailwindConfig().theme.colors.blue[500],
                borderColor: tailwindConfig().theme.colors.blue[700],
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: tailwindConfig().theme.colors.blue[300],
                pointBorderColor: tailwindConfig().theme.colors.blue[700],
                pointRadius: 5,
                pointHoverRadius: 7
            }
        ]
    };

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Fuel Consumption Over Time</h2>
            </header>
            <div className="px-5 py-3">
                <SummaryComponent data={chartData} />
                <FuelConsumptionChart data={chartData} width={600} height={350} />
            </div>
            <div style={{ backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '4px', margin: '20px' }}>
                <p style={{ color: '#333', fontSize: '14px' }}>Suggestion: Don't be in a hurry during the driving time, please try to keep the speed smooth to save gas.</p>
            </div>
        </div>
    );
}

export default DashboardCardFuelConsumption;