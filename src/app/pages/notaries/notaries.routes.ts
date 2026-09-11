import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./notaries.component').then((m) => m.NotariesPageComponent),
	},
];
