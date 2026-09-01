import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-notaries.component').then((m) => m.ForNotariesPageComponent),
	},
];
