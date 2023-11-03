import React from 'react';
import Logo from "../../ui/Logo/Logo";

const Header = () => {

    return (
        <header className="flex h-20">
            <div className="language">
                Russian
            </div>
            <div className="h-20">
                <Logo/>
            </div>
        </header>
    );
};

export default Header;