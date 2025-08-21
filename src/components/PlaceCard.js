"use client";
import Link from 'next/link';
import VisitedToggle from './VisitedToggle';
import { useSelector } from 'react-redux';
import Image from 'next/image';

export default function PlaceCard({ place }) {
  const visited = useSelector(s => s.places?.visited?.[place.id]);

  return (
    <div className="group overflow-hidden rounded border-gray-100 bg-white shadow-sm hover:shadow-md transition">
      <Link href={`/place/${place.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            width={400}
            height={400}
            src={`/small/${place.image}`}
            alt={place.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
            loading="lazy"
          />
          {visited && (
            <div className="absolute left-3 top-3 rounded-full bg-green-600 text-white text-xs px-2 py-1">
              Visited
            </div>
          )}
        </div>
      </Link>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-base line-clamp-1">{place.name}</h3>
          <VisitedToggle id={place.id} />
        </div>
        <p className="text-sm text-slate-600 line-clamp-3">{place.description}</p>
        <Link
          href={`/place/${place.id}`}
          className="inline-block text-sm mt-1 border px-2 py-1 border-gray-300 rounded-sm"
        >
          View details →
        </Link>
      </div>
    </div>
  );
}
