import { useContext } from "react";
import CountContext from "./CountContext";
import GreatGreatGrandChild from "./GreatGreatGrandChild";

function GreatGrandChild() {
  const num = useContext(CountContext)
  return (
    <div style={{
      border: '4px solid #7fdbff',
      margin: '1rem',
    }}>
      <p>I'm a great-grandchild!</p>
      <p>Count: {num}</p>
      <GreatGreatGrandChild/>
    </div>
  );
}

export default GreatGrandChild;