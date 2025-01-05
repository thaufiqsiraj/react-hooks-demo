import  { useState, useEffect, useRef, useReducer } from "react";

// Reducer function for useReducer
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        default:
            throw new Error("Unknown action type");
    }
}

export default function HooksDemo() {
    // 1. useState: Managing simple state
    const [name, setName] = useState("");

    // 2. useEffect: Side effects like logging or fetching data
    useEffect(() => {
        console.log("Name updated:", name);
    }, [name]); // Runs whenever `name` changes

    // 3. useRef: Tracking mutable values without causing re-renders
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current += 1;
    });

    // 4. useReducer: Managing more complex state
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div style={{ padding: "20px" }}>
            <h1>React Hooks Demo</h1>

            {/* useState Example */}
            <section>
                <h2>useState</h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>Hello, {name || "Stranger"}!</p>
            </section>

            <hr />

            {/* useEffect Example */}
            <section>
                <h2>useEffect</h2>
                <p>Open the console to see logs when the name is updated.</p>
            </section>

            <hr />

            {/* useRef Example */}
            <section>
                <h2>useRef</h2>
                <p>This component has rendered {renderCount.current} times.</p>
            </section>

            <hr />

            {/* useReducer Example */}
            <section>
                <h2>useReducer</h2>
                <h3>Count: {state.count}</h3>
                <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
                <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
                <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            </section>
        </div>
    );
}
