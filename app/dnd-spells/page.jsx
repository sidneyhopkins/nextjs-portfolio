"use client";
import { useEffect, useState } from "react";
import { getSpecificSpells } from "../api";
import SpellCard from "../components/SpellCard";

const spellNames = [
  "Message",
  "Mending",
  "Vicious Mockery",
  "Thaumaturgy",
  "Speak with Animals",
  "Silent Image",
  "Dissonant Whispers",
  "Hellish Rebuke",
  "Detect Thoughts",
  "Suggestion",
  "Calm Emotions",
  "Aid",
  "Darkness",
  "Sending",
  "Find Steed",
  "Aura of Vitality",
  "Dispel Magic",
];

export default function DndSpells() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSpell, setActiveSpell] = useState(null);

  useEffect(() => {
    async function fetchSpells() {
      try {
        const savedSpells = localStorage.getItem("spells");
        if (savedSpells) {
          const savedSpellList = JSON.parse(savedSpells);

          // Check if the saved spells are the ones we need
          const hasAllSpells = spellNames.every(name =>
            savedSpellList.some(spell => spell.name === name)
          );

          if (hasAllSpells) {
            setSpells(savedSpellList.sort((a, b) => a.level - b.level));
            setLoading(false);
            return;
          }
        }

        // Fetch spells from the API if not found in local storage or incomplete
        const fetchedSpells = await getSpecificSpells({ spellNames });
        const sortedSpells = fetchedSpells.sort((a, b) => a.level - b.level);
        setSpells(sortedSpells);

        // Save to local storage
        localStorage.setItem("spells", JSON.stringify(sortedSpells));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching spells:", error);
        setLoading(false);
      }
    }
    fetchSpells();
  }, []);

  useEffect(() => {
    if (spells.length > 0 && !activeSpell) {
      setActiveSpell(spells[0]);
    }
  }, [spells]);

  return (
    <section className="mx-auto max-w-5xl py-8 md:py-0">
      {loading ? (
        <span className="loading">Loading...</span>
      ) : (
        <>
          <h1 className="pb-4 text-3xl">DnD Spells</h1>

          <div className="flex gap-2 relative">
            <div className="border dark:border-slate-300 border-slate-500 dark:bg-slate-800 bg-slate-100 rounded-lg p-2 mb-4 w-1/2 sticky top-4 left-0 h-fit hidden sm:block">
              {activeSpell && (
                <>
                  <div className="pb-1 mb-2 border-b">
                    <h2 className="flex-shrink-0">
                      {activeSpell.name}
                      <sup className="text-sm">{' '}{activeSpell.ritual && "(ritual)"}</sup>
                    </h2>

                    <div className="flex gap-x-4 gap-y-1 flex-wrap font-bold text-xs">
                      <div>
                        {activeSpell.level > 0
                          ? `Level ${activeSpell.level}`
                          : "Cantrip"}{"   "}
                      </div>
                      <div>{activeSpell.casting_time}</div>
                      <div>{activeSpell.range}</div>
                      <div>{activeSpell.target}</div>
                      <div>
                        {activeSpell.concentration && "Concentration, "}
                        {activeSpell.duration}
                      </div>
                    </div>
                  </div>

                  <div className="text-sm md:text-sm">
                    {activeSpell.desc.map(textSection => (
                      <div key={textSection} className="pb-2 last:pb-0">
                        {textSection}
                      </div>
                    ))}
                    {activeSpell.higher_level?.length > 0 && (
                      <>
                        <div>Higher levels:</div>
                        {
                          activeSpell.higher_level?.map(textSection => (
                            <div key={textSection} className="pb-2 last:pb-0">{textSection}</div>
                          ))
                        }
                      </>
                    )}
                  </div>
                </>
              )}
            </div>

            <ul className="w-full sm:w-1/2 flex flex-col sm:grid fluid-grid-spells items-stretch gap-2">
              {spells.map(spell => (
                <SpellCard
                  key={spell.name}
                  spell={spell}
                  setActiveSpell={setActiveSpell}
                  activeSpell={activeSpell}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
