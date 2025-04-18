import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="border m-5 p-2 rounded-3xl">
            <div className="grid grid-cols-4 justify-items-center">
                <Link to="/home" >
                    <div className="hover:bg-blue-500 rounded">
                        Home
                    </div>
                </Link>
                <Link to="/earn" >
                    <div className="hover:bg-blue-500 rounded">
                        Earn
                    </div>
                </Link>
                <Link to="/redeem" >
                    <div className="hover:bg-blue-500 rounded">
                        Redeem
                    </div></Link>

                <Link to="/history" >
                    <div className="hover:bg-blue-500 rounded">
                        History
                    </div></Link>
            </div>
        </nav>
    );
}

export default Navbar;