import React from 'react';
import { Navbar } from '@/components/layout/Navbar';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {/* Dashboard content will be implemented later */}
      </main>
    </div>
  );
}