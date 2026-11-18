import { useNavigate } from "react-router-dom";

export default function ProductDetails(){

    const navigate = useNavigate();

    return(
        <div className=" bg-slate-50 min-h-screen" >  

            {/* breadcrumb */}
            <div className="bg-white border-b border-slate-200 " >

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" >
                    <nav className="text-xs text-slate-400 flex items-center gap-2" >
                        <button onClick={()=>navigate("/")} className="hover:text-indigo-600 transition-colors"  >Home</button>
                        <span>/</span>
                        <button onClick={()=>navigate("/products")} className="hover:text-indigo-600 transition-colors"  >Products</button>
                        <span>/</span>
                        <span className="text-slate-700 font-medium" >Premium Wireless Headphones</span>
                    </nav>
                </div>

            </div>


            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-10" >

                <div className="grid lg:grid-cols-2 gap-12 " >


                    {/* image gallery */}
                    <div>
                        <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-sm mb-4" >
                            <img src="https://picsum.photos/seed/headphones/600/600" alt="" className="w-full h-full object-cover " />
                            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full " >SALE</span>
                        </div>

                        <div className="grid grid-cols-4 gap-3" >
                            <button className="aspect-square rounded-xl overflow-hidden border-2 border-indigo-600 shadow-md " >
                                <img src="https://picsum.photos/seed/headphones1/200/200" alt=""  className="w-full h-full object-cover" />
                            </button>
                            <button className="aspect-square rounded-xl overflow-hidden border-2 border-transparent shadow-md " >
                                <img src="https://picsum.photos/seed/headphones2/200/200" alt=""  className="w-full h-full object-cover" />
                            </button>
                            <button className="aspect-square rounded-xl overflow-hidden border-2 border-transparent shadow-md " >
                                <img src="https://picsum.photos/seed/headphones3/200/200" alt=""  className="w-full h-full object-cover" />
                            </button>
                            <button className="aspect-square rounded-xl overflow-hidden border-2 border-transparent shadow-md " >
                                <img src="https://picsum.photos/seed/headphones4/200/200" alt=""  className="w-full h-full object-cover" />
                            </button>
                        </div>
                    </div>


                    {/* product info */}

                    <div className="flex flex-col gap-5" >

                        <div>
                            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2" >Electronics</p>
                            <h1 className="text-3xl font-bold text-slate-900 leading-tight mb-3" >Premium Wireless Headphones</h1>

                            <div className="flex items-center gap-3" >
                                <span className="text-amber-400 text-lg" >★★★★★</span>
                                <span className="text-sm font-semibold text-slate-700" >4.8</span>
                                <span className="text-sm text-slate-400" >( 234 reviews )</span>
                                <span className="text-sm text-emerald-600 font-medium " >In Stock</span>
                            </div>
                        </div>

                        {/* price */}

                        <div className="flex items-baseline gap-3 py-3 border-y border-slate-100" >

                            <span  className="text-4xl font-extrabold text-slate-900" >$149.99</span>
                            <span className="text-xl line-through text-slate-400" > $199.99 </span>

                            <span className="text-sm font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full" >-25% OFF</span>
                        </div>

                        {/* colors */}

                        <div>
                            <p className="text-sm font-semibold text-slate-700 mb-3" >Color</p>

                            <div className="flex items-center gap-3" >
                                <button className="w-8 h-8 rounded-full border-2 border-indigo-600 scale-110 shadow-md" style={{ backgroundColor: "#1e293b" , outline: "2px solid #e2e8f0" , outlineOffset: "2px"  }}  />
                                <button className="w-8 h-8 rounded-full border-2 border-transparent scale-110 shadow-md" style={{ backgroundColor: "#f8fafc" , outline: "2px solid #e2e8f0" , outlineOffset: "2px"  }}  />
                                <button className="w-8 h-8 rounded-full border-2 border-transparent scale-110 shadow-md" style={{ backgroundColor: "#4f46e5" , outline: "2px solid #e2e8f0" , outlineOffset: "2px"  }}  />
                            </div>
                        </div>

                        {/* sizes */}


                        <div>
                            <div className="flex items-center justify-between mb-3 ">
                                <p className="text-sm font-semibold text-slate-700 mb-3" >Color</p>
                                <button className=" text-xs text-indigo-600 hover:underline" >Size Guide</button>
                            </div>

                            <div className="flex flex-wrap gap-2" >
                                <button className="px-4 py-2 rounded-lg border border-slate-200 font-medium text-sm text-slate-600 hover:border-indigo-600" >XS</button>
                                <button className="px-4 py-2 rounded-lg border border-slate-200 font-medium text-sm text-slate-600 hover:border-indigo-600" >S</button>
                                <button className="px-4 py-2 rounded-lg border border-slate-200 font-medium text-sm text-white hover:border-indigo-600 bg-indigo-600 " >M</button>
                                <button className="px-4 py-2 rounded-lg border border-slate-200 font-medium text-sm text-slate-600 hover:border-indigo-600" >L</button>
                                <button className="px-4 py-2 rounded-lg border border-slate-200 font-medium text-sm text-slate-600 hover:border-indigo-600" >XL</button>
                            </div>
                        </div>

                        {/* quantity */}

                        <div>
                            <p className="text-sm font-semibold text-slate-700 mb-3" >Quantity</p>

                            <div className="flex items-center gap-3" >

                                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden " >
                                    <button className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium text-lg transition-colors " >-</button>
                                    <span className="px-5 py-2.5 text-slate-900 font-semibold text-sm border-x border-slate-200 min-w-12 text-center" >1</span>
                                    <button className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium text-lg transition-colors " >+</button>
                                </div>

                                <p className="text-xs text-slate-400" >Only 12 left in stock</p>

                            </div>
                        </div>


                        {/* cta */}

                        <div className="flex flex-col sm:flex-row gap-3" >

                            <button onClick={()=>navigate("/cart")}  className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-800 text-white rounded-xl font-semibold text-sm" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                Add to cart
                            </button>

                            <button onClick={()=>navigate("/cart")}  className="flex-1 py-3.5 bg-slate-900 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl">
                                Buy Now
                            </button>

                            <button className="p-3.5 border border-slate-200 hover:border-rose-400 hover:text-rose-500 text-slate-400 rounded-xl" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>

                            </button>
                        </div>

                    </div>

                </div>



                {/* description */}

                <div className="mt-14 max-w-3xl " >

                    <h2 className=" text-xl font-bold text-slate-900  mb-4 " >Product Description</h2>
                    <p className="text-slate-600 leading-relaxed mb-6" >
                        Experience crystal-clear audio with our premium wireless headphones. Featuring 30-hour battery life, active noise cancellation, and ultra-comfortable memory foam ear cushions. Perfect for music lovers, remote workers, and frequent travelers.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 ">

                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm " >
                                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </div>

                                <span className="text-sm font-medium text-slate-700" >30hr battery life</span>

                            </div>
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm " >
                                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </div>

                                <span className="text-sm font-medium text-slate-700" >Active Noise Cancellation</span>

                            </div>
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm " >
                                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </div>

                                <span className="text-sm font-medium text-slate-700" >Bluetooth 5.2</span>

                            </div>
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm " >
                                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </div>

                                <span className="text-sm font-medium text-slate-700" >USB-C Charging</span>

                            </div>

                    </div>

                </div>


                 {/* description */}

                <div className="mt-14 max-w-3xl " >

                    <h2 className=" text-xl font-bold text-slate-900  mb-4 " >Customer Reviews</h2>

                    <div className="grid sm:grid-cols-2 gap-3 ">


                        <div className="bg-white rounded-2xl shadow-sm p-5" >

                            <div className="flex items-start justify-between mb-3" >

                                <div className="flex items-center gap-3" >
                                    <img src="https://picsum.photos/seed/user2/80/80" alt="" className="w-10 h-10 rounded-full object-cover"  />

                                    <div>
                                        <p className="text-sm font-semibold text-slate-900" >Ahmed Ben ahmed.</p>
                                        <p className="text-xs text-slate-400" > Dec 12, 2024 </p>
                                    </div>
                                </div>

                                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium" > ✓ Verified </span>

                            </div>

                            <div className="text-amber-400 text-sm mb-2" >★★★★★</div>

                            <p className="text-sm text-slate-600 leading-relaxed" >Absolutely love this product! The quality is exceptional and it arrived faster than expected. Will definitely buy again.</p>


                        </div>
                        <div className="bg-white rounded-2xl shadow-sm p-5" >

                            <div className="flex items-start justify-between mb-3" >

                                <div className="flex items-center gap-3" >
                                    <img src="https://picsum.photos/seed/user3/80/80" alt="" className="w-10 h-10 rounded-full object-cover"  />

                                    <div>
                                        <p className="text-sm font-semibold text-slate-900" >Karim M.</p>
                                        <p className="text-xs text-slate-400" > Dec 12, 2024 </p>
                                    </div>
                                </div>

                                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium" > ✓ Verified </span>

                            </div>

                            <div className="text-amber-400 text-sm mb-2" >★★★★★</div>

                            <p className="text-sm text-slate-600 leading-relaxed" >Absolutely love this product! The quality is exceptional and it arrived faster than expected. Will definitely buy again.</p>


                        </div>
                        <div className="bg-white rounded-2xl shadow-sm p-5" >

                            <div className="flex items-start justify-between mb-3" >

                                <div className="flex items-center gap-3" >
                                    <img src="https://picsum.photos/seed/user4/80/80" alt="" className="w-10 h-10 rounded-full object-cover"  />

                                    <div>
                                        <p className="text-sm font-semibold text-slate-900" >Amira M.</p>
                                        <p className="text-xs text-slate-400" > Dec 12, 2024 </p>
                                    </div>
                                </div>

                                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium" > ✓ Verified </span>

                            </div>

                            <div className="text-amber-400 text-sm mb-2" >★★★★★</div>

                            <p className="text-sm text-slate-600 leading-relaxed" >Absolutely love this product! The quality is exceptional and it arrived faster than expected. Will definitely buy again.</p>


                        </div>
                        <div className="bg-white rounded-2xl shadow-sm p-5" >

                            <div className="flex items-start justify-between mb-3" >

                                <div className="flex items-center gap-3" >
                                    <img src="https://picsum.photos/seed/user1/80/80" alt="" className="w-10 h-10 rounded-full object-cover"  />

                                    <div>
                                        <p className="text-sm font-semibold text-slate-900" >Sarah M.</p>
                                        <p className="text-xs text-slate-400" > Dec 12, 2024 </p>
                                    </div>
                                </div>

                                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium" > ✓ Verified </span>

                            </div>

                            <div className="text-amber-400 text-sm mb-2" >★★★★★</div>

                            <p className="text-sm text-slate-600 leading-relaxed" >Absolutely love this product! The quality is exceptional and it arrived faster than expected. Will definitely buy again.</p>


                        </div>


                    </div>

                </div>


                {/* related */}

                <div className="mt-16" >
                    <h2 className="text-xl font-bold text-slate-900 mb-6" >You May Also Like</h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 ">

                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                              
                            </div>

                            <div className="p-4" >
                               
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                               
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                 
                                </div>
                            </div>

                        </div>
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum1/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                              
                            </div>

                            <div className="p-4" >
                               
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                               
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                 
                                </div>
                            </div>

                        </div>
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum2/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                              
                            </div>

                            <div className="p-4" >
                               
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                               
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                 
                                </div>
                            </div>

                        </div>
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer " >
                            
                            <div className="relative overflow-hidden aspect-square" onClick={()=>navigate("/product/1")}>
                                <img src="https://picsum.photos/seed/picsum3/400/400"   alt="product img" className="w-full h-full object-cover group-hover:scal-105 transition-transform duration-500 "  />
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full " >SALE</span>
                              
                            </div>

                            <div className="p-4" >
                               
                                <h3 className=" text-sm font-semibold text-slate-900 mb-2 hover:text-indigo-600  transition-colors cursor-pointer" onClick={() =>navigate("/product/1")}  > Premium Wireless Headphones </h3>
                               
                                <div className="flex items-center justify-between" >
                                    <div className="flex items-baseline gap-2" >
                                        <span className="text-base font-bold text-slate-900" >$149.99</span>
                                        <span className="text-xs text-slate-400 line-through " >$149.99</span>
                                    </div>

                                 
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )


}