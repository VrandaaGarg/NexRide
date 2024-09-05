import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Team() {
  const team = [
    {
      id: 1,
      name: "Vranda Garg",
      role: "Frontend Developer",
      image: "/Vranda.png",
      insta: "https://www.instagram.com/vranda_garg/",
      linkdn: "https://www.linkedin.com/in/vranda-garg-b68011293/",
      github: "https://github.com/VrandaaGarg",
    },
    {
      id: 2,
      name: "Tanishq Choudhary",
      role: "Full Stack Developer",
      image: "",
      insta: "https://www.instagram.com/kinda.quixotic/",
      linkdn: "",
      github: "https://github.com/Tanishq-Choudhary",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 pt-24 dark:bg-black">
      <h1 className="text-4xl font-bold text-center mb-11 dark:text-white">
        OUR TEAM
      </h1>

      <div className="flex flex-wrap justify-center gap-12">
        {team.map((data) => (
          <div
            key={data.id}
            className="w-64 bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-8"
          >
            <div className="relative my-3">
              <div className="absolute inset-0 mx-5">
                <div className="bg-transparent w-full -z-10 h-[30%]"></div>
                <div className="bg-blue-500 dark:bg-blue-400y w-full -z-10 h-[70%]"></div>
              </div>
              <div className="relative z-10 h-max">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-4 text-center grid gap-2">
              <h2 className="text-xl font-bold dark:text-white">{data.name}</h2>
              <h3 className="text-gray-600 dark:text-gray-200">{data.role}</h3>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href={data.github}
                  className="text-gray-400 hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                </a>
                <a
                  href={data.linkdn}
                  className="text-gray-400 hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                </a>
                <a
                  href={data.insta}
                  className="text-gray-400 hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
