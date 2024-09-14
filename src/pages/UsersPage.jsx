import React from 'react'
import { Header, StatCard, UserActivityHeatmap, UserDemographicsChart, UserGrowthChart, UsersTable } from '../components'
import { motion } from 'framer-motion'
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react';

const userStats = {
	totalUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	churnRate: "2.4%",
};

function UsersPage() {
  return (
    <div className='flex-1 relative overflow-auto z-10'>
        <Header title='Users' />

        <main className='max-w-7xl mx-auto py-6 lg:px-8 px-4'>
        <motion.div
            className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial = {{ opacity: 0, y:20}}
            animate = {{ opacity: 1, y:0}}
            transition = {{ duration: 1}}
            >
                <StatCard
						title='Total Users'
						icon={UsersIcon}
						value={userStats.totalUsers.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard title='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
					<StatCard
						title='Active Users'
						icon={UserCheck}
						value={userStats.activeUsers.toLocaleString()}
						color='#F59E0B'
					/>
					<StatCard title='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
            </motion.div>

            <UsersTable />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                <UserGrowthChart />
                <UserActivityHeatmap />
            </div>

            <UserDemographicsChart />

        </main>
    </div>
  )
}

export default UsersPage