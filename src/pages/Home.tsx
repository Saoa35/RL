import React, { useState } from "react";
import Filter from "../components/Filter";
import Trips from "../components/trip/Trips";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter
        search={search}
        setSearch={setSearch}
        duration={duration}
        setDuration={setDuration}
        level={level}
        setLevel={setLevel}
      />
      <Trips search={search} duration={duration} level={level} />
    </main>
  );
};

export default Home;
