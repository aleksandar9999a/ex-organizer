import './styles/index.css';

import 'core-js';

import { ExFModule } from 'exf-ts';
import { App } from './App';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

ExFModule({
	styles: [
		'@import "src/styles/index.css"'
	],
	components: [
		App,
		Header,
		Sidebar,
		Footer
	],
	bootstraps: [
		App
	],
	root: 'root'
})

