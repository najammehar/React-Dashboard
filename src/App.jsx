import { Route, Routes } from "react-router-dom"

import { AnalyticsPage, OrdersPage, OverviewPage, ProductsPage, UsersPage, SalesPage, SettingsPage } from "./pages"
import { Sidebar } from "./components"

function App() {

  return (
    <>
      <div className='flex h-screen bg-zinc-900 text-gray-100 overflow-hidden'>

      <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur' />
			</div>
      <Sidebar />
      <Routes>
				<Route path='/' element={<OverviewPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/users' element={<UsersPage />} />
				<Route path='/sales' element={<SalesPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
      </div>
    </>
  )
}

export default App
