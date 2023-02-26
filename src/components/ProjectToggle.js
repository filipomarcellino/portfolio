import Image from "next/image";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiOutlineDownCircle,
  AiOutlineLink,
  AiOutlineUpCircle
} from "react-icons/ai";
import SlideDown from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import StackItem from "./StackItem";

function ProjectToggle(props) {
  const { data, showOnLoad } = props;
  const [show, setShow] = useState(showOnLoad);

  return (
    <div className="mt-3 text-black dark:text-gray-200">
      <div className="bg-stone-300 dark:bg-[#393c43] w-11/12 rounded-lg mx-auto">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <div className="text-left px-3 py-2 text-lg text-stone-700 dark:text-gray-200 font-light">
            {data.name}{" "}
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
              {data.imageURL && (
                <Image
                  className="rounded-lg"
                  src={data.imageURL}
                  height={800}
                  width={800}
                />
              )}
              <p className="mt-4">{data.description}</p>
              <div className="flex flex-wrap gap-2 justify-between text-4xl mt-4">
                <div className="flex gap-3 flex-wrap">
                  {data.stack.map((stackItem) => (
                    <StackItem stack={stackItem} />
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <a href={data.links.github}>
                    {" "}
                    <AiFillGithub />
                  </a>
                  {data.links.link && (
                    <a href={data.links.link}>
                      <AiOutlineLink />
                    </a>
                  )}
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

export default ProjectToggle;
