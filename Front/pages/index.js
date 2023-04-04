import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios'
import PropertyList from '../components/PropertyList'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import MyLogo from '../public/nawy.svg'

export async function getStaticProps() {
  const properties = await axios.get('http://localhost:8080/properties').then(res => {
                      if(res.status===200)
                      {                       
                        return res.data
                      }
                      else
                      {   alert(res)   }}).catch(err =>{alert(err)})

  return {
    props: {properties},
  }
}

export default function Home(properties) {

  return (

    <div className={styles.container}>

      <Head>
        <title>Nawy</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      </Head>




      <header> 
        <Image src={MyLogo} alt="Nawy"/>
      </header>

      <main>
        
        <PropertyList props={properties}/>

      </main>

      <footer >
        <h6>Powered by<a href="https://www.nawy.com/">Nawy!</a></h6>
      </footer>






      <style jsx>{`
  
        footer {
          width: 100%;
          height: 70px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        header {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px 0 0 0 ;
        }

        footer a,img {
          text-decoration: none;
          color: #0070f3;
          margin-left: 0.5rem;
        }
  
      `}</style>

      <style jsx global>{`
        html,body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif;
        }
        * {box-sizing: border-box;}
      `}</style>

    </div>
  )
}
