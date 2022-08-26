import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [language, setLanguage] = useState("es"); //initial state
  const [text, setText] = useState(""); //text input 

  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

/*
useState
  Function that works with React's state system
  State is like a variable in React
  State is usedto store data that changes overtime
  Whenever state changes, React automatically updates content on the screen
Our app has three pieces of data that change
  The text the user typed into the text input
  Language the user wanted to translate text to
  The result of the translation

*/
