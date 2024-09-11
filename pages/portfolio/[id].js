import { useRouter } from "next/router";

export default function PortfolioDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Portfolio {id} Detail</h1>
    </div>
  );
}
