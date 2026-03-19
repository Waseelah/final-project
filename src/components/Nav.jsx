import React from 'react'


const Nav = () => {
  return (

    <nav className=" flex items-center justify-between md:px-10 sm:px-5 py-2.25 align-center">
        <div className='w-15 h-7 '>
    

     <img src='LOGO.svg' alt="logo" />
            </div>
        
        <div className='hidden md:flex items-center gap-10 text-[13px] text-black' >
            <p>How it works</p>
            <p>Transparency</p>

            <p>Support</p>
        </div>
        <div className='flex items-center gap-8 text-[12px] text-[#111]'>
          <a href="/SignUp">
            <button>Login</button>
            </a>
            <button>About</button>
            
        </div>
       
    </nav>

  )
}


export default Nav;