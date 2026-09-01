import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-clients',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-clients.component.html',
	styleUrl: './for-clients.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForClientsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує пошук юриста на Legal?',
			answer: 'Пошук юриста, запис на консультацію та ведення власних справ безкоштовні для клієнтів.',
		},
		{
			question: 'Як швидко я отримаю відповідь від юриста?',
			answer: 'Більшість юристів і фірм відповідають на заявку протягом одного робочого дня.',
		},
		{
			question: 'Чи бачу я всі свої справи та документи в одному місці?',
			answer: 'Так. Кожна консультація, справа, документ і договір прив’язані до вашого профілю та завжди доступні для перегляду.',
		},
	];
}
