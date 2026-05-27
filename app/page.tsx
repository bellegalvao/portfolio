import { HomeContent } from "./HomeContent";

/**
 * Server Component — mantém a rota fora do bundle de cliente.
 * Todo estado interativo vive em HomeContent (Client Component).
 */
export default function Home() {
  return <HomeContent />;
}
