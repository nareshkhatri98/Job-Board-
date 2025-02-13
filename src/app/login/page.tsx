import LoginForm from "@/components/forms/LoginForm"
import Link from "next/link"

const LoginPage = () => {
  return (
   <div className="min-h-screen w-screen flex items-center justify-center">
    <div className="w-full flex max-w-sm flex-col gap-7 ">
        <Link href={"/"}>
        <h1 className="text-xl font-bold text-center">Job <span className="text-primary ">Naresh</span></h1>
        </Link>
        <LoginForm/>
    </div>
   </div>
  )
}

export default LoginPage