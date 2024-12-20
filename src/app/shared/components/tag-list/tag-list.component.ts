import {Component, Input} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TagsListType} from '../../../tags/types/popularTags.interface'

@Component({
  selector: 'mc-tag-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss',
})
export class TagListComponent {
  @Input('tags') tagListProps: TagsListType = ['test']
}
