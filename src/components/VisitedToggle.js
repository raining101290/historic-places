"use client";
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisited } from '@/store/placesSlice';
import { clsx } from 'clsx';

export default function VisitedToggle({ id }) {
  const dispatch = useDispatch();
  const visited = useSelector(s => s.places?.visited?.[id]);

  return (
    <button
      onClick={() => dispatch(toggleVisited(id))}
      className={clsx(
        "rounded-full px-3 py-1 text-xs font-medium transition border",
        visited
          ? "bg-green-600 text-white border-green-600"
          : "border-pink-300 text-pink-500 hover:bg-slate-50"
      )}
      aria-pressed={visited ? 'true' : 'false'}
    >
      {visited ? 'Visited ✓' : 'Mark visited'}
    </button>
  );
}
