import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./lawyers.component').then((m) => m.LawyersPageComponent),
	},
];
