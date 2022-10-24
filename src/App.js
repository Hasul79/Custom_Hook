import React from "react";
import "./style.css";
import useFetch from './MyHook';

export default function App() {
  const[data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  console.log(data)
  return (
    <div>
     {data.map(({title, id}) => <div key={id}>{title}</div>)};
    </div>
  );
}
