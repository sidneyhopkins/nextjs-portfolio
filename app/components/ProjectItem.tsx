"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { CaretRight } from "@phosphor-icons/react";
import parse from "html-react-parser";
import { ProjectType } from "../projects/page";

export const ProjectItem: React.FC<ProjectType> = ({
  title,
  date,
  description,
  imageUrl,
  imageAlt,
  link,
  linkText,
  target,
  codeLink,
  codeLinkText,
}) => {
  const [colorIndex, setColorIndex] = useState(0);

  const getRandomColorClass = (max: number) => {
    const color = Math.floor(Math.random() * max);
    console.log(color);
    return color;
  };
  useEffect(() => {
    setColorIndex(getRandomColorClass(4));
  }, []);

  return (
    <div className="flex flex-col odd:md:flex-row-reverse even:md:flex-row gap-8 justify-between items-center pb-16 md:pb-24">
      {imageUrl && imageAlt ? (
        <Image
          className="w-full md:w-2/5 block opacity-90"
          src={imageUrl}
          alt={imageAlt}
          width={410}
          height={410}
        />
      ) : (
        <div
          className={clsx(`w-full md:w-2/5 aspect-square rounded-full`, {
            "bg-pink-200": colorIndex == 0,
            "bg-teal-200": colorIndex == 1,
            "bg-orange-200": colorIndex == 2,
            "bg-purple-200": colorIndex == 3,
          })}
        ></div>
      )}
      <div className="w-full md:w-1/2">
        <p className="text-sm uppercase pb-1">{date}</p>
        <h3 className="pb-6 font-bold text-4xl">{title}</h3>
        <div className="pb-4 leading-9">
          {description.map(item => (
            <p key={item} className="pb-4 last:pb-0">
              {parse(item)}
            </p>
          ))}
        </div>
        {codeLink && (
          <Link
            className="group/link block pb-2 underline underline-offset-4 decoration-dotted decoration-pink-300 hover:decoration-pink-800"
            href={codeLink}
            target={target}
            rel="noopener"
          >
            {codeLinkText}
            <CaretRight
              className="group-hover/link:motion-safe:translate-x-1 duration-200 inline-block mb-1 ml-1"
              width={20}
            />
          </Link>
        )}
        {link && (
          <Link
            className="group/link block underline underline-offset-4 decoration-dotted decoration-pink-300 hover:decoration-pink-800"
            href={link}
            target={target}
            rel="noopener"
          >
            {linkText}
            <CaretRight
              className="group-hover/link:motion-safe:translate-x-1 duration-200 inline-block mb-1 ml-1"
              width={20}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
