import React from 'react'

import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className="w-full  bg-black px-0 py-5 text-white mt-6 relative laptop:absolute  desktop:absolute desktop:bottom-0">
        <div className=" max-w-[90rem] desktop:w-[95%] mx-auto flex bg-transparent justify-start items-end px-6 desktop:px-0 tablet:justify-between gap-10 ">
          <Image
            src="/img/logo_grupo.svg"
            width={126}
            height={92}
            alt="Logo grupo plan marketing"
          />
          <small className="">
            Grupo Plan Marketing (C) Todos os direitos reservados - 2025
          </small>
        </div>
      </footer>
    </>
  )
}

export default Footer
