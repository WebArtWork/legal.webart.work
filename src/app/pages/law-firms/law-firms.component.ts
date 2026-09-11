import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-law-firms',
	imports: [CardModule, TranslateDirective],
	templateUrl: './law-firms.component.html',
	styleUrl: './law-firms.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LawFirmsPageComponent {
	readonly placeholders = Array.from({ length: 6 });
}
