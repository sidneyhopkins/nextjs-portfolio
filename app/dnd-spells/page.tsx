"use client";
import { useEffect, useState } from "react";
import { getSpecificSpells } from "../api";
import SpellCard from "../components/SpellCard";
import Link from "next/link";
import Image from "next/image";

export type SpellType = {
  name: string;
  level: number;
  school: string;
  casting_time: string;
  range: string;
  components: string;
  duration: string;
  classes: string[];
  desc: string[];
  ritual?: boolean;
  concentration?: boolean;
  target?: string;
  higher_level: string[];
};

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
  "Polymorph",
];

export default function DndSpells() {
  const [spells, setSpells] = useState<SpellType[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSpell, setActiveSpell] = useState<SpellType | null>(null);

  useEffect(() => {
    async function fetchSpells() {
      try {
        const savedSpells = localStorage.getItem("spells");
        if (savedSpells) {
          const savedSpellList: SpellType[] = JSON.parse(savedSpells);

          // Check if the saved spells are the ones we need
          const hasAllSpells = spellNames.every(name =>
            savedSpellList.some(
              (spell: { name: string }) => spell.name === name
            )
          );

          if (hasAllSpells) {
            setSpells(savedSpellList.sort((a, b) => a.level - b.level));
            setLoading(false);
            return;
          }
        }

        // Fetch spells from the API if not found in local storage or incomplete
        const fetchedSpells: SpellType[] = await getSpecificSpells({
          spellNames,
        });
        const sortedSpells: SpellType[] = fetchedSpells.sort(
          (a, b) => a.level - b.level
        );
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
    <section className="mx-auto max-w-5xl">
      {loading ? (
        <span className="loading">Loading...</span>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row gap-12 items-center justify-between">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h1 className="text-4xl font-bold">DnD Spells</h1>
              <p className="pt-2 text-lg font-light">
                Dream Whispers 🔮 Teifling Bard
              </p>
              <Image
                className="rounded-full mx-auto mt-8 border-black border-2"
                src="/img/dream.jpg"
                width="250"
                height="250"
                alt="headshot of Sidney"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3 dark:font-extralight font-medium border border-slate-500 p-4 md:p-8 rounded-lg">
              <p className="text-base">Additional background on the project:</p>
              <p className="pt-2 text-sm">
                I built this because I wasn't very satisfied with the free
                spelltracking options online and wanted to customize the layout.
                I'm using the{" "}
                <Link
                  href="https://www.dnd5eapi.co/"
                  className="underline hover:no-underline"
                >
                  D&D 5e API
                </Link>
                , which works pretty well for my needs but is missing some
                spells from various sources that our table is using. So I have
                some hard-coded spells as well. I'm utilizing local storage to
                reduce the number of requests. Eventually, I'd love to add
                spell-slot tracking and make this a publically available app
                that anyone could use for their DnD spellcasters.
              </p>
            </div>
          </div>

          <div className="flex gap-2 relative mt-8">
            <div className="border dark:border-slate-300 border-slate-500 dark:bg-slate-800 bg-slate-100 rounded-lg p-2 mb-4 w-1/2 sticky top-4 left-0 h-fit hidden sm:block">
              {activeSpell && (
                <>
                  <div className="pb-1 mb-2 border-b">
                    <h2 className="flex-shrink-0">
                      {activeSpell.name}
                      <sup className="text-sm">
                        {" "}
                        {activeSpell.ritual && "(ritual)"}
                      </sup>
                    </h2>

                    <div className="flex gap-x-4 gap-y-1 flex-wrap font-bold text-xs">
                      <div>
                        {activeSpell.level > 0
                          ? `Level ${activeSpell.level}`
                          : "Cantrip"}
                        {"   "}
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
                        {activeSpell.higher_level.map(textSection => (
                          <div key={textSection} className="pb-2 last:pb-0">
                            {textSection}
                          </div>
                        ))}
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
