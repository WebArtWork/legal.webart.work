import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-notaries',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-notaries.component.html',
	styleUrl: './for-notaries.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForNotariesPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує реєстрація нотаріуса на Legal?',
			answer: 'Створення профілю та прийом заявок на нотаріальні дії безкоштовні для нотаріусів.',
		},
		{
			question: 'Чи можу я приймати заявки без прив’язки до юридичної фірми?',
			answer: 'Так. Нотаріус працює незалежно й отримує заявки на засвідчення та перевірку документів напряму від клієнтів.',
		},
		{
			question: 'Як фіксується історія нотаріальних дій?',
			answer: 'Кожна нотаріальна дія — документ, сторони, дата й результат — зберігається як окремий запис, доступний клієнту й нотаріусу.',
		},
	];
}
