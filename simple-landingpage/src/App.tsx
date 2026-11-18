import './App.css'

function App() {
 
  return (
    
    <div className='min-h-screen bg-white text-gray-800 font-sans' >

      {/* navbar */}
      <nav className='border-b border-gray-100 shadow-sm' >
        <div className='max-w-6xl  mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='text-2xl text-blue-600 font-bold' >LaunchKit</div>
          <div className='flex items-center gap-8' >
            <a href="#" className='text-gray-600 text-sm font-medium hover:text-blue-600' >Home</a>
            <a href="#" className='text-gray-600 text-sm font-medium hover:text-blue-600' >Features</a>
            <a href="#" className='text-gray-600 text-sm font-medium hover:text-blue-600' >Pricing</a>

            <button className='bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-800 ' >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <section className='max-w-6xl px-6 py-24 flex items-center  mx-auto gap-16' >

        <div className='flex-1 flex flex-col gap-6' >
          <h1 className='text-5xl font-extrabold text-gray-900' >
            Build Faster. <br />
            <span className='text-blue-600' >Launch Smarter.</span>
          </h1>

          <p className='text-lg text-gray-500 max-w-md'>
            LaunchKit gives your startup the tools to move fast, stay lean, and ship products your users will love.
          </p>

          <div className='flex items-center gap-4 ' >
            <button className='bg-blue-600 text-white text-sm font-semibold px-7 py-3 rounded-full shadow-md hover:bg-blue-900' >
              Start for free
            </button>

            <a href="" className='text-blue-600 font-medium text-sm underline underline-offset-4 hover:text-blue-900  '> See how it works → </a>
          </div>
        </div>

      

        <div className='flex-1 flex justify-center '  >
          <img src="https://placehold.co/480x300" className='rounded-2xl shadow-lg w-md' alt="" />
        </div>

      </section>

      {/* Features section */}

      <section className='bg-gray-100 py-20' >

        <div className='max-w-6xl mx-auto px-6' >

            <div className='text-center mb-14' >
                <h2 className='text-3xl text-gray-900 font-bold mb-3 ' >Everything you need to launch</h2>
                <p className='text-base text-gray-500 max-w-xl mx-auto' >Carefully crafted features designed to help you go from idea to product in record time.</p>
            </div>

            <div className='flex gap-6' >

                {/* card 1  */}

                <div className='flex-1 bg-white rounded-2xl  p-8 border border-gray-100 shadow-sm hover:shadow-md flex flex-col gap-4 ' >
                    <span className='text-3xl' > ⚡ </span>
                    <h3 className='text-lg font-bold text-gray-900' >Rapid Prototyping</h3>
                    <p className='text-gray-500 text-sm' >Scaffold your product in minutes with our pre-built templates and component library.</p>
                </div>

                {/* card 1  */}

                <div className='flex-1 bg-white rounded-2xl  p-8 border border-gray-100 shadow-sm hover:shadow-md flex flex-col gap-4 ' >
                    <span className='text-3xl' > 🤝 </span>
                    <h3 className='text-lg font-bold text-gray-900' >Team Collaboration</h3>
                    <p className='text-gray-500 text-sm' >Work together seamlessly with real-time editing, comments, and version history.</p>
                </div>

                {/* card 1  */}

                <div className='flex-1 bg-white rounded-2xl  p-8 border border-gray-100 shadow-sm hover:shadow-md flex flex-col gap-4 ' >
                    <span className='text-3xl' > 📊 </span>
                    <h3 className='text-lg font-bold text-gray-900' >Built-in Analytics</h3>
                    <p className='text-gray-500 text-sm' >Track what matters with dashboards, funnels, and user behavior insights out of the box.</p>
                </div>
            </div>

        </div>

      </section>


      {/* footer */}
      <footer className='border-t border-gray-100 bg-white' >
        <div className='max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-4' >

          <div className='flex items-center gap-6' >
              <a href="#" className='text-sm text-gray-500 hover:text-blue-600' >Privacy</a>
              <a href="#" className='text-sm text-gray-500 hover:text-blue-600' >Terms</a>
              <a href="#" className='text-sm text-gray-500 hover:text-blue-600' >Contact</a>
          </div>

          <p className='text-sm text-gray-400' > © 2026 LaunchKit. All rights reserved. </p>

        </div>
      </footer>


    </div>

  )
}

export default App
