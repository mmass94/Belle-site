import "bootstrap/dist/css/bootstrap.css";
import ImagesList from "@/components/ImagesList";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <ImagesList></ImagesList>
      </div>
    </Layout>
  );
}
