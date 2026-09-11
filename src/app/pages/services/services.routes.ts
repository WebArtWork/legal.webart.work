import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./services.component').then((m) => m.ServicesPageComponent),
	},
];
