import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <h2 className="text-success">Home</h2>

            <ul>
              <li>
                <Link href="/film">
                  <a>Filmes</a>
                </Link>
              </li>
              <li>
                <Link href="/planet">
                  <a>Planetas</a>
                </Link>
              </li>
              <li>
                <Link href="/people">
                  <a>Atores</a>
                </Link>
              </li>
            </ul>

          </div> 
        </div>
      </section>
    </div>
  )
}

export default Home
