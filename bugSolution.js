```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if(isRunning) {
        intervalId = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'Stop' : 'Start'}</button>
    </div>
  );
}
```