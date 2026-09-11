import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./law-firms.component').then((m) => m.LawFirmsPageComponent),
	},
];
