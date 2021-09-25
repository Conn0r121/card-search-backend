const static_orb = {
    name: "Static Orb",
    mana_cost: "{3}",
    cmc: 3,
    type_line: "Artifact",
    oracle_text: "As long as Static Orb is untapped, players can't untap more than two permanents during their untap steps.",
    colors: []
};

const sensory_deprivation = {
    name: "Sensory Deprivation",
    mana_cost: "{U}",
    cmc: 1,
    type_line: "Enchantment — Aura",
    oracle_text: "Enchant creature\nEnchanted creature gets -3/-0.",
    colors: [
      "U"
    ]
};

const deem_worthy = {
    name: "Deem Worthy",
    mana_cost: "{4}{R}",
    cmc: 5,
    type_line: "Instant",
    oracle_text: "Deem Worthy deals 7 damage to target creature.\nCycling {3}{R} ({3}{R}, Discard this card: Draw a card.)\nWhen you cycle Deem Worthy, you may have it deal 2 damage to target creature.",
    colors: [
      "R"
    ]
};

const starnheim_courser = {
    name: "Starnheim Courser",
    mana_cost: "{2}{W}",
    cmc: 3,
    type_line: "Creature — Pegasus",
    oracle_text: "Flying\nArtifact and enchantment spells you cast cost {1} less to cast.",
    colors: [
      "W"
    ]
};

const cards = [static_orb, sensory_deprivation, deem_worthy, starnheim_courser];

module.exports = cards;
