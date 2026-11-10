import type { StaticImageData } from "next/image";
import w1 from '../../../../public/savanna/1.png'
import w2 from '../../../../public/products/1/1.png'
import w3 from '../../../../public/savanna/8.png'
import w4 from '../../../../public/products/2/2.png'
import w5 from '../../../../public/products/5/2.png'
import w6 from '../../../../public/products/5/8.png'
import w7 from '../../../../public/products/5/6.png'
import w8 from '../../../../public/products/5/7.png'
import w9 from '../../../../public/products/3.png'
import w10 from '../../../../public/products/4.png'
import w11 from '../../../../public/savanna/10.png'
import w12 from '../../../../public/savanna/9.png'
import w13 from '../../../../public/savanna/12.png'
import w14 from '../../../../public/templates-models/1/2.png'
import w15 from '../../../../public/templates-models/1/3.png'
import w16 from '../../../../public/templates-models/2/1.png'
import w17 from '../../../../public/templates-models/2/2.png'
import w18 from '../../../../public/templates-models/2/3.png'

export type Work = { id: string; kind: "phone" | "desktop" ; src:StaticImageData};

// Uma entrada por imagem. Para adicionar um trabalho, acrescente uma linha.
// Com imagens reais: { id, kind, src, alt }, com o texto alternativo vindo do dicionário.
export const WORKS: Work[] = [
  { id: "w1", kind: "phone", src: w1 },
  { id: "w2", kind: "desktop", src:w2},
  { id: "w3", kind: "phone", src:w3 },
  { id: "w4", kind: "desktop", src:w4 },
  { id: "w5", kind: "desktop", src:w5 },
  { id: "w6", kind: "phone", src:w6 },
  { id: "w7", kind: "desktop", src:w7 },
  { id: "w8", kind: "phone", src:w8 },
  { id: "w9", kind: "phone", src:w9 },
  { id: "w10", kind: "phone", src:w10 },
  { id: "w11", kind: "phone", src:w11 },
  { id: "w12", kind: "phone", src:w12 },
  { id: "w13", kind: "phone", src:w13 },
  { id: "w14", kind: "phone", src:w14 },
  { id: "w15", kind: "phone", src:w15 },
  { id: "w16", kind: "phone", src:w16 },
  { id: "w17", kind: "phone", src:w17 },
  { id: "w18", kind: "phone", src:w18 },
];