import {motion} from "framer-motion"

function StatCard({title, value, icon: Icon, color}) {
  return (
    <motion.div
    className="bg-zinc-800 bg-opacity-50 backdrop-blur-md overflow-hidden rounded-xl shadow-lg border border-zinc-700"
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)" }}
    >
        <div className="px-4 py-5 sm:px-6">
            <span className="flex items-center text-sm font-medium text-zinc-400 gap-2">
                <Icon size={24} style = {{color}} />
                {title}
            </span>
            <p className="mt-1 text-3xl font-bold text-zinc-100">{value}</p>
        </div>
    </motion.div>
  )
}

export default StatCard