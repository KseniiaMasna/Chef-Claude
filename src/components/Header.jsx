import logoUrl from '../assets/logo.png'

const Header = () => {
    return (
        <header>
            <img src={logoUrl} alt="logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}

export default Header