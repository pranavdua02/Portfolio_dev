import React from "react";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import OJ from "../assets/Online-Judge.png";
import PP from "../assets/Palak-Pallete.png";
import Di from "../assets/Discord.png";

const Cards = ({ image, name, tech, link, github, description }) => {
  return (
    <div className=" bg-white flex flex-1 flex-col items-center mx-2 my-3 p-4 rounded-[20px] border shadow-md">
      <img
        className=" object-shrink rounded-2xl border-2 border-gray-200"
        src={image}
        alt=""
      />
      <div className="flex w-full flex-col mt-5 p-2">
        <div className="flex flex-1 justify-between">
          <h1 className="text-3xl font-bold ">{name}</h1>
          <div className="flex space-x-2">
            <a href={github} target="_blank">
              <AiFillGithub className="text-3xl text-[#6e07f3] hover:text-indigo-700 cursor-pointer" />
            </a>
            <a href={link} target="_blank">
              <AiOutlineLink className="text-3xl text-[#6e07f3] hover:text-indigo-700 cursor-pointer" />
            </a>
          </div>
        </div>
        <span className="text-[#6e07f3] text-xl">{tech}</span>
      </div>
      <p className="text-lg text-gray-500 p-2 mt-3">{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#6e07f3] h-[45vh] flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white pt-[6rem] pb-[1rem] lg:pt-[10rem]">
          Projects
        </h1>
        <p className="text-white lg:text-xl font-medium px-2 py-2 lg:px-[2.4rem] lg:py-[2.4rem] w-full lg:w-[60rem] xl:w-[70rem] text-center">
          As someone who loves technology, I've tried out lots of apps on the
          internet and my phone. Eventually, I decided to try making my own.
          It's been a cool adventure, and you can check out some of my creations
          below.
        </p>
      </div>
      <div className="relative flex flex-col items-center z-0">
        <div className="h-[20vh] w-full absolute bg-[#6e07f3] -z-10" />
        <div className="w-[90%] flex flex-col lg:flex-row justify-center">
          <Cards
            image={OJ}
            name="Online Judge"
            tech="MERN | DOCKER | AWS"
            link="http://52.66.100.58:4000/"
            github="https://github.com/dibyam-jalan27/projectAlpha"
            description="I developed a secure online judge using the MERN stack, featuring code execution and evaluation for C, C++, and Python. Leveraging Docker for containerized compilation and sandboxing, it's deployed on AWS and includes a leaderboard, submission history, and problem tagging."
          />
          <Cards
            image={Di}
            name="Discord-clone"
            tech="NextJs | Tailwind | Prisma | Socket.io"
            github="https://github.com/dibyam-jalan27/discord-clone"
            link="https://discord-clone-production-4109.up.railway.app/"
            description="
I built a Discord clone using Prisma, Next.js, Tailwind CSS, and TypeScript, delivering a seamless chat experience, user profiles, and versatile channel management. This project has gained traction and fostered an active user community, showcasing my expertise in modern web development technologies and design."
          />
          <Cards
            image={PP}
            name="Palak Pallete"
            tech="MERN | Redux | Render"
            link="https://palak-pallette.onrender.com/"
            github="https://github.com/dibyam-jalan27/Palak_Pallette"
            description="Created a live E-commerce platform for ArtWorks using Node.js and React, with a user-friendly UI, Admin Dashboard, and robust authentication. Attracting an expanding user base."
          />
        </div>
      </div>
      <div className="flex item-center justify-center my-20">
        <a href="https://github.com/pranavdua02" target="_blank">
          <button className="flex text-[11px] lg:text-[22px] border-2 border-indigo-400 text-indigo-400 px-3 lg:px-5 py-2 lg:py-3 rounded-full hover:text-white hover:bg-indigo-400">
            <AiFillGithub className="text-lg lg:text-3xl mr-2" />
            Check out more Projects Here
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
