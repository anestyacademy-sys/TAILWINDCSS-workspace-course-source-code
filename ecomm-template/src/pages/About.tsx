import { useNavigate } from "react-router-dom"

export default function About(){
    const navigate = useNavigate();

    return(
        <div className="bg-white min-h-screen" >
            
            {/* hero */}
            <section className="bg-slate-900 text-white py-20" > 

                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" >
                    <nav className="text-xs text-slate-500 mb-8 flex items-center justify-center gap-2" >
                        <button onClick={()=>navigate("/")} className="hover:text-slate-300 transition-colors"  >Home</button>
                        <span>/</span>
                        <span className="text-slate-400" >About</span>
                    </nav>

                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight " >
                        We make premium shopping <br />
                        <span className="text-indigo-400" >simple and honest.</span>
                    </h1>

                    <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto" >ShopLux was built on one idea — great products shouldn't come with complicated experiences. Clean, fast, and fair.</p>
                </div>

            </section>


            {/* stats */}


            <section className="border-b border-slate-100" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-9 text-center" >

                    <div>
                        <p className="text-xl font-extrabold text-slate-900" >2019</p>
                        <p className="text-sm text-slate-400 mt-1" >founded</p>
                    </div>

                    <div>
                        <p className="text-xl font-extrabold text-slate-900" >50K+</p>
                        <p className="text-sm text-slate-400 mt-1" >customers</p>
                    </div>

                    <div>
                        <p className="text-xl font-extrabold text-slate-900" >10K+</p>
                        <p className="text-sm text-slate-400 mt-1" >products</p>
                    </div>

                    <div>
                        <p className="text-xl font-extrabold text-slate-900" >4.9★</p>
                        <p className="text-sm text-slate-400 mt-1" >avg rating</p>
                    </div>

                </div>
            </section>

            {/* values */}

            <section className="py-16 bg-slate-50" >
                <div className="max-w-5xl  mx-auto px-4 sm:px-6" >

                    <h2 className="text-2xl font-bold text-slate-900 text-center mb-10" >What we stand for</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 " >

                        <div className="bg-white rounded-2xl p-5 shadow-sm" >
                            <span className="text-2xl mb-3 block" >🎯</span>
                            <h3 className="text-sm font-bold text-slate-900 mb-1" >Quality First</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Every product is hand-picked before it reaches our catalog.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow-sm" >
                            <span className="text-2xl mb-3 block" >🌿</span>
                            <h3 className="text-sm font-bold text-slate-900 mb-1" >Sustainability</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">100% carbon offset. We only work with ethical suppliers.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow-sm" >
                            <span className="text-2xl mb-3 block" >🤝</span>
                            <h3 className="text-sm font-bold text-slate-900 mb-1" >Trust</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Transparent pricing, honest reviews, no-questions returns.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow-sm" >
                            <span className="text-2xl mb-3 block" >⚡</span>
                            <h3 className="text-sm font-bold text-slate-900 mb-1" >Speed</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Fast checkout, fast delivery, fast support. Always.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* team */}
            <section className="py-16 bg-white" >
                <div className="max-w-4xl mx-auto px-4  sm:px-6" >

                    <h2 className="text-2xl font-bold text-slate-900 text-center mb-10" >The team</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6" >

                        <div className="text-center" >
                            <img src="https://picsum.photos/seed/team1/200/200" alt="" className="w-20 h-20 rounded-2xl object-cover mx-auto mb-3 shadow-sm"  />
                            <p className="text-sm font-semibold text-slate-900" >Elena Reyes</p>
                            <p className="text-xs text-slate-400 mt-0.5" >CEO & Co-Founder</p>
                        </div>
                        <div className="text-center" >
                            <img src="https://picsum.photos/seed/team2/200/200" alt="" className="w-20 h-20 rounded-2xl object-cover mx-auto mb-3 shadow-sm"  />
                            <p className="text-sm font-semibold text-slate-900" >Marcus Chen</p>
                            <p className="text-xs text-slate-400 mt-0.5" >CTO & Co-Founder</p>
                        </div>
                        <div className="text-center" >
                            <img src="https://picsum.photos/seed/team3/200/200" alt="" className="w-20 h-20 rounded-2xl object-cover mx-auto mb-3 shadow-sm"  />
                            <p className="text-sm font-semibold text-slate-900" >Sofia Müller</p>
                            <p className="text-xs text-slate-400 mt-0.5" >Head of Design</p>
                        </div>
                        <div className="text-center" >
                            <img src="https://picsum.photos/seed/team4/200/200" alt="" className="w-20 h-20 rounded-2xl object-cover mx-auto mb-3 shadow-sm"  />
                            <p className="text-sm font-semibold text-slate-900" >James Okafor</p>
                            <p className="text-xs text-slate-400 mt-0.5" >Head of Operations</p>
                        </div>

                    </div>
                </div>
            </section>


            {/* cta */}

            <section className="py-16 bg-indigo-600 text-white text-center" >
                <div className="max-w-xl  mx-auto px-4" >
                    <h2 className="text-2xl font-bold mb-3" >Ready to explore?</h2>
                    <p className="text-indigo-200 mb-7" >Join 50,000+ customers and find products you'll love.</p>

                    <button onClick={()=>navigate("/products")}  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors text-sm cursor-pointer " >
                        Shop Now
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </button>
                </div>
            </section>
        </div>
    )

}