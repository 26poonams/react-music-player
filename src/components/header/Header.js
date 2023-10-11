import './style.css';


function Header(){
    return(
        <>
        <header className="navbar">
            <div> 
                <h2>Music Player</h2>
                <p>Favourites</p>
                <input type="text" placeholder="Search.."></input>
                <p>Signup</p>
                <p>Login</p>
            </div>
        </header>
        </>
    )
}

export  default Header;