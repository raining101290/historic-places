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
        {(status === 'loading' || !place) ? (
            <div role="status" class="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                    </svg>
                </div>
            </div>
        ):(
            <Image
                width={400}
                height={400}
                src={`/large/${place.image}`}
                alt={place.name}
                className="w-full object-cover"
            />
        )}
    </div>
    <p className="text-slate-700">{place.description}</p>
</article>
);
}
