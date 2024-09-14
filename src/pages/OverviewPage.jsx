import React from 'react'
import { CategoryDistributionChart, Header, SalesChannelChart } from '../components'
import { StatCard } from '../components'
import { motion } from 'framer-motion'
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'
import SalesOverviewChart from '../components/overview/SalesOverviewChart'

function OverviewPage() {
  return (
    <div className='flex-1 relative overflow-auto z-10'>
        <Header title='Overview' />
        
        <main className='max-w-7xl mx-auto py-6 lg:px-8 px-4'>
            <motion.div
            className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial = {{ opacity: 0, y:20}}
            animate = {{ opacity: 1, y:0}}
            transition = {{ duration: 1}}
            >
                    <StatCard title='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
					<StatCard title='New Users' icon={Users} value='1,234' color='#8B5CF6' />
					<StatCard title='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
					<StatCard title='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <SalesOverviewChart />
                <CategoryDistributionChart />
                <SalesChannelChart />
            </div>

        </main>
    </div>
  )
}

export default OverviewPage