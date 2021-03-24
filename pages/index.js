import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

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
        {data && data.data.map(({name, score}) =>  (
          <>
          <div>{name}</div>
          <div>{score}</div>
          </>
        )
         )}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      data: [{"name": "team 1", "score":"100"},{"name": "team 2", "score":"120"},{"name": "team 3", "score":"60"}]
    }
  }
}
