import Home from '../containers/home';
import { RouteProps } from 'react-router-dom';
import Sobre from '../containers/sobre';
import Combustivel from "../containers/combustivel";
import StarWars from "../containers/star-wars";
import StarWarsDetails from "../containers/star-wars-details";
import Register from '../containers/register';
import Cache from '../containers/cache';
import Eleicoes from '../containers/eleicoes';

const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
  name?: string
}

export const endpoints: EndPointsProps[] = [
  { path: `${publicUrl}/`, component: Home, exact: true },
  { path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true },
  { path: `${publicUrl}/combustivel`, name: 'Combustível', component: Combustivel, exact: true },
  { path: `${publicUrl}/sobre`, name: 'Sobre', component: Sobre, exact: true },
  { path: `${publicUrl}/star-wars/:id`, component: StarWarsDetails },
  { path: `${publicUrl}/cache/`, name:'Cache', component: Cache},
  { path: `${publicUrl}/star-wars/`, name:'Star Wars', component: StarWars, exact: true },
  { path: `${publicUrl}/cep/`, name:'Consulta CEP', component: Register, exact: true },
  { path: `${publicUrl}/eleicoes`, name: 'Eleições', component: Eleicoes, exact: true },
];