import { useState } from "react";
import clsx from "clsx";
import { SpellType } from "../dnd-spells/page";

interface SpellCardProps {
  spell: SpellType;
  activeSpell: SpellType | null;
  setActiveSpell: (spell: SpellType) => void;
}

export const SpellCard: React.FC<SpellCardProps> = ({
  spell,
  activeSpell,
  setActiveSpell,
}) => {
  const [open, setOpen] = useState(false);

  const handleCardClick = () => {
    setActiveSpell(spell);
    setOpen(!open);
  };

  return (
    <li
      className={clsx("w-full text-base border rounded-none", {
        "border-pink-600": spell.level === 0,
        "border-blue-500": spell.level === 1,
        "border-yellow-500": spell.level === 2,
        "border-green-500": spell.level === 3,
        "border-purple-500": spell.level === 4,
        "border-amber-500": spell.level === 5,
      })}
    >
      <button
        onClick={handleCardClick}
        className={clsx(
          "group w-full h-full flex flex-col gap-1 p-4",
          activeSpell === spell && "dark:sm:bg-slate-800 sm:bg-slate-100"
        )}
      >
        <div className="group-hover:underline underline-offset-4 text-base font-semibold text-left">
          {spell.name}
        </div>
        <div className="text-xs font-semibold gap-x-3 gap-y-1 text-left">
          <div>
            {spell.level > 0 ? `Level ${spell.level}` : "Cantrip"}{" "}
            {spell.ritual && "(ritual)"}
          </div>
          <div>{spell.casting_time}</div>
          <div>{spell.components}</div>
          <div>Range: {spell.range}</div>
          <div>{spell.concentration && "Concentration"}</div>
          <div>Duration: {spell.duration}</div>
        </div>

        <div
          className={clsx("border-t pt-2 mt-1 text-left text-xs sm:hidden", {
            hidden: !open,
            "border-pink-600": spell.level === 0,
            "border-blue-500": spell.level === 1,
            "border-yellow-500": spell.level === 2,
            "border-green-500": spell.level === 3,
          })}
        >
          <div>
            {spell.desc.map(textSection => (
              <div key={textSection} className="pb-2 last:pb-0">
                {textSection}
              </div>
            ))}
            {spell.higher_level && spell?.higher_level.length > 0 && (
              <>
                <div>Higher levels:</div>
                {spell.higher_level?.map(textSection => (
                  <div key={textSection} className="pb-2 last:pb-0">
                    {textSection}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </button>
    </li>
  );
};

export default SpellCard;
