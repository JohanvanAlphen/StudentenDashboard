import { Bar } from "react-chartjs-2";

function ChartStudents({ studentsData }) {
    return (
        <div>
            <Bar
                data={studentsData}
                height={400}
                width={1000}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'start',
                        labels: {
                            boxWidth: 10,
                        },
                    },
                    scales: {
                        y: {
                            max: 5,
                            min: 0,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    },
                }}
            />
        </div>
    );
};

export default ChartStudents