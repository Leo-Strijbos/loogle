import { SearchPageClient } from "@/components/SearchPageClient";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";

  return <SearchPageClient initialQuery={query} />;
}
