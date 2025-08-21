"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaces } from '@/store/placesSlice';
import PlaceCard from '@/components/PlaceCard';
import RandomSuggestion from '@/components/RandomSuggestion';
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  const dispatch = useDispatch();
  const { items, status, error, visited } = useSelector(s => s.places);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPlaces());
  }, [status, dispatch]);

  const visitedCount = Object.keys(visited || {}).length;

  return (
    <div className="space-y-6">
      <section className="flex items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">Explore historical places</h2>
          <p className="text-slate-600 text-sm">
            Mark places as visited and get fun random suggestions.
          </p>
        </div>
        <div className="text-sm text-slate-700">
          Visited: <span className="font-semibold">{visitedCount}</span>
        </div>
      </section>
      <Analytics/>
      <RandomSuggestion />

      {status === 'loading' && <div className="text-sm">Loading places…</div>}
      {status === 'failed' && <div className="text-sm text-red-600">Error: {error}</div>}

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(p => (
          <PlaceCard key={p.id} place={p} />
        ))}
      </section>
    </div>
  );
}
