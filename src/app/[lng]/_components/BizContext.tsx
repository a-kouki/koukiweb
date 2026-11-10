"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = { biz: string; setBiz: (v: string) => void };
const BizCtx = createContext<Ctx | null>(null);

export function useBiz() {
  const c = useContext(BizCtx);
  if (!c) throw new Error("useBiz precisa estar dentro de BizProvider");
  return c;
}