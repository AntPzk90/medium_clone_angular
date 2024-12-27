import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core'
import {CommonModule} from '@angular/common'
import {UtilsService} from '../../services/utils.service'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'mc-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input('total') totalProps: number = 50
  @Input('currentPage') currentPagePros: number
  @Input('url') urlProps: string
  @Input('limit') limitProps: number = 10

  pagesCount: number
  pages: number[]

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.calculatePagination()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['totalProps'] ||
      changes['currentPagePros'] ||
      changes['urlProps'] ||
      changes['limitProps']
    ) {
      this.calculatePagination()
    }
  }

  private calculatePagination(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}
