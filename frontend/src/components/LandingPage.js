import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section style={{ backgroundColor: '#0E503F' }} className="min-h-screen bg-green-900">
     <div className="flex flex-wrap items-center text-xl text-white"><img className="h-14 w-14 ml-20"src={require('./Images/logo.png')} alt="My " />Uplift</div>
  <div className="flex flex-wrap items-center">
    <div className="w-full md:w-1/2 px-4">
      <div className="text-white font-serif ml-64 mt-20  text-6xl">
      <div className="font-extrabold"> No.1 Trusted <br /> source for <br /></div>  <div className=" italic text-yellow-400 ">Giving <br /> and Volunteering</div>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-4">
      <img

        className="mx-auto mt-20 h-96 mr-96 rounded-md   "
        src="https://images.pexels.com/photos/11834966/pexels-photo-11834966.jpeg?cs=srgb&dl=pexels-safari-consoler-11834966.jpg&fm=jpg"
        alt="description"
      />
    </div>
  </div>
  <div className="flex flex-wrap  ">
    <div style={{ width: '53%' }} className="w-full mt-11 px-4">
      <div className="text-white font-serif ml-64    text-3xl">
      <div className="">
      We connect nonprofits, donors and companies in nearly every country in the world.
      We help fellow nonrofits access the funding,
      tools,training and support they need to serve their communities.
      </div>
         <div className="flex mt-32">
         <Link to="/login">  <button className="text-gray-700 px-4 py-2  hover:bg-yellow-500 bg-yellow-600">Give now</button></Link>
            <div className="bg-green-700 ml-14  text-white px-4 py-2  hover:bg-green-600"> <Link to="/SignupPage">   <button className="">Become a Volunteer</button></Link>

        </div>
           </div>
      </div>
      <div className="fixed bottom-0 right-0 m-4">

</div>

    </div>
    <div style={{ width: '47%' }} className="w-full  px-4">
      <img
        style={{ width: '700px' }}
        className="mx-auto mt-7 h-96 mb-9 rounded-md"
        src="https://images.pexels.com/photos/11025027/pexels-photo-11025027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="description"
      />
    </div>

  </div>

  <div className="bg-white h-96 width-full ">
  <div className="mt-20 flex justify-center items-center">
  <div style={{ width: '50%' }}className="mb-5   p-4 rounded-lg flex flex-col items-center">
  </div>
</div>

    <div className="justify-center items-center text-center text-5xl font-sans text-green-800 mb-14 font-extrabold font-sans">Latest Donors</div>
    <div className="flex justify-center  ">
  <div className="flex flex-col    justify-center max-w-xs p-6 s sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<img src="https://loremflickr.com/320/240/guy/all" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold xs:text-2xl">Duke Baraka</h2>

            <p className="px-5 text-xs xs:text-base dark:text-gray-400">Amount Donated <p className="text-green-800">Ksh 600,000</p>  </p>
		</div>


	</div>
    </div>
    <div className="flex flex-col ml-5  justify-center max-w-xs p-6 s sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<img src="https://loremflickr.com/320/240/boy/all" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold xs:text-2xl">Trevor Febias</h2>

            <p className="px-5 text-xs xs:text-base dark:text-gray-400">Amount Donated <p className="text-green-800"> 3.5M</p>  </p>
		</div>


	</div>
    </div>
    <div className="flex flex-col ml-5  justify-center max-w-xs p-6 s sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<img src="https://loremflickr.com/320/240/man/all" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold xs:text-2xl">David Mwai</h2>

            <p className="px-5 text-xs xs:text-base dark:text-gray-400">Amount Donated <p className="text-green-800"> Ksh 960,000</p>  </p>
			</div>


	</div>
    </div>
    <div className="flex flex-col ml-5  justify-center max-w-xs p-6 s sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<img src="https://loremflickr.com/320/240/person/all" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
        <h2 className="text-xl font-semibold xs:text-2xl">Joseph Wambua</h2>

            <p className="px-5 text-xs xs:text-base dark:text-gray-400">Amount Donated <p className="text-green-800"> Ksh 560,000</p>  </p>
			</div>


	</div>
    </div>
</div>
<div className="mt-10 mb-10 flex justify-center items-center">
  <div className="w-full max-w-6xl bg-[#0E503F] p-8 rounded-lg flex flex-col items-center">
    <div className="flex flex-wrap justify-between gap-8 w-full mt-4">
      <div className="flex flex-col items-center text-white">
        <span className="text-5xl font-extrabold text-center">100%</span>
        <span className="text-xl text-center mt-2">Goes To The Course</span>
      </div>
      <div className="flex flex-col items-center text-white">
        <span className="text-5xl font-extrabold text-center">1,634,333</span>
        <span className="text-xl text-center mt-2">Doners</span>
      </div>
      <div className="flex flex-col items-center text-white">
        <span className="text-5xl font-extrabold text-center">175+</span>
        <span className="text-xl text-center mt-2">Countries</span>
      </div>
      <div className="flex flex-col items-center text-white">
        <span className="text-5xl font-extrabold text-center">18,000</span>
        <span className="text-xl text-center mt-2">Activists</span>
      </div>
    </div>
  </div>
</div>





  </div>
</section>

  );
}
export default LandingPage;
