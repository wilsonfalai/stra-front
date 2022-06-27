import { useRouter } from 'next/router';
import React, { useState,useEffect, useRef, Fragment } from "react";
import { Row, Container, Table} from 'react-bootstrap';
import Link from 'next/link'
import Router from 'next/router'

type Films = {
      id: number,
      title: string,
      director: string,
};


function Film({film}: any) {
  const router = useRouter()
  const { id } = router.query

  const [atores, setActors] = useState('');
  const [planets, setPlanets] = useState('');

    useEffect(() => {
        let actorsData = renderRowsActors(film.peoples);
        setActors(actorsData);

        let planetsData = renderRowsPlanets(film.planets);
        setPlanets(planetsData);

        console.log(film.peoples); 
    },[])
  
  return (
        <div>
          <section>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-8 content">
                        <h2 className="text-primary text-center mt-3 mb-3">{film.title}</h2>
                        
                        <h5 className="mb-4"><b>Diretor</b>: {film.director}</h5>

                        <h5 className="card-header mt-4">Atores</h5>
                        <table className="table">
                          <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Sexo</th>
                                    <th scope="col">-</th>
                                </tr>
                            </thead>
                          <tbody>
                            {atores}  
                          </tbody>
                        </table>

                        <h5 className="card-header mt-4">Planetas</h5>
                        <table className="table">
                        <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">População</th>
                                    <th scope="col">-</th>
                                </tr>
                            </thead>
                          <tbody>
                            {planets}  
                          </tbody>
                        </table>
                        

                    </div>
                </div>
            </div>
          </section>
         
        </div>
      )
  }


function renderRowsActors(item: any) {
  return  item.map(function(data: any, i: number) {
       
      return (
          <tr key={"item-" + i}>  
              <td>{i+1}</td>          
              <td scope="col">{data.name}</td>
              <td scope="col">{data.gender}</td>
              <td scope="col">
                  <Link href={`/actor/${data.id}`}>
                      <button className="btn btn-primary">Visualizar</button>
                  </Link>
              </td>                    
          </tr>
        );
  });
}

function renderRowsPlanets(item: any) {
  return  item.map(function(data: any, i: number) {
       
      return (
          <tr key={"item-" + i}>  
              <td>{i+1}</td>          
              <td scope="col">{data.name}</td>
              <td scope="col">{data.population}</td>
              <td scope="col">
                  <Link href={`/planet/${data.id}`}>
                      <button className="btn btn-primary">Visualizar</button>
                  </Link>
              </td>                    
          </tr>
        );
  });
}


export async function getStaticProps({ params }: any) {


    const res = await fetch(`http://127.0.0.1:8000/api/film/${params.id}`)
    const film = await res.json()
  
    return {
      props: {
        film,
      },
    }
  }

export async function getStaticPaths() {

  const res = await fetch('http://127.0.0.1:8000/api/film')
  const posts = await res.json()

    const paths = posts.map((film: any) => ({
      params: { id: film.id.toString()},
    }))

    //   const paths = [
    //     { params: { id: '23' } },
    //     { params: { id: '24' } },
    //     { params: { id: '25' } }
    // ]

  return { paths, fallback: false }
}
  
  export default Film