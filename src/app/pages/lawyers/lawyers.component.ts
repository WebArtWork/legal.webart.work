import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-lawyers',
	imports: [CardModule, TranslateDirective],
	templateUrl: './lawyers.component.html',
	styleUrl: './lawyers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LawyersPageComponent {
	readonly placeholders = Array.from({ length: 6 });
}
