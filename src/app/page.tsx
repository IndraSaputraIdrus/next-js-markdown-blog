import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="prose mx-auto">
      <p className="text-2xl text-black/90">
        Hello, i'm indra. i like to make website (nextjs). You can contact me on
        Twitter
      </p>
      <Posts />
    </main>
  );
}
