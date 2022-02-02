import { useQuery } from "react-query";

async function fetchData() {
  const key = "1c6203b9-263c-4d75-9768-b924fc31056d";
  const result = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc`,
    {
      headers: {
        authorization: key,
        Accept: "application/json",
      },
    }
  );
  const json = await result.json();
  return json;
}

export function useCats() {
  return useQuery(["cats"], fetchData);
}
