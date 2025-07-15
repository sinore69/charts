# 📊 API Latency Chart with Next.js & Chart.js

This project visualizes API response times in real-time using a line chart. The response times are fetched every second from a local endpoint and plotted live on the browser using [Chart.js](https://www.chartjs.org/) with time-based x-axis support.

## 🚀 Features

- 📈 Real-time line chart displaying API response durations
- ⏱ Auto-updating every second
- 🎨 Beautiful UI with Tailwind CSS
- 🕓 Time-scale x-axis using `chartjs-adapter-date-fns`

---

## 🧰 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI**: [Tailwind CSS](https://tailwindcss.com/)
- **Charting**: [Chart.js](https://www.chartjs.org/) with `react-chartjs-2`
- **Date adapter**: `chartjs-adapter-date-fns`

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/api-latency-chart.git
cd api-latency-chart
npm install
```
### 2. Edit the filepath in `route.ts` file
```
 const filePath = 'path/to/logfile.log';
 ```
### 3. Run the project
```
npm run dev
```
### NOTE: Logs in your log file must be in the following format
```
[Timestamp in ms],[Duration in µs]
1752518102171,222215
```