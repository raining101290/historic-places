import { ofType, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, catchError, startWith, map } from 'rxjs/operators';
import { fetchPlaces, setPlaces, setStatus, setError, randomSuggest, setSuggestion } from './placesSlice';

const fetchPlacesEpic = (action$) =>
  action$.pipe(
    ofType(fetchPlaces.type),
    mergeMap(() =>
      from(fetch('/api/places').then(r => r.json())).pipe(
        mergeMap((data) => of(setPlaces(data))),
        startWith(setStatus('loading')),
        catchError((err) => of(setError(err.message)))
      )
    )
  );

const randomSuggestEpic = (action$, state$) =>
  action$.pipe(
    ofType(randomSuggest.type),
    map(() => {
      const { items, visited } = state$.value.places || {};
      if (!items || items.length === 0) {
        // Kick off a fetch if empty
        return fetchPlaces();
      }
      // Prefer unvisited; fallback to any
      const unvisited = items.filter(p => !visited[p.id]);
      const source = (unvisited.length ? unvisited : items);
      const pick = source[Math.floor(Math.random() * source.length)];
      return setSuggestion(pick.id);
    })
  );

export const rootEpic = combineEpics(fetchPlacesEpic, randomSuggestEpic);
