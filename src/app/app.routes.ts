import { Routes } from '@angular/router';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';
import { MetaGuard } from '@wawjs/ngx-core';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: '',
				pathMatch: 'full',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Головна',
					},
				},
				loadChildren: () =>
					import('./pages/landing/landing.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'sign',
				canActivate: [guestGuard, MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
					},
				},
				loadChildren: () =>
					import('./pages/sign/sign.routes').then((m) => m.routes),
			},
			{
				path: 'profile',
				canActivate: [authenticatedGuard, MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
					},
				},
				loadChildren: () =>
					import('./pages/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
					},
				},
				loadChildren: () =>
					import('./pages/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запросити в Legal',
						description:
							'Відскануйте QR-код, щоб приєднатися до Legal за кілька секунд.',
					},
				},
				loadChildren: () =>
					import('./pages/share/share.routes').then((m) => m.routes),
			},
			{
				path: 'for-clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для клієнтів',
						description: 'Знаходьте юристів, нотаріусів і юридичні фірми та керуйте своїми справами разом з Legal.',
					},
				},
				loadChildren: () =>
					import('./pages/for-clients/for-clients.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-lawyers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для юристів',
						description: 'Ведіть клієнтів, справи, консультації та документи в одному місці з Legal.',
					},
				},
				loadChildren: () =>
					import('./pages/for-lawyers/for-lawyers.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-law-firms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для юридичних фірм',
						description: 'Організуйте юристів, клієнтів, справи та послуги фірми в одній системі Legal.',
					},
				},
				loadChildren: () =>
					import('./pages/for-law-firms/for-law-firms.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-notaries',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для нотаріусів',
						description: 'Приймайте заявки на нотаріальні дії та ведіть облік засвідчених документів з Legal.',
					},
				},
				loadChildren: () =>
					import('./pages/for-notaries/for-notaries.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'lawyers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Юристи',
						description: 'Каталог незалежних юристів Legal — спеціалізація, досвід і відгуки клієнтів.',
					},
				},
				loadChildren: () =>
					import('./pages/lawyers/lawyers.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'law-firms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Юридичні фірми',
						description: 'Каталог юридичних фірм Legal — команди юристів різних спеціалізацій в одному місці.',
					},
				},
				loadChildren: () =>
					import('./pages/law-firms/law-firms.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'notaries',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Нотаріуси',
						description: 'Каталог нотаріусів Legal — засвідчення документів і нотаріальні дії поруч із вами.',
					},
				},
				loadChildren: () =>
					import('./pages/notaries/notaries.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'services',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Юридичні послуги',
						description: 'Перелік юридичних послуг Legal — від консультацій до супроводу справ і нотаріальних дій.',
					},
				},
				loadChildren: () =>
					import('./pages/services/services.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'feed',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Стрічка',
						description: 'Новини та оновлення від юристів, фірм і нотаріусів мережі Legal.',
					},
				},
				loadChildren: () =>
					import('./pages/feed/feed.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full',
	},
];
