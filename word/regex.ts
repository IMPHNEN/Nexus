export function containsObfuscatedSexualDeviation(text) {
  const leetAndCyrillicMap = {
    a: "[a@4аА🅰]{1,}",
    b: "[b8вВ🅱]{1,}",
    c: "[c(¢©сС🅲]{1,}",
    d: "[dԁ🅳]{1,}",
    e: "[e3€еЕ🅴]{1,}",
    f: "[fph🅵]{1,}",
    g: "[gq69🅶]{1,}",
    h: "[h#һН🅷]{1,}",
    i: "[i1!|іІїЇ🅸]{1,}",
    j: "[jјЈ🅹]{1,}",
    k: "[kкК🅺]{1,}",
    l: "[l1!|ӏ🅻]{1,}",
    m: "[mмМ🅼]{1,}",
    n: "[nиИ🅽]{1,}",
    o: "[o0оО🅾🅿️]{1,}",
    p: "[pрР🅿️]{1,}",
    q: "[q9🆀]{1,}",
    r: "[rгГ🆁]{1,}",
    s: "[s5z$ѕЅ🆂]{1,}",
    t: "[t7+тТ🆃]{1,}",
    u: "[uuv🆄]{1,}",
    v: "[v🆅]{1,}",
    w: "[w🆆]{1,}",
    x: "[xхХ🆇]{1,}",
    y: "[yyei1!уУ🆈]{1,}",
    z: "[z2s5🆉]{1,}"
  };

  const obfuscate = (word) =>
    word
      .split("")
      .map(char => (leetAndCyrillicMap[char.toLowerCase()] || char) + "[^\\p{L}\\p{N}\\s]{0,3}")
      .join("");

  const wordList = [
    "gay", "lesbian", "bisexual", "transgender", "homo", "homok", "jomok",
    "homosek", "homoseg", "femboy", "femboi", "boti", "boty",
    "pedo", "pedofil", "pedofilia", "hebephilia", "lolicon", "shotacon",
    "zoofilia", "bestiality", "necrophilia", "incest",
    "sadomasochism", "bdsm", "frotteurism", "voyeurism",
    "ekshibisionisme", "fetish", "paraphilia", "deviantsex", "sexualdeviance"
  ];

  const pattern = new RegExp(
    "\\b(" + wordList.map(obfuscate).join("|") + ")\\b", "iu"
  );

  return pattern.test(text);
}