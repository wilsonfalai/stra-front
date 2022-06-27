import React, { useState,useEffect, useRef, Fragment } from "react";
import Link from 'next/link'

type Data = { param: any, grupo: string }

function Tabela(films : any) {

    const [table, setTable] = useState('');

    useEffect(() => {
        let asd = renderRows(films.films);
        setTable(asd);
        console.log(films); 
    },[])

    return (

        <section className="tabela">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-8 content">
                        <h2 className="text-primary text-center mt-3 mb-3">Filmes</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Diretor</th>
                                    <th scope="col">-</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Tabela;

function renderRows(item: any) {
 
  
    return  item.map(function(data: any, i: number) {
       
            return (
                <tr key={"item-" + i}>  
                    <td>{i+1}</td>          
                    <td scope="col">{data.title}</td>
                    <td scope="col">{data.director}</td>
                    <td scope="col">
                        <Link href={`/film/${data.id}`}>
                            <button className="btn btn-primary">Visualizar</button>
                        </Link>
                    </td>                    
                </tr>
              );
    });
}