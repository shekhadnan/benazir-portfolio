export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container">

        <div className="py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left */}

          <div className="text-center lg:text-left">

            <h3 className="text-2xl font-black">
              Benazir
              <span className="text-blue-500">.</span>
            </h3>

            <p className="text-zinc-400 mt-2">
              Business Development • Operations • AI Strategy
            </p>

          </div>

          {/* Center */}

          <div className="text-center">

            <p className="text-zinc-500">
              © {new Date().getFullYear()} Benazir Niyariya
            </p>

            <p className="text-zinc-600 text-sm mt-2">
              All Rights Reserved
            </p>

          </div>

          {/* Right */}

          <div>

            <a
              href="#"
              className="secondary-btn"
            >
              Back to Top ↑
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}