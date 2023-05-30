import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  const { id, type, title, synopsis } = props.jawSummary;

  return (
    <>
      <div className="h-[420px] max-w-xs mx-[20px] shadow-lg rounded-lg text-white text-center border-black border-[1px] bg-black py-[20px]">
        <div className="max-w-full h-[160px] rounded-t-lg block px-[30px] mt-[8px] py-auto">
          <Image
            src={props.jawSummary.backgroundImage.url}
            alt="bgImage"
            width={250}
            height={200}
          />
        </div>
        <div className="p-[4px]">
          <h2 className="font-bold">{title}</h2>
          <p className="h-[140px] mt-[5px]">{synopsis}</p>
          <p
            className="block mt-[10px] w-[60px] mx-auto text-white underline decoration-solid
          rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent target:_blank"
          >
            <Link href={`https://www.netflix.com/title/${id}`}>Watch</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
