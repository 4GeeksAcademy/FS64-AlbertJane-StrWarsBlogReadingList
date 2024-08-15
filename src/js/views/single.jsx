import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {type, id} = useParams();
	const [singleData,setsingleData] = useState({});

	useEffect(() => {
		if(type === 'character'){
			setsingleData(store.characters[id-1]);
			
		}
		if(type === 'planet'){
			setsingleData(store.planets[id-1]);
			
		}
		if(type === 'starship'){
			setsingleData(store.starships[id-1]);
			
		}
	},[]);
	return (
		<>
				{console.log(singleData)}
				{
				type === 'planet' &&  
				
				<div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
            <div className="row w-100">
                <div className="col-12 text-center mb-5">
                    <h1 className="display-3 text-dark">{singleData.name}</h1>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Rotation Period:</strong> {singleData.rotation_period} hours</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Orbital Period:</strong> {singleData.orbital_period} days</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Diameter:</strong> {singleData.diameter} km</p>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Climate:</strong> {singleData.climate}</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Gravity:</strong> {singleData.gravity}</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Terrain:</strong> {singleData.terrain}</p>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Surface Water:</strong> {singleData.surface_water}%</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Population:</strong> {singleData.population}</p>
                </div>
            </div>
        </div>
				
				}

		{
			type === 'character' &&

			<div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
            <div className="row w-100">
                <div className="col-12 text-center mb-5">
                    <h1 className="display-3 text-dark">{singleData.name}</h1>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Height:</strong> {singleData.height} cm</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Mass:</strong> {singleData.mass} kg</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Hair Color:</strong> {singleData.hair_color}</p>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Skin Color:</strong> {singleData.skin_color}</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Eye Color:</strong> {singleData.eye_color}</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Birth Year:</strong> {singleData.birth_year}</p>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Gender:</strong> {singleData.gender}</p>
                </div>
            </div>
        </div>
		}
		{
			type === 'starship' &&

			<div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
            <div className="row w-100">
                <div className="col-12 text-center mb-5">
                    <h1 className="display-3 text-dark">{singleData.name}</h1>
                    <h2 className="text-muted">{singleData.model}</h2>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Manufacturer:</strong> {singleData.manufacturer}</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Cost in Credits:</strong> {singleData.cost_in_credits}</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Length:</strong> {singleData.length} meters</p>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Max Atmosphering Speed:</strong> {singleData.max_atmosphering_speed} km/h</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Crew:</strong> {singleData.crew}</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Passengers:</strong> {singleData.passengers}</p>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Cargo Capacity:</strong> {singleData.cargo_capacity} kg</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Consumables:</strong> {singleData.consumables}</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Hyperdrive Rating:</strong> {singleData.hyperdrive_rating}</p>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-4 text-center mb-4">
                    <p><strong>MGLT:</strong> {singleData.MGLT}</p>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <p><strong>Starship Class:</strong> {singleData.starship_class}</p>
                </div>
            </div>
        </div>
		}
		</>
		
	);
};

