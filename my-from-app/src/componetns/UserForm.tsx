import { useState } from "react";


export function UseForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", {
            name,
            email,
            age,
            bio
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input 
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        />
                </label>
            </div>
            <div>
                <label>
                    Bio:
                    <textarea 
                        value={bio} 
                        onChange={(e) => setBio(e.target.value)} 
                        />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    ); 
}