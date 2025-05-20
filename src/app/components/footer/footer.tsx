import React from 'react'

import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className="w-screen bg-black px-0 py-5 text-white mt-6 desktop:mt-0">
        <div className="w-full desktop:w-3/4 mx-auto flex bg-transparent justify-between items-end px-6 gap-10 ">
          <Image src="/img/logo_grupo.svg" width={70} height={52} alt="Logo" />
          <small className="">
            Grupo Plan Marketing (C) Todos os direitos reservados - 2025
          </small>
        </div>
      </footer>
    </>
  )
}

export default Footer
