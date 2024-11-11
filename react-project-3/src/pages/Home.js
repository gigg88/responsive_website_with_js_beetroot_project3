import { useState } from 'react';

export default function Home () {

    const [counter, setCounter] = useState(1);

    return (
        <div className = "alpha">
            <h1>You have clicked {counter} times</h1>
        </div>
    )
}