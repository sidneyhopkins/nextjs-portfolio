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
];

export default function DndSpells() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section className="mx-auto max-w-5xl">
      {loading ? (
        <span className="loading">Loading...</span>
      ) : (
        <ul className="grid fluid-grid-4 items-start gap-2">
          {spells.map(spell => (
            <SpellCard key={spell.name} spell={spell} />
          ))}
        </ul>
      )}
    </section>
  );
}
