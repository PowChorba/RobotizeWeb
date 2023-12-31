'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DotWave } from '@uiball/loaders'

export default function App() {
  const router = useRouter()


  useEffect(() => {
    setTimeout(() => {
      router.push('/home')
    }, 250)
  },[router])

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-10">
      <h2 className="text-4xl font-bold text-[#441eae]">Noticias en Robotize</h2>
    </div>
  );
}
