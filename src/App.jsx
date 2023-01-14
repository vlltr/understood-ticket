export default function App() {
  return (
    <main>
      <div className="relative flex justify-center items-center h-screen px-6 lg:px-8">
        <div className="mx-auto content-center max-w-3xl">
          <div>
            <div>
              <h1 className="text-6xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Mauricio Villatoro
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                  className="flex items-center justify-center rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50"
                  href="#"
                >
                  Read More{" "}
                  <span aria-hidden="true" role="img" className="ml-1.5">
                    🤔
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
