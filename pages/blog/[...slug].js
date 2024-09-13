import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();

  const { slug } = router.query;
  console.log(slug);

//   const slugValues = Object.values(slug); // Convert object values to an array
//   console.log(slugValues);

  return (
    <div>
      <h1>The blog post {...slug}</h1>
    </div>
  );
}
