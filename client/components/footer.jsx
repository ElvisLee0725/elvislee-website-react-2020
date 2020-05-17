import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} www.elvislee.com. All Rights Reserved. <br />
                Special thanks to Debra Chiang, an exceptional UI designer and fabulous lover who helps designing this website!
            </p>
        </footer> 
    );
}

export default Footer;