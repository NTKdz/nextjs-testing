"use client";
import { useEffect, useState } from "react";
import "./styles.css";

export default function HomeScreen() {
  const [words, setWords] = useState(["hello", "hee;"]);

  useEffect(() => {
    // and callback, callback will be executed just
    // after ending of add() function
    function add(a, b, callback) {
      callback();
      console.log(`The sum of ${a} and ${b} is ${a + b}`);
    }

    // The disp() function is called just
    // after the ending of add() function
    function disp() {
      console.log("This must be printed after addition");
    }

    // Calling add() function
    add(5, 6, disp);
    console.log("hello");
  });

  return (
    <div className="w-full h-screen">
      <div className="main-div">
        {/* <div className="testing-animation "></div> */}
        <div>
          {Array.isArray(words) &&
            words.map((item: string, order: number) => {
              return (
                <p key={order}>
                  {item.split("").map((letter: string, index: number) => (
                    <span key={index} className="fancy-word m-2 animate-pulse">
                      {letter}
                    </span>
                  ))}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}
