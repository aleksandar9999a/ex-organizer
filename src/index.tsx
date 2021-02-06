import './styles/index.css';
import './assets/fontawesome-free/css/all.min.css';

import 'core-js';

import { ExFModule } from 'exf-ts';
import { App } from './App';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Footer } from './components/Footer';
import { SidebarTab } from './components/Sidebar/SidebarTab';
import { RouterModule } from 'exf-router';

ExFModule({
	styles: [
	'@import "src/styles/index.css"',
	'@import "src/assets/fontawesome-free/css/all.min.css"',
	],
	modules: [
		RouterModule
	],
	components: [
		App,
		Header,
		Sidebar,
		SidebarTab,
		Footer
	],
	bootstraps: [
		App
	],
	root: 'root'
})

