import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import Hero from "./_components/Hero";
import { News } from "./_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/5/1",
      createdAt: "2023/5/1",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/5/1",
      createdAt: "2023/5/1",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/5/1",
      createdAt: "2023/5/1",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 3);
  return (
    <>
      <Hero title="テクノロジーの力で世界を変える" sub="私たちは" />
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
