import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  const { id, clientprojectid } = router.query;
  return (
    <div>
      <h1>
        The Project Page for {clientprojectid} for {id}
      </h1>
    </div>
  );
}
