import Image from "next/image";

const base64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgYFRcMnfV/y9/GbkVGdjUnDNzW1JyOxhYlAF40Ah0YMgUXQAAAABJRU5ErkJggg==";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden relative min-h-screen min-w-full">
        <Image
          src="/bg.png"
          alt="background"
          placeholder="blur"
          blurDataURL={base64}
          sizes="(max-width: 768px) 768px, (max-width: 1200px) 1920px, 3840px"
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </main>
  );
}
