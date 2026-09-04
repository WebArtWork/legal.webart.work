import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CompanyService } from '../../features/company/company.service';
import { FooterLink } from './footer.types';

@Component({
	selector: 'layout-footer',
	templateUrl: './footer.component.html',
	imports: [RouterLink, TranslateDirective],
})
export class FooterComponent {
	readonly userService = inject(UserService);
	readonly companyService = inject(CompanyService);

	readonly year = new Date().getFullYear();
	readonly company = this.companyService.company();
	readonly metaTitle = this.company.title;
	readonly metaDescription = this.company.description;

	private readonly allLinks = computed<FooterLink[]>(() => [
		{ label: 'Головна', icon: 'home', to: '/' },
		{ label: 'Профіль', icon: 'user', to: '/profile' },
		{ label: 'Для клієнтів', icon: 'users', to: '/for-clients' },
		{ label: 'Для юристів', icon: 'briefcase', to: '/for-lawyers' },
		{ label: 'Для юридичних фірм', icon: 'building', to: '/for-law-firms' },
		{ label: 'Для нотаріусів', icon: 'id-card', to: '/for-notaries' },
		{
			label: 'Користувачі',
			icon: 'user-edit',
			to: '/admin/users',
			adminOnly: true,
		},
		{
			label: 'Клієнти',
			icon: 'users',
			to: '/admin/clients',
			adminOnly: true,
		},
		{
			label: 'Форми',
			icon: 'table',
			to: '/admin/forms',
			adminOnly: true,
		},
		{
			label: 'Переклади',
			icon: 'language',
			to: '/admin/translates',
			adminOnly: true,
		},
	]);

	readonly links = computed(() => {
		const isAdmin = this.userService.role('admin');
		return this.allLinks().filter((l) => !l.adminOnly || isAdmin);
	});
}
