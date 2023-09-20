import Image from "next/image"

function Header() {
  return (
    <header className="prose mx-auto py-12 flex flex-col items-center">
      <Image
        className="rounded-full border border-gray-300"
        src="/MyAvatar.jpeg"
        width={180}
        height={180}
        alt="indra"
      />
      <h1 className="-mt-3 font-bold">Ndrainz</h1>
    </header>
  )
}

export default Header
