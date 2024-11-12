import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { logout } from "../store/AuthSlice";

export default function Header() {
  const dispatch = useDispatch();
  const userStatus = useSelector((state: RootState) => state.auth.status);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/logout`,
      { withCredentials: true }
    );
    dispatch(logout(res.data));
    navigate("/login");
  };
  const navLinks = [
    {
      name: "Login",
      slug: "/login",
      active: !userStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !userStatus,
    },
  ];

  return (
    <div className=" max-sm:px-0 px-6 mx-10">
      <div className="flex justify-between items-center p-4 rounded-md bg-primaryGreen text-white font-primaryFont ">
        <h1 className="text-xl font-bold">Kaizen</h1>
        <nav className="flex justify-center gap-4 items-center">
          {navLinks.map((item, index) =>
            item.active ? (
              <Link
                key={index}
                to={item.slug}
                className={`hover:text-gray-200 font-medium transition-colors`}
              >
                {item.name}
              </Link>
            ) : null
          )}
          <button type="button" className="font-medium" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
}
