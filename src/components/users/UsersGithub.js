import { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = (props) => {
    return (
        <div>
            <h2>Login: {props.login}</h2>
            <h2>Count repositories: {props.public_repos}</h2>
            <h3>Followers: {props.followers}</h3>
            <img width="300px" src={props.avatar_url} />
        </div>
    );
}

export default function UsersGithub() {
    const [userObj, setUserObj] = useState(null);
    const [userName, setUserName] = useState("");

    useEffect(async () => {
        await loadUserInfo();
    }, []);

    useEffect(() => {

    }, [userObj]);
    const handleOnChange = (event) => {
        setUserName(event.target.value);
        console.log(userName);
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        await loadUserInfo(userName);
    }

    const loadUserInfo = async (userName) => {
        // const userName = "TSShrol";
        const query = `https://api.github.com/users/${userName}`;
        try {
            const resp = await axios.get(query);
            if (resp.status == 200) {
                console.log(resp.data);
                setUserObj(resp.data);
                console.log(setUserObj.userName)
            }
        }
        catch {
            setUserObj(null);
        }

    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="Input user name for search" value={userName} onChange={handleOnChange} required />
                <input type="submit" value="search" />
            </form>

            {userObj == null ? <h2>Not Found</h2> : <UserInfo {...userObj} />}
        </>
    );

}