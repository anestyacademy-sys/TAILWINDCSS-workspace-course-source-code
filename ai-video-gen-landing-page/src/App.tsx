import './App.css'

function App() {
 
  return (
    <div className='bg-gray-950 text-white min-h-screen font-sans' >

      {/* navbar */}
      <nav  className='border-b border-gray-800 bg-gray-950/80 sticky top-0 z-50 backdrop-blur-sm'>
          <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
              <span className='text-xl font-bold text-white' >AIVideo</span>

              <div className='flex items-center gap-8' >
                  <a href="#" className='text-gray-400 hover:text-white text-sm duration-200' >Features</a>
                  <a href="#" className='text-gray-400 hover:text-white text-sm duration-200' >Pricing</a>
                  <a href="#" className='text-gray-400 hover:text-white text-sm duration-200' >Docs</a>
                  <a href="#" className='text-gray-400 hover:text-white text-sm duration-200' >Blog</a>
              </div>

              <div className='flex items-center gap-3' >
                  <button className='text-gray-400 hover:text-white text-sm font-medium px-4 py-2 duration-200'>
                    Login
                  </button>

                  <button className='bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-5 py-2 rounded-lg duration-200'>
                    Get Started
                  </button>
              </div>


          </div>
      </nav>


      {/* Hero section */}
      <section className='max-w-6xl mx-auto px-6 py-24 flex items-center justify-between gap-12 ' >

          <div className='flex flex-col gap-6 max-w-lg'>
              <span className='text-sm font-semibold text-purple-400 uppercase' >AI-Powered Platform</span>
              <h1 className='text-6xl font-extrabold text-white' >
                  Generate videos <span className='text-purple-500' >with AI</span>
              </h1>

              <p className='text-gray-400 text-lg'>
                Turn your ideas into stunning videos in seconds. No editing skills required — just describe what you want and let our AI do the rest.
              </p>

              <div className='flex items-center gap-4' >
                  <button className='bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3 rounded-xl duration-200' >
                    Start For Free
                  </button>

                  <button className='text-gray-400 hover:text-white font-medium px-4 py-3 duration-200' >
                    Watch demo →
                  </button>
              </div>

              <p className='text-gray-600 text-sm' >No credit card required · Free 14-day trial</p>
          </div>

          <div className='flex-1 flex justify-center  '>

              <div className='relative w-full  max-w-lg rounded-2xl overflow-hidden border border-purple-800/40 shadow-2xl shadow-purple-900/40' >
                  <img src="https://templates.seekviral.com/aiana1/pages/landing4/assets/images/hero/slide2.jpg" alt="" className='w-full h-80 object-cover' />
              </div>

          </div>

      </section>


      {/* Features section */}
      <section className='bg-gray-900 py-24' >
          <div className='max-w-6xl mx-auto px-6' >
              <div className='text-center mb-16'>
                  <h2 className='text-4xl text-white font-bold mb-4' >Everything you need to create</h2>
                  <p className='text-gray-400  text-lg max-w-xl mx-auto' >Powerful features designed to streamline your creative workflow from idea to final video.</p>
              </div>

              <div className='flex items-stretch justify-between gap-8' >
                  {/* card1 */}
                  <div  className='flex-1  bg-gray-800/60 border border-gray-700/50 rounded-2xl p-8 flex flex-col gap-4 hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 duration-200'>
                        <div className='w-12 h-12 bg-purple-600/20 rounded-xl border border-purple-500/20  flex justify-center items-center' >
                            <svg  className='w-6 h-6 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                              <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>
                        </div>

                        <h3 className='text-xl font-semibold text-white' > Instant Generation </h3>
                        <p  className='text-gray-400'> Generate high-quality video clips in under 30 seconds using state-of-the-art diffusion models. </p>
                  </div>

                  {/* card2 */}
                  <div  className='flex-1  bg-gray-800/60 border border-gray-700/50 rounded-2xl p-8 flex flex-col gap-4 hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 duration-200'>
                        <div className='w-12 h-12 bg-purple-600/20 rounded-xl border border-purple-500/20  flex justify-center items-center' >
                            <svg className='w-6 h-6 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>

                        </div>

                        <h3 className='text-xl font-semibold text-white' > Smart Editing </h3>
                        <p  className='text-gray-400'> Describe changes in plain English and our AI will apply them automatically to your scenes. </p>
                  </div>

                  {/* card3 */}
                  <div  className='flex-1  bg-gray-800/60 border border-gray-700/50 rounded-2xl p-8 flex flex-col gap-4 hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 duration-200'>
                        <div className='w-12 h-12 bg-purple-600/20 rounded-xl border border-purple-500/20  flex justify-center items-center' >
                            <svg className='w-6 h-6 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>

                        </div>

                        <h3 className='text-xl font-semibold text-white' > One-Click Export </h3>
                        <p  className='text-gray-400'> Export to any format — MP4, GIF, or social-ready aspect ratios — with a single click. </p>
                  </div>

              </div>

          </div>

      </section>

      {/* stats section */}

      <section className='max-w-6xl mx-auto px-6 py-24' >

              <div className='text-center mb-16'>
                  <h2 className='text-4xl text-white font-bold mb-4' >Trusted by creators worldwide</h2>
                  <p className='text-gray-400  text-lg max-w-xl mx-auto' >Numbers that speak for themselves.</p>
              </div>

              <div className='flex items-center justify-between gap-8' >
                    <div className='flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-10 flex flex-col items-center gap-3 text-center' >
                          <span className='text-5xl font-extrabold text-purple-400' >50K+</span>
                          <span className='text-gray-300 font-semibold ' >Active Creators</span>
                          <span className='text-gray-500 text-sm' >Building with our platform every day</span>
                    </div>
                    <div className='flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-10 flex flex-col items-center gap-3 text-center' >
                          <span className='text-5xl font-extrabold text-purple-400' >2M+</span>
                          <span className='text-gray-300 font-semibold ' >Videos Generated</span>
                          <span className='text-gray-500 text-sm' >Across all plans and use cases</span>
                    </div>
                    <div className='flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-10 flex flex-col items-center gap-3 text-center' >
                          <span className='text-5xl font-extrabold text-purple-400' >4.9★</span>
                          <span className='text-gray-300 font-semibold ' >Average Rating</span>
                          <span className='text-gray-500 text-sm' >From 12,000+ verified reviews</span>
                    </div>
                    <div className='flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-10 flex flex-col items-center gap-3 text-center' >
                          <span className='text-5xl font-extrabold text-purple-400' >30s</span>
                          <span className='text-gray-300 font-semibold ' >Avg. Generation Time</span>
                          <span className='text-gray-500 text-sm' >From prompt to finished video</span>
                    </div>

              </div>

      </section>


      {/* pricing section */}

      <section className='bg-gray-900 py-24' >
          <div className='max-w-6xl mx-auto px-6' >
              <div className='text-center mb-16'>
                  <h2 className='text-4xl text-white font-bold mb-4' >Simple, transparent pricing</h2>
                  <p className='text-gray-400  text-lg max-w-xl mx-auto' >Scale as you grow. No surprises.</p>
              </div>

              <div className='flex items-stretch justify-between gap-8' >

                    {/* Basic */}
                    <div className='flex-1 max-w-sm  flex flex-col gap-6 rounded-2xl p-8 border border-gray-700/50  bg-gray-800/60 hover:border-gray-600  transition-all  hover:-translate-y-1 duration-300' >
                          <p className='text-sm font-semibold uppercase  text-purple-400' >Basic</p>
                          <div className='flex items-end gap-1' > 
                              <span className='text-white text-5xl font-extrabold' >$9</span>
                              <span className='text-lg text-gray-400 mb-1'>/month</span>
                          </div>

                          <p className='text-sm text-gray-400 ' >Perfect for individuals getting started.</p>

                          <ul className='flex flex-col gap-3' >
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>10 videos/month</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>720p quality</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>5 styles</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>Email support</span>  
                                </li>
                          </ul>

                          <button className='mt-auto w-full py-3 rounded-xl bg-gray-700 font-semibold text-white hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-900/30  transition-all duration-200' >
                            Get Started
                          </button>
                    </div>


                    {/* Pro */}

                    <div className='flex-1 max-w-sm  flex flex-col gap-6 rounded-2xl p-8 border border-purple-400 bg-purple-600 shadow-2xl shadow-purple-900/50 scale-105 hover:-translate-y-1 duration-300' >
                          <p className='text-sm font-semibold uppercase  text-purple-400' >Pro</p>
                          <div className='flex items-end gap-1' > 
                              <span className='text-white text-5xl font-extrabold' >$29</span>
                              <span className='text-lg text-white mb-1'>/month</span>
                          </div>

                          <p className='text-sm text-white' >Best for creators and small teams.</p>

                          <ul className='flex flex-col gap-3' >
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>100 videos/month</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>1080p quality</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>All styles</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>Priority support</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>Custom branding</span>  
                                </li>
                          </ul>

                          <button className='mt-auto w-full py-3 rounded-xl bg-white font-semibold text-purple-700  hover:shadow-lg hover:shadow-gray-900/30 hover:scale-105  transition-all duration-200' >
                            Get Started
                          </button>
                    </div>

                    {/* Premium */}

                    <div className='flex-1 max-w-sm  flex flex-col gap-6 rounded-2xl p-8 border border-gray-700/50  bg-gray-800/60 hover:border-gray-600  transition-all  hover:-translate-y-1 duration-300' >
                          <p className='text-sm font-semibold uppercase  text-purple-400' >Premium</p>
                          <div className='flex items-end gap-1' > 
                              <span className='text-white text-5xl font-extrabold' >$79</span>
                              <span className='text-lg text-gray-400 mb-1'>/month</span>
                          </div>

                          <p className='text-sm text-gray-400 ' >For agencies and power users.</p>

                          <ul className='flex flex-col gap-3' >
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>Unlimited videos</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>4K quality</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>All styles + custom</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>Dedicated support</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>API access</span>  
                                </li>
                                <li className='flex items-center gap-3' >
                                  <svg className='w-5 h-5 shrink-0 text-purple-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>

                                  <span>Team seats</span>  
                                </li>
                          </ul>

                          <button className='mt-auto w-full py-3 rounded-xl bg-gray-700 font-semibold text-white hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-900/30  transition-all duration-200' >
                            Get Started
                          </button>
                    </div>
              </div>
          </div>
      </section>


      {/* cta section */}
      <section className='bg-linear-to-r from-purple-900 via-purple-600 to-blue-900 py-24' >
          <div className='max-w-6xl mx-auto px-6 flex flex-col items-center gap-8 text-center' >
              <div className='flex flex-col gap-4' >
                  <h2 className='text-5xl font-extrabold text-white' >Start creating with AI today</h2>
                  <p className='text-purple-200 text-xl max-w-xl mx-auto' >Join 50,000+ creators already using our platform to bring their ideas to life.</p>
              </div>

              <div className='flex items-center gap-4' >
                  <button className='bg-white text-purple-700 font-bold px-10 py-4 rounded-xl text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/50 transition-all duration-200'>
                    Start for free
                  </button>

                  <button className='border border-purple-300/40 text-white px-8 py-4 font-semibold rounded-xl text-lg hover:bg-white/10 transition-all duration-200'  >
                    Talk to sales
                  </button>
              </div>

              <p className='text-purple-300 text-sm'>14-day free trial · No credit card needed · Cancel anytime</p>
          </div>
      </section>

      {/* footer */}

      <footer className='bg-gray-950 border-t border-gray-800/50 py-8' >
          <div className='max-w-6xl mx-auto px-6 flex items-center justify-between' >
              <p className='text-gray-500 text-sm' >© 2026 AIVideo. All rights reserved.</p>

              <div className='flex items-center gap-8'>
                  <a href="#" className='text-gray-500 text-sm hover:text-gray-300 duration-200' >Privacy</a>
                  <a href="#" className='text-gray-500 text-sm hover:text-gray-300 duration-200' >Terms</a>
                  <a href="#" className='text-gray-500 text-sm hover:text-gray-300 duration-200' >Support</a>
              </div>
          </div>
      </footer>
    </div>
  )
}

export default App
