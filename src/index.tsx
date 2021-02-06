import './styles/index.css';
import './assets/fontawesome-free/css/all.min.css';

import 'core-js';

import '@google-web-components/google-chart';

import { ExFModule } from 'exf-ts';
import { App } from './App';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Footer } from './components/Footer';
import { SidebarTab } from './components/Sidebar/SidebarTab';
import { RouterModule } from 'exf-router';
import { Breadcrumb } from './components/Breadcrumb';
import { Dashboard } from './components/Dashboard';
import { Projects } from './components/Projects';
import { ProjectCreate } from './components/ProjectCreate';
import { Tasks } from './components/Tasks';
import { TaskCreate } from './components/TaskCreate';
import { ProjectDetails } from './components/ProjectDetails';
import { TaskDetails } from './components/TaskDetails';
import { Team } from './components/Team';
import { Profile } from './components/Profile';
import { Settings } from './components/Settings';

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
		Footer,
		Breadcrumb,
		Dashboard,
		Projects,
		ProjectCreate,
		ProjectDetails,
		Tasks,
		TaskCreate,
		TaskDetails,
		Team,
		Profile,
		Settings
	],
	bootstraps: [
		App
	],
	root: 'root'
})

