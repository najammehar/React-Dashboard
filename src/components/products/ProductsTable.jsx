import React from 'react'
import { motion } from 'framer-motion';
import { Edit, Search, Trash2 } from 'lucide-react';

const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

function ProductsTable() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(PRODUCT_DATA);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const results = PRODUCT_DATA.filter((product) =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
    setSearchResults(results);
  }

  return (
    <motion.div
    className='bg-zinc-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-700 mb-8'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <div className='flex justify-between items-center mb-6'>
    <h2 className='text-xl font-semibold text-zinc-100'>Product List</h2>
			<div className='relative'>
				<input
					type='text'
					placeholder='Search products...'
					className='bg-zinc-700 text-white placeholder-zinc-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					onChange={handleSearch}
					value={searchTerm}
				/>
				<Search className='absolute left-3 top-2.5 text-zinc-400' size={18} />
		  </div>
    </div>
    <div className='overflow-x-auto '>
      <table className='min-w-full divide-y divide-zinc-700'>
      <thead>
        <tr>
          <th className='px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider'>Product</th>
          <th className='px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider'>Category</th>
          <th className='px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider'>Price</th>
          <th className='px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider'>Stock</th>
          <th className='px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider'>Sales</th>
          <th className='px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider'>Actions</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-zinc-700'>
        {searchResults.map((product) => (
          <tr key={product.id}>
            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
              <img
								src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
								alt='Product img'
								className='size-10 rounded-full'
							/>
              {product.name}
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-zinc-300'>{product.category}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-zinc-300'>${product.price}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-zinc-300'>{product.stock}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-zinc-300'>{product.sales}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
									</button>
						</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  </motion.div>
  )
}

export default ProductsTable