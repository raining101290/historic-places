"use client";
import { useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaces } from '@/store/placesSlice';
import VisitedToggle from '@/components/VisitedToggle';
import Link from 'next/link';
import Image from 'next/image';

export default function PlaceDetails() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { items, status } = useSelector(s => s.places);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPlaces());
  }, [status, dispatch]);

  const place = useMemo(() => items.find(p => p.id === id), [items, id]);

  if (status === 'loading' && !place) {
    return <div className="text-sm">Loading…</div>;
  }
  console.log('place::', place)

  if (!place) {
    return (
      <div className="space-y-4">
        <p className="text-sm">Place not found.</p>
        <button
          onClick={() => router.back()}
          className="inline-flex rounded-xl border px-3 py-2 text-sm bg-white hover:bg-slate-50"
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <article className="space-y-6">
      <Link href="/" className="inline-block text-sm border border-gray-300 rounded-sm py-1 px-2">← Back to list</Link>
      <header className="flex items-start justify-between gap-3">
        <h1 className="text-2xl font-semibold">{place.name}</h1>
        <VisitedToggle id={place.id} />
      </header>
      <div className="overflow-hidden rounded border-gray-100 bg-white">
        <Image
            width={400}
            height={400}
            src={`/large/${place.image}`}
            alt={place.name}
            className="w-full object-cover"
        />
      </div>
      <p className="text-slate-700">{place.description}</p>
    </article>
  );
}
