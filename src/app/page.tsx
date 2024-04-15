import Link from "next/link";

const mockImages = [
  "https://utfs.io/f/5ae30328-71bb-457f-825a-d6ccba08eddf-jlo1ag.jpeg",
  "https://utfs.io/f/d9931723-cbb6-4a74-b080-836f5f6d7d86-ke72he.png",
  "https://utfs.io/f/e9e183c9-d221-4c3c-8fbe-08de88fe9324-fgnv5a.png",
  "https://utfs.io/f/778879e0-0e63-4b15-b942-53ebe5b99ff2-1sj3pb.jpeg",
];
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image, i) => (
          <div key={i} className="w-48">
            <img src={image} />
          </div>
        ))}
      </div>
    </main>
  );
}
