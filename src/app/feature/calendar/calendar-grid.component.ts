import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CalendarCardFactoryDirective} from './cards/calendar-card-factory.directive';
import {CalendarService} from './services/calendar.service';
import {DialogModule} from '@angular/cdk/dialog';
import {SocialProfileUrlPipe} from './pipes/social-profile-url.pipe';
import {ShakeWhenDisabledDirective} from './directives/shake-on-click.directive';
import {OpenDetailsDialogDirective} from './directives/open-details-dialog.directive';

@Component({
    selector: 'xmas-calendar-grid',
    imports: [
        CalendarCardFactoryDirective,
        DialogModule,
        NgOptimizedImage,
        OpenDetailsDialogDirective,
        ShakeWhenDisabledDirective,
        SocialProfileUrlPipe,
    ],
    templateUrl: './calendar-grid.component.html',
    styleUrl: './calendar-grid.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarGridComponent {
  private readonly calendarService = inject(CalendarService);
  cards = this.calendarService.cards;
}
