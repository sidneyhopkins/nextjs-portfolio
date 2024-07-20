const BASE_URL = "https://www.dnd5eapi.co";

const customSpells = [
  {
    name: "Dissonant Whispers",
    level: 1,
    school: "Enchantment",
    casting_time: "1 action",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    classes: ["Bard"],
    desc:
      ["You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn’t move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn’t have to move away. A deafened creature automatically succeeds on the save. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."],
  },
  {
    name: "Aura of Vitality",
    level: 3,
    school: "Evocation",
    casting_time: "1 bonus action",
    range: "Self (30-foot radius)",
    components: ["V"],
    duration: "Concentration, up to 1 minute",
    classes: ["Paladin"],
    desc: [
      "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."
    ],
  },
  // Add more custom spells here if needed
];

type GetSpecificSpellsProps = {
  spellNames?: string[];
};

export async function getSpecificSpells({
  spellNames,
}: GetSpecificSpellsProps) {
  try {
    console.log("Incoming spellNames:", spellNames);

    if (!spellNames || !Array.isArray(spellNames)) {
      throw new Error("spellNames must be an array");
    }

    const spellIndexes = await fetch(BASE_URL + "/api/spells").then(response =>
      response.json()
    );

    // Log fetched spell indexes
    console.log("Fetched spell indexes:", spellIndexes);

    // Combine fetched spells with custom spells
    const allSpells = [...spellIndexes.results, ...customSpells];

    // Log combined spells
    console.log("All spells:", allSpells);

    // Filter spells to only include those in the spellNames array
    const filteredSpells = allSpells.filter(spell =>
      spellNames.includes(spell.name)
    );

    // Log filtered spells
    console.log("Filtered spells:", filteredSpells);

    // Fetch details for only those spells that require fetching
    const detailedSpells = await Promise.all(
      filteredSpells.map(spell => {
        // Check if the spell is a custom spell
        const customSpell = customSpells.find(custom => custom.name === spell.name);
        if (customSpell) {
          // Return the custom spell data directly
          return Promise.resolve(customSpell);
        } else {
          // Fetch from API if not custom
          return fetch(BASE_URL + spell.url).then(response => response.json());
        }
      })
    );

    // Log detailed spells
    console.log("Detailed spells:", detailedSpells);

    return detailedSpells;
  } catch (error) {
    console.error("Error fetching spells:", error);
    return [];
  }
}
