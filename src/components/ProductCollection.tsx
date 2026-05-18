import React from "react";

export default function ProductionC() {
  return (
    <section className="w-full bg-(--background)">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-(--foreground) lg:text-5xl">
            Product Collection
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                alt=""
                className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-112.5"
              />

              <div className="relative  pt-3">
                <h3 className="text-sm text-gray-500 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-(--foreground)">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                alt=""
                className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-112.5"
              />

              <div className="relative  pt-3">
                <h3 className="text-sm text-gray-500 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-(--foreground)">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                alt=""
                className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-112.5"
              />

              <div className="relative  pt-3">
                <h3 className="text-sm text-gray-500 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-(--foreground)">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                alt=""
                className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-112.5"
              />

              <div className="relative  pt-3">
                <h3 className="text-sm text-gray-500 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-(--foreground)">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
