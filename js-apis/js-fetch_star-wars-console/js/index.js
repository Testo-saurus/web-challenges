console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const data = await fetch(url);

  const jsonRes = await data.json();

  console.log("data", data);
  console.log("jsonRes", jsonRes);
  console.log(jsonRes.results[2].name);
}

fetchData();
