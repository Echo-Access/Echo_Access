import React from 'react'

function Navbar() {
    return (
        <div className='fixed bg-primary w-full'>
            <div className='flex justify-between font-Roboto p-3'>
                <div className='font-bold text-white'>Echo Access</div>
                <div className='flex justify-between'>
                    <NavbarLinks name='Sign In' link='/auth' />
                    <NavbarLinks name='Sign Up' link='/auth'/>
                    <NavbarLinks name='About' link='/about'/>
                    <NavbarLinks name='Contact' link='/contact'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar


function NavbarLinks(props) {
    return (
        <div className='px-4 text-white'>
            <a href={props.link}>
                {props.name}
            </a>
        </div>
    );
}