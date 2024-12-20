import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'

import {TagsListType} from '../types/popularTags.interface'

@Injectable({providedIn: 'root'})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getTags(response: {tags: TagsListType}): TagsListType {
    return response.tags
  }

  getPopularTags(): Observable<TagsListType> {
    const url = 'http://localhost:3000/api/tags'

    return this.http.get<{tags: TagsListType}>(url).pipe(map(this.getTags))
  }
}
