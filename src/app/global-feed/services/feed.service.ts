import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {FeedInterface} from '../types/feed.interface'
import {HttpClient} from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<FeedInterface> {
    return this.http.get<FeedInterface>(url)
  }
}
