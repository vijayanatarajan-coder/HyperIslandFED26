import GreatGrandChild from "./GreatGrandChild";

function GrandChild({ count, add }) {
  return (
    <div style={{
      border: '4px solid #39cccc',
      margin: '1rem',
    }}>
      <p>I'm the grandchild!</p>
      <GreatGrandChild count={count} add={add} />
    </div>
  );
}

export default GrandChild;