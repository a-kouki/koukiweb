import type { StaticImageData } from "next/image";

import w1 from '../../../../public/photos/1.png'
import w1t from '../../../../public/photos/1.5.png'
import w2 from '../../../../public/photos/2.png'
import w3 from '../../../../public/photos/3.png'
import w3t from '../../../../public/photos/3.5.png'
import w4 from '../../../../public/photos/4.png'
import w5 from '../../../../public/photos/5.png'
import w6 from '../../../../public/photos/6.png'
import w6t from '../../../../public/photos/6.5.png'
import w7 from '../../../../public/photos/7.png'
import w8 from '../../../../public/photos/8.png'
import w8t from '../../../../public/photos/8.5.png'
import w9 from '../../../../public/photos/9.png'
import w10 from '../../../../public/photos/10.png'
import w11 from '../../../../public/photos/11.png'
import w12 from '../../../../public/photos/12.png'

export type Work = { id: string; kind: "phone" | "desktop" ; src:StaticImageData};

export const IMAGES: Work[] = [
  // { id: "...", src: importedImage }, ...
  { id: "w1", kind: "phone", src: w1 },
  { id: "w1t", kind: "phone", src: w1t },
  { id: "w2", kind: "phone", src: w2 },
  { id: "w3", kind: "phone", src: w3 },
  { id: "w3t", kind: "phone", src: w3t },
  { id: "w4", kind: "phone", src: w4 },
  { id: "w5", kind: "phone", src: w5 },
  { id: "w6", kind: "phone", src: w6 },
  { id: "w6t", kind: "phone", src: w6t },
  { id: "w7", kind: "phone", src: w7 },
  { id: "w8", kind: "phone", src: w8 },
  { id: "w8t", kind: "phone", src: w8t },
  { id: "w9", kind: "phone", src: w9 },
  { id: "w9", kind: "phone", src: w10 },
  { id: "w9", kind: "phone", src: w11 },
  { id: "w9", kind: "phone", src: w12 },
];

