import { useState } from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'

export default function Home() {
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState()

  const connectWalletHandler = async () => {
    //check Matamask
    if (typeof window !== "undefine" && typeof window.ethereum !== "underfined") {
      try {
        //request Matamask
        await window.ethereum.request({ method: "eth_requestAccounts"})
        // create web3
        const web3 = new Web3(window.ethereum)
        setWeb3(web3)
        //list accouts
        const accouts = await web3.eth.getAccounts()
        setAddress(accouts[0])
      } catch(err) {
        console.log(err.message)
      }
    } else {
      console.log("Please install MetaMask 🦊")
    }
  }




  return (
    <div>
      <Head>
        <title>Ether Lottery</title>
        <meta name="description" content="Dargon Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className="navbar mt-4 mb-4">
          <div className="container">
            <div className="navbar-brand">
              <h1>Dargon Lottery 🐉</h1>
            </div>
            <div className="navbar-end">
              <button onClick={connectWalletHandler} className="button is-link"> Connect Wallet 💳</button>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="mt-5">
            <div className="columns">
              <div className="column is-two-thirds">
                <section className="mt-5">
                  <p>Enter the lottery by sending 0.01 Ether</p>
                  <button className="button is-primary is-light is-large mt-3">Play now</button>
                </section>
                <section className="mt-6">
                  <p><b>Admin:</b> Pick winner</p>
                  <button className="button is-primary is-light is-large mt-3">Pick Winner</button>
                </section>
              </div>
              <div className={`${styles.lotteryinfo} column is-one-third`}>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Lottery History 🔮</h2>
                        <div className="history-entry">
                          <div><b>Lottery #winer:</b></div>
                            <div>
                              <a href="https://etherscan.io/address/0x0185445BC74d20B3b038Ed16D1c3aFABF4E3b4d5">
                              0x0185445BC74d20B3b038Ed16D1c3aFABF4E3b4d5
                              </a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Players #1 🤴🏻</h2>
                        <div>
                              <a href="https://etherscan.io/address/0x0185445BC74d20B3b038Ed16D1c3aFABF4E3b4d5">
                              0x0185445BC74d20B3b038Ed16D1c3aFABF4E3b4d5
                              </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Reward 💰</h2>
                         <p>10 Ether</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
       <p>&copy; 2022 BY NATTAPONG B.</p>
      </footer>
    </div>
  )
}
