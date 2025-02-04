import React from "react";
import CharacterCard from "./Cards/CharacterCard";

const RickAndMorty = ({ characterList, locationList, episodeList }) => {
  const { data, status } = characterList;
  return (
    <div>
      <h2>Rick And Morty</h2>

      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          {data.results.map((dataPoint, dataIndex) => (
            <CharacterCard dataPoint={dataPoint} dataIndex={dataIndex} />
          ))}
        </>
      )}
    </div>
  );
};

export default RickAndMorty;
