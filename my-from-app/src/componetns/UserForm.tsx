import { useState } from "react";


export function UseForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors:  { [key: string]: string } = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!email.includes("@") ) {
            newErrors.email = "Invalid email address";
        }
        if (age && isNaN(Number(age))) {
            newErrors.age = "Age must be a number";
        }
        if (bio.length < 20) {
            newErrors.bio = "Please keep your bio over 30 characters";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

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
                {errors.name && <p style={{ color: "green" }}>{errors.name}</p>}
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
                {errors.email && <p style={{ color: "blue" }}>{errors.email}</p>}
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
                {errors.age && <p style={{ color: "purple"}}>{errors.age}</p>}
            </div>
            <div>
                <label>
                    Bio:
                    <textarea 
                        value={bio} 
                        onChange={(e) => setBio(e.target.value)} 
                        />
                </label>
                {errors.bio && <p style={{ color: "orange"}}>{errors.bio}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    ); 
}