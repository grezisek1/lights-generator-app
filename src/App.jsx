import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { NumberInput } from "./components/NumberInput";
import { Light } from "./components/Light";

// app state management
const defaultState = { rows: 0, columns: 0 };
let size, setSize;
function decrement({target}) {
  if (size[target.name] == 0) {
    return;
  }
  size[target.name]--;
  setSize(Object.create(size));
}
function increment({target}) {
  size[target.name]++;
  setSize(Object.create(size));
}
const stateSetters = { decrement, increment };


export default function App() {
  [size, setSize] = useState(defaultState);
  return <>
    <header className={"header"}>
      <Counter count={size.rows * size.columns} />
      <div className={"controls"}>
        <NumberInput label="rows" name="rows" value={size.rows} {...stateSetters} />
        <NumberInput label="columns" name="columns" value={size.columns} {...stateSetters} />
      </div>
    </header>
    <main className={"lights"}>
      <Light color={"yellow"} />
    </main>
  </>;
}
