import React from 'react'

function Footer() {
    return (
        <footer className='h-8 flex justify-center bg-gray-800 text-white fixed bottom-0 w-full'>
            <svg class="animate-bounce mt-1 h-6 w-6 text-white-800" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <path d="M14.5 9a3.5 4 0 1 0 0 6" /></svg>
            <h4 className='mt-1 pl-1'>jelm48@misena.edu.co</h4>
        </footer>
    )
}

export default Footer