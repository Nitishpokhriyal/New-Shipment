import React from 'react'

const index = () => {
  return (
    <div className="text-gray-700 bg-white antialiased" >
  

  <nav className="flex items-center justify-between flex-wrap p-6">
      
      <div className="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
        <span className="font-semibold text-xl tracking-tight hover:text-green-800"><a href="/home">SHIPSHOP ADMIN PAGE</a></span>
      </div>
      
      <div className="block lg:hidden">
        <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
				<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      
    <div id="nav-content" className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 md:text-right">
      <div className="text-sm lg:flex-grow">
          <a href="/Home" className="block mt-1 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4">Home</a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4">About</a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4">Contact</a>
          <a href="/Login" className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4">Login</a>
          <a href="/Dashboard" className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4">Dashboard</a>
          <a href="/Shipment" className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4">Shipment</a>
          <a href="/ShowShipment" className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4">Show Shipment</a>

       </div>
     </div>
      
  </nav>
        
  <div className="py-10 bg-cover bg-no-repeat bg-fixed" style={{backgroundImage:  `url("/wall.jpg")` ,height: 500}} >
    <div className="container m-auto text-center py-5 px-6 opacity-100">
      <h2 className="text-4xl font-bold mb-2 text-white">Our Fast Delivery For You</h2>
      <h3 className="text-2xl mb-8 text-gray-200">Whether you need to move something across town, between cities or across the country</h3>
      <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all"><a href='/Shipment'>Contact Us</a></button>
    </div>
  </div>
        

        <section className="container mx-auto px-6 p-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">SHIPSHOP SERVICES</h2>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Trucks</h4>
              <p className="text-gray-600 mb-8">Our Trucking  enforce fewer restrictions, and truck shipments, including heavy or hazardous materials, are much less restrictive than other modes of transportation, especially air also our Trucking can provide customers with a wider range of flexible options to meet different needs and reduce transportation costs</p>
            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="https://trumpwallpapers.com/wp-content/uploads/Truck-Wallpaper-06-1920x1200-1-1536x960.jpg" alt="Vortex" />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="https://media.gettyimages.com/id/1430292077/photo/delivery-man-driving-a-scooter.jpg?s=612x612&w=0&k=20&c=KKtUpXIz42p3JwV4gNJNw9xm3p6ADRF0vyfepNXNyDI=" alt="use the force" />
            </div>
            <div className="w-full md:w-1/2 pl-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Bikes</h4>
              <p className="text-gray-600 mb-8">Our quick bike commute saves money on transportation, makes feel more energized, and is good for the environment. These are just a few reasons why cycling is the most efficient mode of transport. But let's take a closer look at what makes cycling such a great method of transportation</p>
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Cargos</h4>
              <p className="text-gray-600 mb-8">Our Cargos can ship large volumes at low costs. A freight forwarder can consolidate consignments to reduce costs
              shipping containers can also be used for further transportation by road or rail.</p>
            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="https://img.freepik.com/free-photo/shipping-industry-delivering-cargo-large-container-ship-generative-ai_188544-9112.jpg?w=826&t=st=1695209536~exp=1695210136~hmac=c2e955c03f3b709e622be8608f4d8b687c13c41fa679dfd77c2fa574f1308af9" alt="Syncing" />
            </div>
          </div>
        </section>
        

        <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Clients</h2>
            <div className="flex flex-wrap">
              
              <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">How are you feeling, kid? You don't look so bad to me. In fact, you look strong enough to pull the ears off a Gundark. Thanks to you.</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Nitish Pokhriyal</p>
                </div>
              </div>
              
              <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">That's two you owe me, junior. Well your Worship, looks like you managed to keep me around for a little while longer. I had nothing to do with it.</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Vishal Sharma</p>
                </div>
              </div>
              
              <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">General Rieekan thinks it's dangerous for any ships to leave the system until we've activated the energy shield. That's a good story. I think you just can't bear to let a gorgeous guy like me out of your sight</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Kushal</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        <section  style={{
            backgroundColor: '#667eea'}}>
          <div className="container mx-auto px-6 text-center py-20">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">Headquarters personnel</h2>
            <h3 className="my-4 text-2xl text-white">Report to command center. Take it easy.</h3>
            <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600">Report</button>
          </div>
        </section>
        

        <footer className="bg-gray-100">
          <div className="container mx-auto px-6 pt-10 pb-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4 text-center md:text-left ">
                <h5 className="uppercase mb-6 font-bold">Links</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">I'll return</a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">I promise</a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Reckless is he</a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left ">
                <h5 className="uppercase mb-6 font-bold">Legal</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Emperor's Terms</a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Pulverized?</a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left ">
                <h5 className="uppercase mb-6 font-bold">Social</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Corellia</a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Bilbringi</a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Fondor</a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left ">
                <h5 className="uppercase mb-6 font-bold">Through the Force</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Journey to the Emperor</a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Lord Vader ship approaching?</a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">X-wing className</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default index