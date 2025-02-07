```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: This will cause an infinite loop because
    // setCount triggers a re-render, which calls useEffect again.
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```