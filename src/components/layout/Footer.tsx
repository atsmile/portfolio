type Props = {
  name: string;
};

export default function Footer({ name }: Props) {
  return (
    <footer className="border-t border-green-200 bg-green-50 py-8">
      <div className="max-w-4xl mx-auto w-full px-6 text-center">
        <p className="text-sm text-gray-400">
          © 2025 {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
