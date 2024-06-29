import { useState } from "react";
import clsx from "clsx";

export default function SpellCard({ spell }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={clsx("text-base border rounded-lg", {
        "border-pink-600": spell.level === 0,
        "border-blue-500": spell.level === 1,
        "border-yellow-500": spell.level === 2,
        "border-green-500": spell.level === 3,
      })}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex flex-col gap-1 p-4"
      >
      <div className="text-base font-bold text-left">


        {spell.name}
      </div>
        <div className="text-xs">
          {spell.level > 0 ? `Level ${spell.level}` : "Cantrip"} {spell.ritual && '(ritual)'}
        </div>
        <div className="text-xs">
          {spell.casting_time}
        </div>
        <div className="text-xs">
          {spell.range}
        </div>
        <div>
          {spell.target}
        </div>
        <div className="text-xs">
          {spell.concentration && "Concentration, "}{spell.duration}
        </div>
      </button>
      <div
        className={clsx('border-t p-4', {
          hidden: !open,
          "border-pink-600": spell.level === 0,
          "border-blue-500": spell.level === 1,
          "border-yellow-500": spell.level === 2,
          "border-green-500": spell.level === 3,
        })}
      >
        <div className="text-sm">
          {spell.desc.map((textSection) => (
            <div className="pb-2 last:pb-0">{textSection}</div>
          ))}
          Higher levels:
          {spell.higher_level?.map((textSection) => (
            <div className="pb-2 last:pb-0">{textSection}</div>
          ))}
        </div>
      </div>
    </li>
  );
}
