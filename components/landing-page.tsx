import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-gray-50/90 py-12 lg:py-24 md:px-36 ">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Create stunning business cards in minutes
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Make a great first impression with professionally designed
                business cards. Our easy-to-use editor lets you customize every
                aspect, and our high-quality printing ensures your cards look
                perfect.
              </p>
              <div className="flex gap-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/signup"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <img
              alt="Screenshot"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="394"
              src="/example.png"
              width="700"
            />
          </div>
        </div>
      </div>
      <section className="grid items-start w-full gap-12 py-28 lg:py-24 md:px-36 bg-slate-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Perfectly Tailored
              </h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Create the ideal business card with customizable templates,
                easy-to-use editing tools, and high-quality printing options.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-5 grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Customizable</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You can customize all your data and add what you wnat from the
                dashboard
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Easy Editing Tools</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our intuitive editor makes it simple to customize your cards
                with text, images, and logos.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">High-Quality Printing</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We use premium materials and state-of-the-art printing
                technology to ensure your cards look professional.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-12 lg:py-24 md:px-36">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 md:gap-8">
            <div className="flex items-start gap-4">
              <img
                alt="Avatar"
                className="rounded-full overflow-hidden ring-2 ring-gray-900 w-12 h-12 object-cover object-center"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <p className="text-gray-100 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
                "I couldn't believe how quick and easy it was to design my
                business cards! The interface is incredibly user-friendly, and I
                had my cards customized and ordered in minutes. The quality of
                the cards is fantastic—crisp, vibrant, and professional. Highly
                recommend!"
                <br />
                <strong className="font-medium not-italic text-gray-100 dark:text-gray-400">
                  - Omar Alaswadi
                </strong>
              </p>
            </div>
            <div className="flex items-start gap-4">
              <img
                alt="Avatar"
                className="rounded-full overflow-hidden ring-2 ring-gray-900 w-12 h-12 object-cover object-center"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <p className="text-gray-100 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
                "This service is a lifesaver! I was able to create my business
                cards in no time, thanks to the intuitive design tools. The
                whole process was smooth and straightforward. When the cards
                arrived, I was amazed by the high-quality print and premium
                materials. I'll definitely be using this again."
                <br />
                <strong className="font-medium not-italic text-gray-100 dark:text-gray-400">
                  - Samer Muhsen
                </strong>
              </p>
            </div>
            <div className="flex items-start gap-4">
              <img
                alt="Avatar"
                className="rounded-full overflow-hidden ring-2 ring-gray-900 w-12 h-12 object-cover object-center"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <p className="text-gray-100 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
                "I'm blown away by how simple and fast it was to create my
                business cards. The templates are great, and the editor made it
                easy to customize everything just the way I wanted. The best
                part? The cards were printed and delivered quickly, and they
                look absolutely stunning. Excellent quality!"
                <br />
                <strong className="font-medium not-italic text-gray-100 dark:text-gray-400">
                  - Ali Kamel
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
