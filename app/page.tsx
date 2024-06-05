import Image from 'next/image';

export default async function Home() {  
  return (
    <main>
      <Image
        src="/bg.png"
        alt="background"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgYFRcMnfV/y9/GbkVGdjUnDNzW1JyOxhYlAF40Ah0YMgUXQAAAABJRU5ErkJggg=="
        quality={90}
        sizes='100vw 100vh'
        fill={true}
        style={{
          objectFit: 'cover',
        }}
      />
    </main>
  );
}
