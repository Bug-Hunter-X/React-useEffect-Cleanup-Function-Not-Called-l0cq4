```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render
    console.log('Effect running');
    return () => {
      // Cleanup function. This is important for preventing memory leaks
      console.log('Cleanup function running');
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```