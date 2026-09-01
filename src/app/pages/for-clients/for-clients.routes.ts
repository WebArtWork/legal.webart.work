import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-clients.component').then((m) => m.ForClientsPageComponent),
	},
];
