const AboutSection = () => {
  return (
    <section className="section-container py-16 bg-white dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-brand-dark dark:text-white">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a cloud associate and aspiring software developer with a background in IT support.
          </p>
        </div>
        <div>
          <img
            src="/images/about-about me.jpg"
            alt="About me"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
