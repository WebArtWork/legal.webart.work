import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-law-firms',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-law-firms.component.html',
	styleUrl: './for-law-firms.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForLawFirmsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує підключення юридичної фірми до Legal?',
			answer: 'Базове ведення команди, клієнтів і справ безкоштовне для невеликих фірм.',
		},
		{
			question: 'Чи бачить фірма завантаженість кожного юриста в команді?',
			answer: 'Так. Керівник фірми бачить розподіл справ, клієнтів і консультацій по кожному юристу команди.',
		},
		{
			question: 'Чи можна вести кілька напрямів послуг в одній фірмі?',
			answer: 'Так. Фірма може вести каталог послуг — від консультацій до супроводу угод — і призначати їх різним юристам команди.',
		},
	];
}
