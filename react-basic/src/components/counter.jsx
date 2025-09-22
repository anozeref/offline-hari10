const Counter = ({ count, setCount }) => {
  return (
    <div style={{ margin: "20px 0", gap:"20px" }}>
      <h3>Jumlah Profile: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;

