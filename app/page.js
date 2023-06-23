import AnimatedText from "@/components/AnimatedText";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {LinkArrow} from "@/components/Icon";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full h-full inline-block z-0  bg-light p-32 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src="/Images/bg1.png" alt="bg" width={500} height={500} />
          </div>
          <div className="w-1/2">
            <AnimatedText
              text="Building Beautiful Websites with Purpose."
              classname="!text-left !text-6xl"
            />
            <p className="text-base my-4 font-medium">
              Welcome to my portfolio, where I specialize in crafting beautiful
              websites with a purpose. I believe in the power of design and
              functionality working together to create meaningful online
              experiences.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
              hover:bg-light hover:text-dark border-2 border-solid  border-transparent hover:border-dark   "
                download={true}
              >
                Resume <LinkArrow className={"w-6  ml-1"}/>
              </Link>
              <Link href="mailto: arkhadedarshan@gmail.com" target="_blank" 
              className="text-dark text-lg ml-4 font-medium capitalize underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
