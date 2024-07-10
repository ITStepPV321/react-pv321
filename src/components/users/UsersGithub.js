import { useEffect, useState } from "react";
import axios from "axios";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
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
    const [userObj, setUserObj] = useState({});
    const [userName, setUserName] = useState("");

    // useEffect(() => {
    //     loadUserInfo();
    // }, []);

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
        const resp = await axios.get(query);
        if (resp.status == 200) {
            console.log(resp.data);
            setUserObj(resp.data);
        }

    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="Input user name for search" value={userName} onChange={handleOnChange} required />
                <input type="submit" value="search" />
            </form>

            <UserInfo {...userObj} />
        </>
    );


}