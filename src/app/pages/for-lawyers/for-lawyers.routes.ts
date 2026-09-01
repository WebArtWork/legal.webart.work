import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-lawyers.component').then((m) => m.ForLawyersPageComponent),
	},
];
