import React from 'react';
import { LayoutDashboard, Receipt, PieChart, PlusCircle } from 'lucide-react';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-6">
        <h1 className="text-xl font-bold mb-10 text-purple-500">ExpenseTracker</h1>
        <nav className="space-y-4">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" />
          <NavItem icon={<Receipt size={20}/>} label="Transactions" />
          <NavItem icon={<PieChart size={20}/>} label="Analytics" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Welcome back, Parshant!</h2>
          <button className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
            <PlusCircle size={20} /> Add Transaction
          </button>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Balance" value="₹45,231" color="text-green-400" />
          <StatCard title="Monthly Income" value="₹85,000" color="text-blue-400" />
          <StatCard title="Monthly Expenses" value="₹39,769" color="text-red-400" />
        </div>
        
        {/* Placeholder for Charts */}
        <div className="mt-8 h-64 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-600">
           [Chart Integration Area - Recharts]
        </div>
      </main>
    </div>
  );
}

// Simple sub-component for consistency
const StatCard = ({ title, value, color }) => (
  <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
    <h3 className="text-zinc-400 text-sm">{title}</h3>
    <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
  </div>
);

const NavItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 text-zinc-400 hover:text-white cursor-pointer transition-colors">
    {icon} <span>{label}</span>
  </div>
);

export default Dashboard;
