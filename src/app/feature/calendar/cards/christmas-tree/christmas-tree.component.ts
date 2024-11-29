import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-christmas-tree',
  imports: [],
  templateUrl: './christmas-tree.component.html',
  styleUrl: './christmas-tree.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChristmasTreeComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ChristmasTree;
}
