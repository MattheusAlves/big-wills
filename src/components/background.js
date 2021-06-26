import React from 'react'
import Image from 'next/image'
// import  Background1  from 'public/images/background-1.svg'

export default function background() {
    return (
        <div className="background">
            <img src="/images/background-1.svg"></img>
            <div className='background-two'>
                <img src="/images/background-2.svg"></img>
                <button>
                    <a target="_blank"
                        href="https://api.whatsapp.com/send?phone=5519989568652&text=gostaria+de+fazer+meu+pedido">
                    </a>
                </button>
            </div>
        </div>
    )
}
