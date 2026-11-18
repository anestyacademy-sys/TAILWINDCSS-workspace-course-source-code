import { useNavigate } from "react-router-dom";

export default function Categories(){

    const navigate = useNavigate();

    return(

        <div className="bg-slate-50 min-h-screen" >

            {/* page header */}
            <div className="bg-white border-b border-slate-200" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" >
                    <nav className="text-xs text-slate-400 mb-3 flex items-center gap-2" >
                        <button className="hover:text-indigo-600 transition-colors" onClick={()=>navigate("/")}  >Home</button>
                        <span>/</span>
                        <span className="text-slate-700 font-medium" >All Categories</span>
                    </nav>

                    <div className="flex items-end justify-between" >
                        <div>
                            <p className="text-sm font-semibold text-indigo-500 uppercase mb-2" >Browse By</p>
                            <h1 className="text-3xl font-bold text-slate-900" >All Categories</h1>
                            <p className="text-slate-500 mt-1" >Explore our 6 curated collections</p>
                        </div>

                        <button onClick={()=>navigate("/products")} className="text-sm font-semibold text-indigo-600 flex items-center gap-2"  >
                            View All Products
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" >

                {/* Quick pills */}
                <div className="flex flex-wrap gap-3 mb-12" >

                        <button onClick={()=>navigate('/products')}  className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full font-medium text-sm text-slate-700 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 "  >💻 Electronics</button>
                        <button onClick={()=>navigate('/products')}  className="flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full font-medium text-sm text-slate-700 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 "  >👗 Fashion</button>
                        <button onClick={()=>navigate('/products')}  className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full font-medium text-sm text-slate-700 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 "  >🏠 Home & Living</button>
                        <button onClick={()=>navigate('/products')}  className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full font-medium text-sm text-slate-700 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 "  >⚡ Sports</button>
                        <button onClick={()=>navigate('/products')}  className="flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full font-medium text-sm text-slate-700 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 "  >✨ Beauty</button>
                        <button onClick={()=>navigate('/products')}  className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full font-medium text-sm text-slate-700 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 "  >📚 Books</button>

                </div>


                {/* Category cards */}

                <div className=" grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3  gap-6" >

                    {/* electronics */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm  hover:shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer " onClick={()=>navigate("/products")}  >

                        <div className="relative h-44 overflow-hidden" >
                            <img src="https://picsum.photos/seed/electronics-cat/600/400" alt=""  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-indigo-600 opacity-60 " />
                            <div className="absolute  inset-0 flex flex-col items-start justify-end p-5" >
                                <span className="text-3xl mb-1" >💻</span>
                                <h2 className="text-xl font-bold text-white">Electronics</h2>
                                <span className="text-xs text-white/80 font-medium" >240+ products</span>
                            </div>
                            <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex text-white items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity  " >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>

                            </div>
                        </div>

                        <div className="p-5" >
                            <p className="text-sm text-slate-500 leading-relaxed mb-4" >Laptops, headphones, smartphones, smart home devices and more.</p>

                            <div className="flex flex-wrap gap-2" >
                                <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer " >Laptops</span>
                                <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer " >Wearables</span>
                                <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer " >Speakers</span>
                                <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer " >Smartphones</span>
                                <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer " >Headphones</span>
                            </div>
                        </div>


                    </div>

                    {/* Fashion */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => navigate("/products")}>
                        <div className="relative h-44 overflow-hidden">
                        <img src="https://picsum.photos/seed/fashion-cat/600/400" alt="Fashion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-linear-to-br from-pink-500 to-rose-600 opacity-60" />
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
                            <span className="text-3xl mb-1">👗</span>
                            <h2 className="text-xl font-bold text-white">Fashion</h2>
                            <span className="text-xs text-white/80 font-medium">580+ products</span>
                        </div>
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                        </div>
                        <div className="p-5">
                        <p className="text-sm text-slate-500 leading-relaxed mb-4">Clothing, shoes, accessories and everything to elevate your style.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">T-Shirts</span>
                            <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Jackets</span>
                            <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Shoes</span>
                            <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Watches</span>
                            <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Bags</span>
                        </div>
                        </div>
                    </div>

                {/* Home & Living */}
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => navigate("/products")}>
                    <div className="relative h-44 overflow-hidden">
                    <img src="https://picsum.photos/seed/homeliving-cat/600/400" alt="Home" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-linear-to-br from-amber-500 to-orange-600 opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
                        <span className="text-3xl mb-1">🏠</span>
                        <h2 className="text-xl font-bold text-white">Home & Living</h2>
                        <span className="text-xs text-white/80 font-medium">320+ products</span>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                    </div>
                    <div className="p-5">
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">Furniture, lighting, décor, and essentials for a beautiful home.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Furniture</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Lighting</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Bedding</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Kitchen</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Décor</span>
                    </div>
                    </div>
                </div>

                {/* Sports */}
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => navigate("/products")}>
                    <div className="relative h-44 overflow-hidden">
                    <img src="https://picsum.photos/seed/sports-cat/600/400" alt="Sports" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-teal-600 opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
                        <span className="text-3xl mb-1">⚡</span>
                        <h2 className="text-xl font-bold text-white">Sports & Fitness</h2>
                        <span className="text-xs text-white/80 font-medium">190+ products</span>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                    </div>
                    <div className="p-5">
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">Equipment, apparel and gear for every sport and workout.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Yoga</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Running</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Gym</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Outdoor</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Cycling</span>
                    </div>
                    </div>
                </div>

                {/* Beauty */}
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => navigate("/products")}>
                    <div className="relative h-44 overflow-hidden">
                    <img src="https://picsum.photos/seed/beauty-cat/600/400" alt="Beauty" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-linear-to-br from-violet-500 to-purple-600 opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
                        <span className="text-3xl mb-1">✨</span>
                        <h2 className="text-xl font-bold text-white">Beauty & Care</h2>
                        <span className="text-xs text-white/80 font-medium">410+ products</span>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                    </div>
                    <div className="p-5">
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">Skincare, makeup, fragrances and wellness products.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Skincare</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Makeup</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Haircare</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Fragrance</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Wellness</span>
                    </div>
                    </div>
                </div>

                {/* Books */}
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => navigate("/products")}>
                    <div className="relative h-44 overflow-hidden">
                    <img src="https://picsum.photos/seed/books-cat/600/400" alt="Books" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-linear-to-br from-slate-500 to-slate-700 opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
                        <span className="text-3xl mb-1">📚</span>
                        <h2 className="text-xl font-bold text-white">Books & Media</h2>
                        <span className="text-xs text-white/80 font-medium">870+ products</span>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                    </div>
                    <div className="p-5">
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">Books, e-books, music, films and educational content.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Fiction</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Non-Fiction</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Science</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Art</span>
                        <span className="text-xs text-slate-600 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer">Business</span>
                    </div>
                    </div>
                </div>

                </div>

                {/* bottom cta */}

                <div className="mt-14 bg-linear-to-br from-indigo-600 to-violet-800 rounded-3xl p-8 sm:p-12 text-center text-white " >

                    <p className="text-sm font-semibold text-indigo-200 uppercase tracking-wider mb-3" >Can't decide?</p>

                    <h2 className="text-2xl sm:text-3xl font-bold mb-3" >Browse All Products</h2>
                    <p className="text-indigo-200 mb-7 max-w-md mx-auto" >See everything in one place — filter by price, rating, and category.</p>

                    <button  onClick={()=>navigate("/products")} className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors "  >
                        shop all products    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </button>

                </div>

            </div>

        </div>

    )

}