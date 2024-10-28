import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const status = true;
  //   const userStatus = useSelector((state) => state.auth.status);
  const navLinks = [
    {
      name: "Login",
      slug: "/login",
      active: !status,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !status,
    },
    {
      name: "Logout",
      slug: "/logout",
      active: status,
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
        </nav>
      </div>
    </div>
  );
}
