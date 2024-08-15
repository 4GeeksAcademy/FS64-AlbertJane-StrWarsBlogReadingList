import React, {useContext} from "react";
import "../../styles/home.css";

import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {

	const {store,actions} = useContext(Context)

	return(
		<div className="container-fluid mt-5">
			<div className="container">
				<h1>Characters</h1>
				<div className="d-flex gap-5 flex-wrap">
					
					{
						store.characters.map((character, index) => 
							 <Card key={index} title={character.name} type="character" id={index+1} />
						)
					}
					

				</div>
			</div>
			<div className="container mt-5">
				<h1>Planets</h1>
				<div className="d-flex gap-5 flex-wrap">
					
					{
						store.planets.map((planet, index) => 
							 <Card key={index} title={planet.name} type="planet" id={index+1} />
						)
					}
					

				</div>
			</div>
			
			<div className="container mt-5">
				<h1>Starships</h1>
				<div className="d-flex gap-5 flex-wrap">
					
					{
						store.starships.map((starship, index) => 
							 <Card key={index} title={starship.name} type="starship" id={index+1} />
						)
					}
					

				</div>
			</div>
		</div>
)
}
