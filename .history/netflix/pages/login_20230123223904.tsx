import Head from "next/head"
import Image from "next/image"

function login() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center
    md:justify-center md:bg-transparent">
  <Head>
    <title>Login-Netflix</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

<img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
 
  </div>
  )
}

export default login