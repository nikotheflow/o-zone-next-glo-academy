import Filter from "../ui/Filter";
import Link from "next/link";
import Search from "../ui/Search";
import CartButton from "../ui/CartButton";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="navbar-wrapper d-flex justify-content-between align-items-center">
                <Link href="/" className="logo" ></Link>

                <div className="d-flex control-wrapper">
                  <Filter />
                  <Search />
                </div>

                <CartButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}