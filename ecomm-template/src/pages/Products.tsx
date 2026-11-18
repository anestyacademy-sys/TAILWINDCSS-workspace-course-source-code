import { useNavigate } from "react-router-dom";

export default function Products(){

    const navigate = useNavigate();

    return(
        <div className="bg-slate-50 min-h-screen" >

            {/* page header */}
            <div className="bg-white border-b border-slate-200" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" >
                    <nav className="text-xs text-slate-400 mb-3 flex items-center gap-2" >
                        <button className="hover:text-indigo-600 transition-colors" onClick={()=>navigate("/")}  >Home</button>
                        <span>/</span>
                        <span className="text-slate-700 font-medium" >Products</span>
                    </nav>

                    <h1 className="text-3xl font-bold text-slate-900" >All Products</h1>
                    <p className="text-slate-500 mt-1" >12 results found</p>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8" >

                {/* sidebar */}


                <div className="hidden lg:block w-64 shrink-0 space-y-5" >

                    {/* category */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm" >
                        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide" > Category</h3>

                        <div className="space-y-2.5" >
                            <label className="flex items-center gap-3 cursor-pointer" >
                                <input type="checkbox" defaultChecked  className="accent-indigo-600 w-4 h-4" />
                                <span className="text-sm text-slate-600" >All</span>
                                <span className="ml-auto text-xs text-slate-400" >12</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer" >
                                <input type="checkbox"   className="accent-indigo-600 w-4 h-4" />
                                <span className="text-sm text-slate-600" >Electronics</span>
                                <span className="ml-auto text-xs text-slate-400" >2</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer" >
                                <input type="checkbox"   className="accent-indigo-600 w-4 h-4" />
                                <span className="text-sm text-slate-600" >Fashion</span>
                                <span className="ml-auto text-xs text-slate-400" >5</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer" >
                                <input type="checkbox"   className="accent-indigo-600 w-4 h-4" />
                                <span className="text-sm text-slate-600" >Home and living</span>
                                <span className="ml-auto text-xs text-slate-400" >3</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer" >
                                <input type="checkbox"   className="accent-indigo-600 w-4 h-4" />
                                <span className="text-sm text-slate-600" >Sport</span>
                                <span className="ml-auto text-xs text-slate-400" >7</span>
                            </label>
                          
                        </div>
                    </div>

                    {/* price rang */}

                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide " >Price Range</h3>
                        <div className="flex items-center justify-between mb-3" >
                            <span className="text-xs text-slate-500" >$0</span>
                            <span className="text-sm font-semibold text-indigo-600" >$1,500</span>
                        </div>

                        <input type="range" min="0" max="1500" defaultValue="800" className="w-full accent-indigo-600 " />

                        <div className="flex items-center gap-2 mt-3" >
                            <div className="flex-1 border border-slate-200 rounded-lg px-3 py-1.5" >
                                <p className="text-xs text-slate-400" >Min</p>
                                <p className="text-sm font-medium text-slate-700" >$0</p>
                            </div>
                            <span className="text-slate-300" >-</span>
                            <div className="flex-1 border border-slate-200 rounded-lg px-3 py-1.5" >
                                <p className="text-xs text-slate-400" >Max</p>
                                <p className="text-sm font-medium text-slate-700" >$1500</p>
                            </div>
                        </div>
                    </div>

                    {/* rating */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide " >Min Rating</h3>

                        <div className="space-y-2.5" >
                            <label className="flex items-center gap-3 cursor-pointer" >
                                <input type="radio" defaultChecked className="accent-indigo-600" />
                                <span className="text-sm text-slate-600">All ratings</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer" >
                                <input type="radio"  className="accent-indigo-600" />
                                <span className="text-sm text-amber-400">★★★★</span>
                                <span className="text-sm text-slate-500">& up</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer" >
                                <input type="radio"  className="accent-indigo-600" />
                                <span className="text-sm text-amber-400">★★★★★</span>
                                <span className="text-sm text-slate-500">& up</span>
                            </label>
                        </div>
                    </div>

                    <button className="w-full py-2.5 border border-slate-200 text-slate-600 hover:bg-slate-200 rounded-xl text-sm font-medium transition-colors" >
                        Reset Filters
                    </button>
                </div>


                {/* main content */}

                <div className="flex-1" >

                    {/* sort bar */}
                    <div className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 shadow-sm mb-6" >
                        <span className="text-sm text-slate-500" ><strong>12</strong> products</span>

                        <div className="flex items-center gap-3" >
                            <label className="text-sm text-slate-500" > Sort by: </label>
                            <select className="text-sm font-medium text-slate-700 border border-slate-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"  name="" id="">
                                <option>Featured</option>
                                <option>Top rated</option>
                                <option>Newest</option>
                                <option>Featured</option>
                                <option>Featured</option>
                                <option>Featured</option>
                            </select>
                        </div>
                    </div>


                    {/* grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 " >

                            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                            </div>

                            <div className="p-4" >
                                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1" >Electorinics</p>
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-amber-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-slate-400" >(234)</span>
                                </div>
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                    <button onClick={()=>navigate("/cart")} className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-mg transition-colors"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>

                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

}