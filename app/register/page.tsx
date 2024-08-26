import Containerpage from "@/components/ui/Container/page";
import Container from "@/components/ui/Container/page";
import RegisterForm from "@/components/ui/RegisterForm/page";
import { authOption } from "@/libs/next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Register = async () => {

    const session = await getServerSession(authOption)
    if(session?.user.usreId) redirect('/')
    return (
      <Container className="mt-5  ">
        <RegisterForm/>
      </Container>
    )
}

export default Register ; 