import logo from "../../logo.png";
import Image from "next/image";

const Logo = () => {
  const aspectRatio = 1.2;
  const width = 1282;
  const height = width / aspectRatio;
  return (
    <div className="text-center col-md-12">
      <Image src={logo} alt="Logo" width={width / 5} height={height / 5} />
    </div>
  );
};
export default Logo;

// import Image from 'next/image'

// function MyComponent() {
//   const aspectRatio = 1.5 // Replace with the actual aspect ratio of the image
//   const width = 300 // Replace with the desired width of the image
//   const height = width / aspectRatio // Calculate the height based on the aspect ratio

//   return (
//     <div>
//       <Image
//         src="/path/to/image.jpg"
//         alt="Image description"
//         width={width}
//         height={height}
//       />
//     </div>
//   )
// }
