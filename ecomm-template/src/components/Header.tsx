import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [ menuOpen, setMenuOpen ] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm" >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >

                    <div className="flex  items-center justify-between h-16">
                        <Link to="/">
                            <span className="text-lg font-bold text-slate-900" >Shop <span className="text-indigo-600">Lux</span> </span>
                        </Link> 

                        <div className="hidden  md:flex items-center gap-8">

                            <Link to="/"  className="text-sm font-medium transition-colors duration-200 text-slate-600 hover:text-indigo-600" > Home </Link>
                            <Link to="/products" className="text-sm font-medium transition-colors duration-200 text-slate-600 hover:text-indigo-600" > Products </Link>
                            <Link to="/categories" className="text-sm font-medium transition-colors duration-200 text-slate-600 hover:text-indigo-600" > Categories </Link>
                            <Link to="/about" className="text-sm font-medium transition-colors duration-200 text-slate-600 hover:text-indigo-600" > About </Link>

                        </div>

                        <div className="flex items-center gap-2" >
                            <Link to="/cart" className="relative p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors" >
                            
                                <svg className="w-5 h-5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>

                                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-indigo-600 text-white text-xs rounded-full  flex items-center justify-center font-medium" >3</span>

                            </Link>

                            <button
                                className="md:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-lg"
                                onClick={()=>setMenuOpen( o=>!o )}
                                aria-label="Toggle menu"
                            >

                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </button>
                        </div>
                    </div>

                {
                    menuOpen && (
                        <div className="md:hidden border-t border-slate-100 py-3 flex flex-col gap-1" >
                            <Link to="/" className="block px-4 py-2 rounded-lg"  onClick={()=> setMenuOpen(false)} > Home </Link>
                            <Link to="/products" className="block px-4 py-2 rounded-lg"  onClick={()=> setMenuOpen(false)} > Products </Link>
                            <Link to="/categories" className="block px-4 py-2 rounded-lg"  onClick={()=> setMenuOpen(false)} > Categories </Link>
                            <Link to="/about" className="block px-4 py-2 rounded-lg"  onClick={()=> setMenuOpen(false)} > About </Link>
                        </div>
                    )
                }

            </div>
        
        </nav>
    )

}