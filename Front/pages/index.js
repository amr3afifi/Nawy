import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios'

import AddProperty from '../components/AddProperty'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropertyList from '../components/PropertyList'

export async function getStaticProps() {
  const properties = await axios.get(process.env.BASE_URL+'properties').then(res => {
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
      
      <Header></Header>

      <main>
        <AddProperty></AddProperty>
        <PropertyList props={properties}/>
      </main>

      <Footer></Footer>

      <style jsx global>{`
          html,body {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif;
          }
          * {box-sizing: border-box;}
        `}
      </style>

    </div>
  )
}
