let users = [
  "Aldert Turgenev",
  "Bernard Turgenev",
  "Roisin Leroy",
  "Zendaya Anderson",
  "Triantafylos Ryan",
  "Awj Kapule",
  "Oliver Dam",
  "Roisin Leroy",
  "Chanel Dam",
  "Jozefa Semenov",
  "Claire Wagner",
  "Jozefa Johnson",
  "Bernard Turgenev",
  "Artem Kahananui",
  "Aldert Turgenev",
  "Artem Jafri",
  "Seo-joon Huppe",
  "Niall Carbonneau",
  "Niall Carbonneau",
  "Aroos  Poirier",
];

function funcUser(username) {
  userrandom = Math.random() * username.length;

  return username[Math.floor(userrandom)];
}

console.log(funcUser(users));

document.getElementById("demo").innerHTML = funcUser(users);
