function GreatGrandChild({ count, add }) {
  return (
    <div style={{
      border: '4px solid #7fdbff',
      margin: '1rem',
    }}>
      <p>I'm a great-grandchild!</p>
      <p>Count is: {count}</p>
      <button onClick={add}>Increment Count</button>
    </div>
  );
}

export default GreatGrandChild;