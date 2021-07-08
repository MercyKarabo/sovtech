import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Link } from "react-router-dom";

const Search = (props: any) => {
    const textvalue = props.textvalue;

    // Fetching data from the GraphQL API
    const SEARCHCHARACTERS = gql`

{
    allPeople {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      
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
    }
  }
    
`;

    const { loading, error, data } = useQuery(SEARCHCHARACTERS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Whoops... something went wrong! </p>
    if (textvalue.trim() === "") {
        return <></>
    } else {
        // Looping data from GraphQL API using .map and filtering by search value
        return <div className={"results-container"}>{data.allPeople.people.filter((person: any) => person.name.toLowerCase().includes(textvalue)).map((entity: any, id: any) => (

            <Link to={{
                pathname: './Details',
                state: {
                    name: entity.name,
                    id: entity.id,
                    height: entity.height,
                    mass: entity.mass,
                    birthyear: entity.birthYear,
                    created: entity.created,
                    haircolor: entity.hairColor,
                    eyecolor: entity.eyeColor,
                    skincolor: entity.skinColor,
                    gender: entity.gender,
                    homeworld: entity.homeworld.id
                }
            }} key={id} className={"links"}>

                <div className="container p-3 pb-0 pt-0 mt-0 mb-0">
                    <div className="row justify-content-start">

                        <div className="line-results">

                            <span>{entity.name}</span>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
        </div>
    }

}

export default Search;