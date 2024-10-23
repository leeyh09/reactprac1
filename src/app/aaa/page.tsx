import Link from 'next/link'
import React from 'react';
import Users from '../user';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <p className="text-7xl">aaaa</p>
        <p className="text-7xl"></p>
        <Link href="/">[Main으로]</Link>
        
        <Users />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
 }
 