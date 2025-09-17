import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar({ value, onChange, placeholder = "Buscador..." }) {
  return (
    <div className="relative w-full max-w-screen-sm mx-auto">
      
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="block w-full border border-gray-300 p-2 pl-10 my-4 rounded-md shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}