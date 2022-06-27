import { Row, Container, Table} from 'react-bootstrap';
import Link from 'next/link'
import Tabela from './tabela'



function Film({films}: any) {
    return (
        <div>
          <Tabela films={films}/>
        </div>
      )
  }


export async function getStaticProps() {

    // Call an external API endpoint to get posts
    const res = await fetch('http://127.0.0.1:8000/api/film')
    const films = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        films,
      },
    }
  }
  
  export default Film