import { useState, useEffect } from "react";
import { supabase } from "../client";
import Music from "./music";

export default function App() {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  async function fetchSongs() {
    const { data } = await supabase.from("songs").select();

    setMusicList(data);
  }

  return (
    <div className="row">
      {musicList ? (
        musicList.map((m, key) => <Music musicList={m} index={key} />)
      ) : (
        <h1 style={{ color: "white" }}>No Music Found!</h1>
      )}
    </div>
  );
}
