import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import profileImage3 from "../assets/Prathu.jpeg";
import profileImage1 from "../assets/Yug.jpeg";
import profileImage2 from "../assets/Mittu.jpeg";
import profileImage4 from "../assets/Raj.jpeg";
import blogImage from "../assets/Blog.gif";

const Home = () => {
  const members = [
    {
      name: "Yug Jain",
      role: "Role: Full Stack Developer",
      description:
        "Yug bridges the gap between frontend and backend development, bringing a holistic approach to our projects. His versatility and problem-solving skills make him a valuable asset to the team.",
      image: profileImage1,
    },
    {
      name: "Mitansh Chauhan",
      role: "Role: Backend Developer",
      description:
        "Mitansh is the driving force behind our projects, ensuring everything runs smoothly and on schedule. With a keen eye for detail and excellent leadership skills, Mitansh keeps the team motivated and focused on our goals.",
      image: profileImage2,
    },
    {
      name: "Prathamesh Desai",
      role: "Role: Backend Developer",
      description:
        "Prathamesh specializes in server-side logic, database management, and API development. His expertise in creating robust and scalable backend solutions is essential to our project's success.",
      image: profileImage3,
    },
    {
      name: "Raj Kamath",
      role: "Role: Frontend Developer",
      description:
        "Raj is our go-to person for creating engaging and responsive user interfaces. His creativity and technical skills ensure a seamless and intuitive user experience. ",
      image: profileImage4,
    },
  ];

  const slides = [
    { url: blogImage, alt: "Image 1" },
    {
      url: "https://www.farinasmarketing.com/wp-content/uploads/2019/07/Blogging.png",
      alt: "Image 2",
    },
    {
      url: "https://tse2.mm.bing.net/th?id=OIP.n-88oToVUblS27fy2pcP-AHaE1&pid=Api&P=0&h=180",
      alt: "Image 3",
    },
    {
      url: "https://www.readerdigital.com/wp-content/uploads/2018/02/blogging-services.jpg",
      alt: "Image 4",
    },
    {
      url: "https://www.jamesnathan.com/wp-content/uploads/2016/06/shutterstock_381189202.jpg",
      alt: "Image 5",
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
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group bg-[#F7B787]">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-lg"
        ></div>
        <div
          className="absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-[#527853] text-white cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          className="absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-[#527853] text-white cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer text-[#ffffff]"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-xl font-bold mt-8 text-[#ffffff] bg-[#F7B787] p-8 rounded-lg shadow-lg">
        Welcome to our blogging platform! Here, you can share your thoughts,
        experiences, and stories with a wide audience. Our platform is designed
        to be user-friendly and accessible, making it easy for you to create and
        manage your blogs. Whether you're a seasoned writer or just starting
        out, you'll find the tools you need to express yourself and connect with
        others. Join our community of bloggers and start your journey today!
      </div>
      <div className="flex flex-wrap justify-center mt-8 bg-[#F7B787] py-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#F9E8D9] rounded-lg shadow-lg p-6 m-4 w-64 transform transition duration-500 hover:scale-105"
          >
            <img
              className="w-24 h-22 rounded-full mb-4 border-2 border-[#F7B787] shadow-md"
              src={member.image}
              alt={member.name}
            />
            <h2 className="text-2xl font-semibold text-center mb-2 text-[#527853]">
              {member.name}
            </h2>
            <p className="text-[#EE7214] text-center font-bold mb-1">
              {member.role}
            </p>
            <p className="text-gray-700 text-center font-bold text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
