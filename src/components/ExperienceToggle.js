import Image from "next/image";
import React, { useState } from "react";
import {
  AiOutlineDownCircle,
  AiOutlineUpCircle
} from "react-icons/ai";
import SlideDown from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import StackItem from "./StackItem";

function ExperienceToggle({ data, darkMode, showOnLoad }) {
  const [show, setShow] = useState(showOnLoad);

  return (
    <div className="mt-3 text-black dark:text-gray-200">
      <div className="bg-stone-300 dark:bg-[#393c43] w-11/12 rounded-lg mx-auto">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <div className="text-left px-3 py-2 text-lg text-stone-700 dark:text-gray-200 font-light">
            {data.employer}{" "}
          </div>
          {show ? (
            <AiOutlineUpCircle className="mt-2 mr-4 text-3xl" />
          ) : (
            <AiOutlineDownCircle className="mt-2 mr-4 text-3xl" />
          )}
        </div>
        <SlideDown>
          {show ? (
            <div className="border-t-2 mt-2 border-black dark:border-gray-200 p-8 pt-6 text-left">
              <div className="flex justify-between">
                <div className="flex gap-3 shrink-0">
                    <Image
                      className="rounded-lg"
                      src={darkMode ? data.darkLogo : data.lightLogo}
                      height={50}
                      width={50}
                    />
                  <div>
                    <h2>{data.employer}</h2>
                    <p className="flex flex-wrap">{data.position}</p>
                  </div>
                </div>
                <p className="italic hidden md:flex">{data.date}</p>
              </div>
              <ul className="ml-4 list-disc text-sm md:text-base">
                {data.accomplishments.map((item) => (
                  <li key={item} className="mt-4">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap justify-between text-4xl mt-4">
                <div className="flex flex-wrap gap-3">
                  {data.stack.map((stackItem, index) => (
                    <StackItem key={index} stack={stackItem} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </SlideDown>
      </div>
    </div>
  );
}

export default ExperienceToggle;
