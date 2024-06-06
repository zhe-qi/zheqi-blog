import Image from "next/image";
import "./home.css";
import BackTop from "@/components/The/backTop"

const base64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgYFRcMnfV/y9/GbkVGdjUnDNzW1JyOxhYlAF40Ah0YMgUXQAAAABJRU5ErkJggg==";

export default function Home() {
  return (
    <main>
     
      <div className="overflow-hidden relative z-2 min-h-screen min-w-full">
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
            zIndex: 1
          }}
        />
        <svg
          className="w-full absolute bottom-0 left-0 z-10 h-16"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.6"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.4)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.2)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff99" />
          </g>
        </svg>
      </div>

      <Image
        src="/background-home.png"
        alt="background-home"
        width={1600}
        height={1792}
        style={{
          position: "fixed",
          objectFit: "cover",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      />

      <BackTop />

      <div className="h-[2000px]"></div>
    </main>
  );
}
