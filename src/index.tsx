import './styles/index.css';

import 'core-js';

import { ExFModule } from 'exf-ts';
import { App } from './App';
import { Header } from './components/Header';

ExFModule({
	styles: [
		'@import "src/styles/index.css"'
	],
	components: [
		App,
		Header
	],
	bootstraps: [
		App
	],
	root: 'root'
})

