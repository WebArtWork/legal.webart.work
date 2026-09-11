import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-notaries',
	imports: [CardModule, TranslateDirective],
	templateUrl: './notaries.component.html',
	styleUrl: './notaries.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotariesPageComponent {
	readonly placeholders = Array.from({ length: 6 });
}
