import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-lawyers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-lawyers.component.html',
	styleUrl: './for-lawyers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForLawyersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує реєстрація юриста на Legal?',
			answer: 'Створення профілю, ведення клієнтів і справ безкоштовне для незалежних юристів.',
		},
		{
			question: 'Чи можу я вести практику самостійно, без прив’язки до фірми?',
			answer: 'Так. Незалежний юрист може приймати заявки, вести консультації та справи без входження до жодної юридичної фірми.',
		},
		{
			question: 'Як клієнти знаходять мене серед інших юристів?',
			answer: 'За спеціалізацією, досвідом, відгуками попередніх клієнтів і завантаженістю, яку ви вказуєте у профілі.',
		},
	];
}
