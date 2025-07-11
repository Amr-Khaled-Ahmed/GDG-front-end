import { useState } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';

export default function Login() {
    const [Username, setUsername] = useState("");
    const navigate = useNavigate();
    const Location = useLocation().state;
    console.log(Location);

    function handlesubmit(e) {
        e.preventDefault();
        localStorage.setItem("username", Username);
        navigate(Location?.from || "/");
    }

    return (
        <form onSubmit={handlesubmit}>
            <input
                type="text"
                value={Username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            <button type="submit">Login</button>
        </form>
    );
}
