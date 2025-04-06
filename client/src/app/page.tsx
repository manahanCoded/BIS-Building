
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <div className="relative w-screen h-screen">
        <Image
          src="/Home_Img/Home.jpg"
          alt="Job Image"
          fill
          className="object-cover select-none z-0"
          priority
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/5 dark:bg-black/30 z-10" />
      </div>
    </main>
  );
}