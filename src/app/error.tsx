// error.tsx
'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full md:ml-80">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <button
                className="px-4 py-2 bg-[#149ddd] text-white rounded"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}