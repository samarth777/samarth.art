// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Link href="/gallery">
        Go to Art Gallery
      </Link>
      <Link href="/projects">
        View Projects
      </Link>
      <Link href="/blogs">
        Read Blogs
      </Link>
    </div>
  );
}
