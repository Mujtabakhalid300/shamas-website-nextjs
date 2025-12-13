import { Gothic_A1 } from "next/font/google";
import Link from "next/link";
const gothic_A1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["400", "700", "200"],
});

const Footer = () => {
  return (
    <footer>
      <div
        className={`w-full bg-white p-10 border-t-[1px] border-[rgba(0,0,0,0.1)]`}
      >
        <div
          className={`${gothic_A1.className} font=[400] opacity-50 text-base text-center `}
        >
          <Link href="www.instagram.com">Instagram</Link> |{" "}
          <Link href="www.linkedIn.com">LinkedIn </Link>{" "}
        </div>
        <p
          className={`${gothic_A1.className} font=[400] opacity-50 text-base text-center `}
        >
          &copy; 2025 SHAMAS CONTRACTING CO INC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
