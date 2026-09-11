import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-feed',
	imports: [CardModule, TranslateDirective],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPageComponent {
	readonly placeholders = Array.from({ length: 4 });
}
