import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpiderComponent } from '@wawjs/ngx-bos';
import { AnimateOnScrollModule } from '@wawjs/ngx-prime/animateonscroll';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface LandingFeature {
	number: string;
	icon: string;
	title: string;
	description: string;
	linkLabel: string;
	route: string;
}

interface LandingAudience {
	number: string;
	route: string;
	title: string;
	description: string;
}

interface LandingCaseEvent {
	date: string;
	icon: string;
	title: string;
	description: string;
	tag: string;
}

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	imports: [
		RouterLink,
		SpiderComponent,
		ButtonModule,
		CardModule,
		TranslateDirective,
		AnimateOnScrollModule,
	],
})
export class LandingComponent {
	readonly translateService = inject(TranslateService);

	readonly caseEvents: LandingCaseEvent[] = [
		{
			date: 'Крок 1',
			icon: 'pi pi-comments',
			title: 'Консультація',
			description: 'Юрист оцінює ситуацію та пропонує варіант дій',
			tag: 'Консультація',
		},
		{
			date: 'Крок 2',
			icon: 'pi pi-file-edit',
			title: 'Ведення справи',
			description: 'Документи, договори та терміни в одному профілі',
			tag: 'Справа',
		},
		{
			date: 'Крок 3',
			icon: 'pi pi-verified',
			title: 'Нотаріальне засвідчення',
			description: 'Документи засвідчує нотаріус із мережі Legal',
			tag: 'Нотаріус',
		},
	];

	readonly features: LandingFeature[] = [
		{
			number: '01',
			icon: 'pi pi-id-card',
			title: 'Юристи',
			description:
				'Незалежні спеціалісти з конкретною спеціалізацією та досвідом.',
			linkLabel: 'Переглянути юристів',
			route: '/lawyers',
		},
		{
			number: '02',
			icon: 'pi pi-building',
			title: 'Юридичні фірми',
			description: 'Команди юристів для складних і багатоетапних справ.',
			linkLabel: 'Переглянути фірми',
			route: '/law-firms',
		},
		{
			number: '03',
			icon: 'pi pi-verified',
			title: 'Нотаріуси',
			description: 'Засвідчення документів і нотаріальні дії поруч із вами.',
			linkLabel: 'Переглянути нотаріусів',
			route: '/notaries',
		},
		{
			number: '04',
			icon: 'pi pi-list',
			title: 'Послуги',
			description: 'Готові послуги з чіткою ціною та строком виконання.',
			linkLabel: 'Переглянути послуги',
			route: '/services',
		},
	];

	readonly audiences: LandingAudience[] = [
		{
			number: '01',
			route: '/for-clients',
			title: 'Клієнтам',
			description: 'Знаходьте юристів, нотаріусів і фірми та ведіть справи в одному місці.',
		},
		{
			number: '02',
			route: '/for-lawyers',
			title: 'Юристам',
			description: 'Приймайте заявки на консультації та ведіть справи клієнтів.',
		},
		{
			number: '03',
			route: '/for-law-firms',
			title: 'Юридичним фірмам',
			description: 'Організуйте юристів, клієнтів і послуги фірми в одній системі.',
		},
		{
			number: '04',
			route: '/for-notaries',
			title: 'Нотаріусам',
			description: 'Приймайте заявки на нотаріальні дії та ведіть облік документів.',
		},
	];
}
