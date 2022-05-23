import React from 'react'
import { Dashboard } from '../../layouts/Dashboard'

export default function Main() {
    console.log('Main')
  return (
    <Dashboard>
        <div className='bg-red-500 h-full w-full'>
            Main page
        </div>
    </Dashboard>
  )
}
