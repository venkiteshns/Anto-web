import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5] text-[#171B21] px-6 text-center">
      <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#A99362] font-sans mb-3">
        404 · PAGE NOT FOUND
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl font-light mb-4">
        Estate Residence Not Found
      </h1>
      <p className="text-sm text-[#73716C] font-sans max-w-md mb-8">
        The requested page could not be located. Please return to the estate home.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-[#171B21] text-white px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#2A313C] transition-colors"
      >
        Return to Estate
      </Link>
    </div>
  );
}
