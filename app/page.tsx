'use client'
 
import { useState, useEffect } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Loading')

  useEffect(() => {
    // fetch('http:///127.0.0.1:8080/api/home')
    // fetch('/api/home')
    fetch('https://flask-test-neon-omega.vercel.app/model')
      .then(response => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div>{message}</div>
    </div>
  )
}
