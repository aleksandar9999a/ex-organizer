import './styles/bootstrap-grid.min.css';
import './styles/bootstrap-reboot.min.css';
import './styles/bootstrap-utilities.min.css';
import './styles/bootstrap.min.css';
import './styles/index.css';

import 'core-js';

import { ExFModule } from 'exf-ts';
import { App } from './App';
import { Header } from './components/Header';

ExFModule({
	styles: [
		'@import "src/styles/bootstrap.min.css"',
		'@import "src/styles/bootstrap-grid.min.css"',
		'@import "src/styles/bootstrap-reboot.min.css"',
		'@import "src/styles/bootstrap-utilities.min.css"',
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

