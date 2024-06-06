import { useState } from "react";
import "./App.css";
import emojisList from "./assets/emojis-list.json";
import Line from "./components/Line";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <main className="flex flex-col items-center py-8 gap-12">
        <Search state={search} setState={setSearch} />
        <div className="w-3/4 flex flex-col gap-3">
          {emojisList.map((emoji, index) => {
            if (emoji.keywords.toLowerCase().includes(search.toLowerCase())) {
              return (
                <Line title={emoji.title} symbol={emoji.symbol} key={index} />
              );
            }
            return null;
          })}
        </div>
      </main>
    </>
  );
}

export default App;
