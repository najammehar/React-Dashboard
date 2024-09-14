import { motion } from "framer-motion";
import { LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";

const salesData = [
	{ name: "Jul", sales: 4200 },
	{ name: "Aug", sales: 3800 },
	{ name: "Sep", sales: 5100 },
	{ name: "Oct", sales: 4600 },
	{ name: "Nov", sales: 5400 },
	{ name: "Dec", sales: 7200 },
	{ name: "Jan", sales: 6100 },
	{ name: "Feb", sales: 5900 },
	{ name: "Mar", sales: 6800 },
	{ name: "Apr", sales: 6300 },
	{ name: "May", sales: 7100 },
	{ name: "Jun", sales: 7500 },
];

const SalesOverviewChart = () => {
    return (
        <motion.div
        className="bg-zinc-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-zinc-700 p-6"
        initial = {{ opacity: 0, y:20}}
        animate = {{ opacity: 1, y:0}}
        transition = {{ delay: 0.2 }}
        >
            <h2 className='text-lg font-medium mb-4 text-zinc-100'>Sales Overview</h2>
            <div className="h-80">
                <ResponsiveContainer>
                    <LineChart data={salesData} >
                        <CartesianGrid strokeDasharray='3 3' stroke="#4b5563"/>
                        <XAxis dataKey='name' stroke="#9ca3af"/>
                        <YAxis stroke="#9ca3af"/>
                        <Tooltip 
                            contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Line 
                        type='natural' 
                        dataKey='sales' 
                        stroke='#6366F1' 
                        strokeWidth={2}
                        dot={{ fill: '#6366F1', strokeWidth: 2, r: 4}}
                        activeDot={{ r: 6, strokeWidth:2}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default SalesOverviewChart;