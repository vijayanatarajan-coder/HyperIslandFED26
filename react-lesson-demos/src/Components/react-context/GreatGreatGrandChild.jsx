import {useContext} from "react"
import CountContext from "./CountContext";

function GreatGreatGrandChild() {
  const num = useContext(CountContext)
  return (
    <div style={{
      border: '4px solid yellowgreen',
      margin: '1rem',
    }}>
      <p>I'm a great-great-grandchild!</p>
      <p>I also consume count! {num}</p>

      {/* <button onClick={add}>Increment Count</button> */}
    </div>
  );
}

export default GreatGreatGrandChild;