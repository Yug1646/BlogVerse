import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Home = () => {
  const members = [
    { name: "Raj", description: "Project M" },
    { name: "Yug", description: "Project M" },
    { name: "Mitansh", description: "Project M" },
    { name: "Prathmesh", description: "Project M" },
  ];

  const slides = [
    {
      url: "https://www.farinasmarketing.com/wp-content/uploads/2019/07/Blogging.png",
      alt: "Image 1",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.n-88oToVUblS27fy2pcP-AHaE1&pid=Api&P=0&h=180",
      alt: "Image 2",
    },
    {
      url: "https://www.readerdigital.com/wp-content/uploads/2018/02/blogging-services.jpg",
      alt: "Image 3",
    },
    {
      url: "https://www.jamesnathan.com/wp-content/uploads/2016/06/shutterstock_381189202.jpg",
      alt: "Image 4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="flex space-x-8"></div>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div
          className="absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          className="absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow bg-gray-100 p-4">
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
          necessitatibus. Cupiditate eligendi officiis consequuntur commodi?
          Nemo quisquam eum autem nam facere reiciendis quibusdam, asperiores
          voluptates, omnis officia harum quis ipsa!
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 m-4"
          >
            <div className=" flex flex-">
              <img src="image_6543.png"></img>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

// const Home = () => {
//   const members = [
//     { name: "Raj", description: "Project M" },
//     { name: "Yug", description: "Project M" },
//     { name: "Mitansh", description: "Project M" },
//     { name: "Prathmesh", description: "Project M" },
//   ];

//   const slides = [
//     {
//       url: "https://www.farinasmarketing.com/wp-content/uploads/2019/07/Blogging.png",
//       alt: "Image 1",
//     },
//     {
//       url: "https://tse2.mm.bing.net/th?id=OIP.n-88oToVUblS27fy2pcP-AHaE1&pid=Api&P=0&h=180",
//       alt: "Image 2",
//     },
//     {
//       url: "https://www.readerdigital.com/wp-content/uploads/2018/02/blogging-services.jpg",
//       alt: "Image 3",
//     },
//     {
//       url: "https://www.jamesnathan.com/wp-content/uploads/2016/06/shutterstock_381189202.jpg",
//       alt: "Image 4",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <>
//       {/* Header Section */}
//       <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
//         <div className="text-xl font-bold">SQUARESPACE</div>
//         <nav className="space-x-4">
//           <a href="#products" className="hover:underline">Products</a>
//           <a href="#templates" className="hover:underline">Templates</a>
//           <a href="#resources" className="hover:underline">Resources</a>
//         </nav>
//         <div>
//           <a href="#login" className="mr-4 hover:underline">Log In</a>
//           <button className="bg-white text-black px-4 py-2 rounded">Get Started</button>
//         </div>
//       </header>

//       {/* Main Section */}
//       <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/your-background-image.jpg)' }}>
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 text-center text-white">
//           <h1 className="text-4xl font-bold">The leader in website design</h1>
//           <p className="mt-4 text-lg">Stand out online with a professional website, online store, or portfolio. With Squarespace, you can turn any idea into a reality.</p>
//           <button className="mt-8 bg-white text-black px-6 py-3 rounded">Get Started</button>
//         </div>
//       </div>

//       {/* Slider Section */}
//       <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
//         <div
//           style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//           className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
//         ></div>
//         <div
//           className="absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//           onClick={prevSlide}
//         >
//           <BsChevronCompactLeft size={30} />
//         </div>
//         <div
//           className="absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//           onClick={nextSlide}
//         >
//           <BsChevronCompactRight size={30} />
//         </div>
//         <div className="flex top-4 justify-center py-2">
//           {slides.map((slide, slideIndex) => (
//             <div
//               key={slideIndex}
//               onClick={() => goToSlide(slideIndex)}
//               className="text-2xl cursor-pointer"
//             >
//               <RxDotFilled />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Members Section */}
//       <div className="flex-grow bg-gray-100 p-4">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-semibold">Our Team</h2>
//           <p className="text-gray-700">Meet the amazing team behind our success</p>
//         </div>
//         <div className="flex flex-wrap justify-center">
//           {members.map((member, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 m-4"
//             >
//               <div className="flex flex-col items-center">
//                 <img src="https://example.com/member-image.jpg" alt={member.name} className="w-24 h-24 rounded-full mb-4" />
//                 <h2 className="text-xl font-semibold">{member.name}</h2>
//                 <p className="text-gray-700">{member.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
