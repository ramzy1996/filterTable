let superheros = [
  {
    id: 1,
    name: "Superman",
    age: 40,
    planet: "Krypton",
    group: "Justice League"
  },
  {
    id: 2,
    name: "Thor",
    age: 400,
    planet: "Asgard",
    group: "Avangers"
  },
  {
    id: 3,
    name: "Starloard",
    age: 45,
    planet: "Earth",
    group: "Guardians"
  },
  {
    id: 4,
    name: "Ironman",
    age: 89,
    planet: "Earth-kosaka",
    group: "Avangers"
  }
];

const creatingRows = (foo) => {
  document.getElementById("dataTable").innerHTML = "";
  foo.forEach((ele, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.append(ele.id);
    let td2 = document.createElement("td");
    td2.append(ele.name);
    let td3 = document.createElement("td");
    td3.append(ele.age);
    let td4 = document.createElement("td");
    td4.append(ele.planet);
    let td5 = document.createElement("td");
    td5.append(ele.group);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    document.getElementById("dataTable").append(tr);
  });
};

creatingRows(superheros);

const searchNames = (sname) => {
  let filterdArray = superheros.filter((supname, index) => {
    return supname.name.toUpperCase().includes(sname.toUpperCase());
  });
  creatingRows(filterdArray);
};
// searchNames();
