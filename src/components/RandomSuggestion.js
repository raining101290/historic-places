"use client";
import { useDispatch, useSelector } from 'react-redux';
import { randomSuggest, setSuggestion } from '@/store/placesSlice';
import Link from 'next/link';
import Image from 'next/image';

export default function RandomSuggestion() {
  const dispatch = useDispatch();
  const { suggestion, items } = useSelector(s => s.places);

  const place = items.find(p => p.id === suggestion);

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(randomSuggest())}
          className="rounded border px-4 py-2 text-sm font-medium bg-white hover:bg-slate-50 border-slate-300 shadow-sm cursor-pointer"
          aria-label="Suggest a random place"
        >
          🎲 Suggest a random place
        </button>
        {place && (
          <button
            onClick={() => dispatch(setSuggestion(null))}
            className="text-xs underline underline-offset-4"
          >
            Clear
          </button>
        )}
      </div>

      {place && (
        <div className="fixed inset-x-0 bottom-4 mx-auto max-w-3xl px-4 z-10">
          <div className="rounded border border-teal-800 bg-white shadow-lg p-4 flex items-center justify-between gap-3 bg-gradient-to-r from-teal-900 via-cyan-900 to-blue-950
">
            <div>
              <div className="text-xs font-bold tracking-wide text-white mb-3">Suggested place</div>
              <div className="font-semibold text-gray-100 flex">
                  <Image className='border border-gray-400 rounded' alt={place.name} width={100} height={70} src={`/small/${place.image}`} />
                  <p className="ml-2">{place.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/place/${place.id}`}
                className="rounded px-3 py-1 text-sm font-medium bg-green-600 text-white hover:bg-green-800"
              >
                View
              </Link>
              <button
                onClick={() => dispatch(randomSuggest())}
                className="rounded px-3 py-1 text-sm font-medium bg-blue-500 hover:bg-blue-800 cursor-pointer text-white"
              >
                Another
              </button>
              <button
                onClick={() => dispatch(setSuggestion(null))}
                className="rounded px-3 py-1 text-sm font-medium border bg-red-100 hover:bg-red-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
