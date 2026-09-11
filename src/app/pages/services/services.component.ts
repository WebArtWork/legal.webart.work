import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-services',
	imports: [CardModule, TranslateDirective],
	templateUrl: './services.component.html',
	styleUrl: './services.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPageComponent {
	readonly placeholders = Array.from({ length: 6 });
}
