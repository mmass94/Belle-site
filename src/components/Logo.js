import logo from "../../logo.jpg"
import Image from 'next/image'

const Logo = () => {
return(
<div className="text-center col-md-12"  >
<Image 
src={logo}
alt="Logo"
width={230}
height={230}
/>                
</div>
)
}
export default Logo