import React, {useState} from 'react';
import logo from "./images/logo1.png"
import functions from "./images/functions.png"
import user from './images/user.jpg'

const Search = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const keyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(searchTerm)
            setSearchTerm('')
        }
    }

    return (
        <>
            <div className="header">
                <a href="/" className="brand">
                    <img src={logo} alt="" className="logo"/>
                </a>
                <input type="text" onChange={event => setSearchTerm(event.target.value)} placeholder="Search"
                       value={searchTerm} onKeyPress={keyPress}/>
                <div className="icons">
                    <img src={functions} alt="" className="functions"/>
                    <a href="/" className="user">
                        <img src={user} alt=""/>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Search;