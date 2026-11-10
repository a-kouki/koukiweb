import { Geist, Geist_Mono, Grand_Hotel, ABeeZee } from "next/font/google";
import "./model-1.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-grand-hotel",
  display: "swap",
});

const abeezee = ABeeZee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abeezee",
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${geistSans.variable} ${geistMono.variable} ${grandHotel.variable} ${abeezee.variable} model-1-scope text-black`}>
      {children}
    </section>
  );
}

