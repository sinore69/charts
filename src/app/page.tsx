'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  ChartOptions,
  Legend,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Card, CardContent } from '@/components/ui/card';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, TimeScale, Tooltip, Legend);

export default function HomePage() {
  const [data, setData] = useState<{ timestamp: string; duration: number }[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/latency');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, [])
  if (data === undefined) { return }
  const chartData = {
    labels: data.map((d) => d.timestamp),
    datasets: [
      {
        label: 'API Duration (Micro seconds)',
        data: data.map((d) => d.duration),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 3,
      },
    ],
  };


  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'second' as const,
        },
        ticks: {
          maxTicksLimit: 10,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'μs',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <Card className="w-full max-w-6xl shadow-xl">
        <CardContent>
          <h1 className="text-2xl font-semibold mb-4 text-center">API Latency Chart</h1>
          <Line data={chartData} options={options} />
        </CardContent>
      </Card>
    </main>
  );
}
