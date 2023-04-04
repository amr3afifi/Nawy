import Image from 'next/image'
import MyLogo from '../public/nawy.svg'

function Header(){
    return (
        <header >
            <Image src={MyLogo} alt="Nawy"/>
            <style jsx>{`

                header {
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 20px 0 0 0 ;
                }
                
            `}</style>
      </header>
    )
}

export default Header
