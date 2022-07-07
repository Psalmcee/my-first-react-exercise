import icon from "../images/Fill 213.png"

export default function Navbar() {
    return (
        <div className="header--div">
            <img src={icon} alt={'logo'} className="header--icon" />
            <header className="header">My Travel Journal</header>
        </div>
    )
}