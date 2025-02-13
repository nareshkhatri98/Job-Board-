import Link from "next/link"
import { Button } from "../ui/button"
import { ThemeToggle } from "./ThemeToggle"

const NavBar = () => {
  return (
    <div>
        <nav className="flex items-center justify-between py-5">
            <Link href={"/"}>
            <h1 className="text-xl font-bold">Job<span className="text-primary">Naresh</span></h1>
            </Link>
            <div className="flex items-center gap-5">
                <ThemeToggle/>
            <Button>Login</Button>

            </div>
        </nav>
    </div>
  )
}

export default NavBar