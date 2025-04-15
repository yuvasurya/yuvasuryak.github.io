export function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I’m <span className="text-teal-400">Yuva</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl">
        Cybersecurity Engineer passionate about securing apps, APIs, clouds, and networks. 
        I blend offensive and defensive techniques to protect systems, enable compliance, and outsmart threats.
      </p>
      <p className="text-md text-gray-400 mb-8">
        Red team mindset. Blue team discipline. Purple team effectiveness.
      </p>
      <a
        href="/about"
        className="bg-teal-500 hover:bg-teal-400 text-black font-semibold py-3 px-6 rounded-xl transition duration-300"
      >
        Learn More About Me →
      </a>
    </div>
  );
}
