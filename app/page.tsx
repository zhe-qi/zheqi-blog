import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs/promises';

export const dynamic = 'force-static'; // Ensure static generation

export default async function Home() {
  const file = await fs.readFile('./public/bg.png');
  const { base64 } = await getPlaiceholder(file);

  return (
    <main>
      <Image
        src="/bg.png"
        alt="background"
        placeholder="blur"
        blurDataURL={base64}
        quality={100}
        sizes='100vw 100vh'
        fill={true}
        style={{
          objectFit: 'cover',
        }}
      />
    </main>
  );
}
