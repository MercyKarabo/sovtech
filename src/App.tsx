import React, { useState, ChangeEvent } from 'react';
import './App.css';

import { useQuery, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.css';
import SearchResults from './search';
import { Link } from "react-router-dom";


// Fetching data from the GraphQL API

const CHARACTERS = gql`

query dataQuery($after: String){
    allPeople(first: 10, after: $after) {
      
      people{
        id
        name
        height
        mass
        birthYear
        created
        hairColor
        eyeColor
        skinColor
        gender
        homeworld{
          id
        }
      }

      pageInfo {
        startCursor
        endCursor
      }


    }
  }
`;



const App = (initial: any) => {
  const [textSearch, setTextSearch] = useState<string>("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);

  };
  const { loading, error, data, fetchMore } = useQuery(CHARACTERS, {
    variables: {
      after: '',
    },
  });
  let textValue = textSearch;
  let btnLabel = '';

  if (loading) return <p>Loading...</p>
  console.log(data);
  if (error) return <p>Whoops... something went wrong! </p>
  return (
    <>
      <div className={"text-center col-12 mb-4 mt-4"}>
        <h2>Star wars characters</h2><br />
        <div className="row text-center justify-content-center">
          <div className={"col-lg-2 col-10 p-0"}>
            <input name={"search"} className={"search-input"} placeholder={"Search"} onChange={onChangeText} />


            <SearchResults textvalue={textValue} />

          </div>
        </div>
      </div>

      {data.allPeople.people.map((person: any, id: any) => (

        <Link to={{
          pathname: './Details',
          state: {
            name: person.name,
            id: person.id,
            height: person.height,
            mass: person.mass,
            birthyear: person.birthYear,
            created: person.created,
            haircolor: person.hairColor,
            eyecolor: person.eyeColor,
            skincolor: person.skinColor,
            gender: person.gender,
            homeworld: person.homeworld.id
          }
        }} key={id} className={"links"}>
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-lg-8 col-11 mb-4 container-box">
                <strong className={"name"}>{person.name}</strong><br />
                <span>
                  <ul><li><b>Attributes</b>
                    <ul style={{ marginTop: -3 }}>
                      <li><b style={{ color: "#3399cc" }}>Height:</b> {person.height}</li>
                      <li><b style={{ color: "#3399cc" }}>Mass:</b> {person.mass}</li>
                      <li><b style={{ color: "#3399cc" }}>Gender:</b> {person.gender}</li>
                      <li><b style={{ color: "#3399cc" }}>Homeworld:</b> {person.homeworld.id}</li>
                    </ul>

                  </li></ul>
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}

      {
        data.allPeople.pageInfo.endCursor === null ?
          <div className={"container"}>
            <div className={"row text-center justify-content-center"}>
              <div className={"col-lg-1 col-12 text-center"}>
                <button className="nextDis" style={{ width: 130 }} onClick={() => alert("No more data available")}>LOAD MORE...</button>
              </div>
            </div>
          </div>
          :

          <div className={"container"}>
            <div className={"row justify-content-center"}>

              <div className={"col-lg-1 col-12 text-center"}>

                <button className={"next"} onClick={() => {
                  const { endCursor } = data.allPeople.pageInfo;

                  // console.log(endCursor);


                  // Fetching appending data from GraphQL API when "LOAD MORE..." button is clicked
                  fetchMore({
                    variables: {
                      after: "'" + endCursor + "'",
                    },
                    updateQuery: (prevResult, { fetchMoreResult }) => {
                      fetchMoreResult.allPeople.people = [
                        ...prevResult.allPeople.people,
                        ...fetchMoreResult.allPeople.people

                      ]

                      return fetchMoreResult;
                    }
                  })
                }}
                >
                  LOAD MORE...</button>
              </div>
            </div>

          </div>


      }


    </>
  );
}

export default App;
