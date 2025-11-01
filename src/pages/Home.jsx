import Button from "../components/Button";

export default function Home() {
  return (
    <div className="space-y-4 text-center mt-10">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

