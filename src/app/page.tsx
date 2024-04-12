"use client";

import { useState } from "react";
import Layout1 from "./Layout1";
import Layout3 from "./Layout3";
import Layout2 from "./Layout2";

export default function Home() {
  const [pages, setPages] = useState<number>(1);
  const handleSetPage = () => {
    if (pages > 2) {
      setPages(1);
    } else {
      setPages(pages + 1);
    }
  };
  return (
    <div className="h-screen w-screen bg-mimi-pink-light flex flex-col">
      {pages == 1 ? <Layout1 /> : pages == 2 ? <Layout2 /> : <Layout3 />}
      <div className=" w-full h-[200px] flex justify-center items-start pt-4">
        {pages !== 3 ? (
          <button
            className="h-max w-max bg-white text-mimi-pink-dark text-2xl font-bold font-Merienda px-9 py-4 rounded-lg border-4 border-mimi-pink-medium hover:bg-mimi-blue"
            onClick={() => {
              handleSetPage();
            }}
          >
            Gooo!
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
