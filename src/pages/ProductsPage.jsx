import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react'
import React from 'react'
import { CategoryDistributionChart, Header, ProductsTable, SalesTrendChart, StatCard } from '../components'
import { motion } from 'framer-motion'

function ProductsPage() {
  return (
    <div className='flex-1 relative overflow-auto z-10'>
        <Header title='Products' />

        <main className='max-w-7xl mx-auto py-6 lg:px-8 px-4'>
        <motion.div
            className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial = {{ opacity: 0, y:20}}
            animate = {{ opacity: 1, y:0}}
            transition = {{ duration: 1}}
            >
              <StatCard title='Total Products' icon={Package} value={1234} color='#6366F1' />
					    <StatCard title='Top Selling' icon={TrendingUp} value={89} color='#10B981' />
					    <StatCard title='Low Stock' icon={AlertTriangle} value={23} color='#F59E0B' />
					    <StatCard title='Total Revenue' icon={DollarSign} value={"$543,210"} color='#EF4444' />
            </motion.div>

                <ProductsTable />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <CategoryDistributionChart />
                <SalesTrendChart />
            </div>
        </main>
        
    </div>
  )
}

export default ProductsPage