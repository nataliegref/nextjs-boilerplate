'use client'
 
import { useState, useEffect } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Loading')

  useEffect(() => {
    // fetch('http:///127.0.0.1:8080/api/home')
    // fetch('/api/home')
    // fetch('https://flask-test-neon-omega.vercel.app/model')
    fetch("https://34.201.3.4:8080//model", {
            

    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fraction: 0.9,
      size: 1000,
      weekday: 0,
      season: 1
    })
    })//to here

      .then(response => response.json())
      .then((data) => {
        setMessage(data.average);
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

