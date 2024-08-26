import Container from "@/components/ui/Container/page"
import Logo from "@/components/ui/Logo/page"
import UserAvatar from "@/components/ui/UserAvatar/page"
import { authOption } from "@/libs/next-auth"
import { getServerSession } from "next-auth"
import LogoImage from '@/public/Ivar_logo (2).png'


const NavBar = async () => {
    const session = await getServerSession(authOption)
    return (
        <nav>
           <Container isFullHeight  className="flex  items-center justify-between   ">
            <Logo image={LogoImage } alt="logo ivar"/>
            <UserAvatar session={session}/>
           </Container>
        </nav>
    )
}

export default NavBar ;