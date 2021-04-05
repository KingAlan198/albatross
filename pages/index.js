import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home(data) {

  const [isError, setIsError] = React.useState(false)
  React.useEffect(() => {
    if(!data){
      setIsError(true)
    }
  }, [data])

  return (
    <div className={styles.container}>
      <Head>
        <title>Fantasy Golf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to fantasy golf
        </h1>
        
        <div className={styles.gridTable}>
          <div>Team</div>
          <div>Score</div>
        {console.log("d",JSON.stringify(data.data))} 
        {data && data.data && data.data.data.map(({name, score}) =>  (
          <>
          <div>{name}</div>
          <div>{score}</div>
          </>
        )
         )}
        </div>
        <Link href="/subpages/teams">
          <a>Teams</a>
        </Link>        
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const basePath=process.env.basePath
  console.log("basePath", basePath)
  const res = await fetch(`${basePath}api/hello`)
  const data = await res.json()

  console.log("this is it", data)
  return {
    props: {
      data,
    },
  }
}
