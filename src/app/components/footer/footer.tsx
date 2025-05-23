import React from 'react'

import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className="w-full  bg-black px-0 py-5 text-white mt-7">
        <div className=" max-w-[90rem] desktop:w-[95%] mx-auto flex bg-transparent justify-start items-end px-6 desktop:px-0 tablet:justify-between gap-10 ">
          <div className="relative w-[7.8rem] h-[5.7rem]">
            <Image
              fill
              style={{ objectFit: 'contain' }}
              priority
              src="/img/logo_grupo.svg"
              alt="Logo grupo plan marketing"
            />
          </div>
          <small>
            Grupo Plan Marketing (C) Todos os direitos reservados - 2025
          </small>
        </div>
      </footer>
    </>
  )
}

export default Footer
