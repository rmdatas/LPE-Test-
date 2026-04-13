export default function LPEElectricalWebsiteConcept() {
  const services = [
    {
      title: 'Residential',
      desc: 'New builds, renovations, lighting upgrades, power, fault finding and premium residential electrical works.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Commercial',
      desc: 'Small to mid-sized commercial installations delivered with clear communication, reliable scheduling and a high standard of finish.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Maintenance',
      desc: 'Fast, professional support for repairs, replacements, compliance upgrades and ongoing electrical maintenance.',
      image: 'https://images.unsplash.com/photo-1581092919535-7146ff1a590e?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Lighting',
      desc: 'Architectural lighting, LED strip, pendants, feature fittings and tailored electrical solutions for premium spaces.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Switchboards',
      desc: 'Switchboard upgrades, safety improvements, new circuits and compliant electrical infrastructure works.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'EV Charging',
      desc: 'High-quality EV charger installations designed for performance, presentation and long-term reliability.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const highlights = [
    'Licensed and insured',
    '12 month workmanship warranty',
    'Certificate of Electrical Safety provided',
    'Premium products and high-quality finishes',
    'Clear communication from quote to completion',
    'Trusted by builders and homeowners'
  ];

  const stats = [
    { value: 'Premium', label: 'Built to a high standard' },
    { value: 'Reliable', label: 'Clear timelines and communication' },
    { value: 'Compliant', label: 'Tested, certified and professional' }
  ];

  const projects = [
    {
      title: 'Custom New Build',
      type: 'Residential',
      suburb: 'Melbourne',
      summary: 'High-end lighting, power and feature electrical works delivered with strong attention to detail and finish quality.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Café Fit-Out',
      type: 'Commercial',
      suburb: 'Melbourne',
      summary: 'Practical project delivery for hospitality spaces with dependable scheduling and clean installation standards.',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Renovation & Extension',
      type: 'Residential',
      suburb: 'Melbourne',
      summary: 'Electrical upgrades and new works designed to suit premium renovations and modern family homes.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80'
    }
  ];

  const contacts = [
    {
      name: 'Ryan Lovett',
      role: 'Director',
      phone: '0421 882 484',
      email: 'ryan@lpelectrical.solutions'
    },
    {
      name: 'Luke Punch',
      role: 'Director',
      phone: '0413 644 367',
      email: 'luke@lpelectrical.solutions'
    }
  ];

  const process = [
    'Initial conversation and scope review',
    'Clear quoting with practical advice',
    'Professional installation by a small experienced team',
    'Testing, certification and clean handover'
  ];

  const testimonialCards = [
    {
      quote: 'Professional, easy to deal with and the finish quality was excellent from start to finish.',
      source: 'Residential Client'
    },
    {
      quote: 'Communication was strong, the workmanship was clean and the project ran exactly as promised.',
      source: 'Builder Client'
    }
  ];

  const heroImage = 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80';
  const aboutImage = 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80';

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-2xl font-semibold tracking-[0.35em]">LPE</div>
            <div className="text-[10px] uppercase tracking-[0.5em] text-white/60">Electrical</div>
          </div>

          <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-white/70 md:flex">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-sm bg-white px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-black transition hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/65">
              Melbourne’s Electrical Experts
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Precision. <br />
              Power. <br />
              Trust.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
              Premium electrical solutions for residential and commercial projects. Built properly, delivered reliably and finished to a standard that reflects your space.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-sm bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-black transition hover:opacity-90"
              >
                Get a Quote
              </a>
              <a
                href="#projects"
                className="rounded-sm border border-white/20 px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-white transition hover:border-white"
              >
                View Projects
              </a>
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xl font-semibold">{item.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-stretch">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/30">
              <div
                className="h-[560px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.65),rgba(0,0,0,0.18),rgba(0,0,0,0.55))]" />
              <div className="absolute bottom-0 left-0 right-0 grid gap-4 border-t border-white/10 bg-black/35 p-6 backdrop-blur-md sm:grid-cols-3 sm:p-8">
                {[
                  ['Licensed & Insured', 'Professional peace of mind'],
                  ['Premium Workmanship', 'Built to a high standard'],
                  ['Reliable Delivery', 'Clear communication throughout']
                ].map(([title, desc]) => (
                  <div key={title}>
                    <div className="text-xs uppercase tracking-[0.28em] text-white/55">{title}</div>
                    <div className="mt-2 text-sm leading-7 text-white/80">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 lg:grid-cols-3 lg:px-10">
          {[
            'Licensed & Insured',
            'Premium Quality',
            'Reliable & On Time'
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-sm uppercase tracking-[0.22em] text-white/72">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/50">Our Services</div>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Complete electrical solutions.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/68">
              From concept to completion, we deliver electrical work that is safe, seamless, visually clean and built to perform.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">0{index + 1}</div>
                  <h3 className="mt-3 text-2xl font-medium">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{service.desc}</p>
                  <div className="mt-6 text-xs uppercase tracking-[0.25em] text-white/55 transition group-hover:text-white/80">
                    Learn More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.35em] text-white/50">Recent Projects</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Built with precision.</h2>
            </div>
            <a
              href="#contact"
              className="w-fit rounded-sm border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.25em] text-white transition hover:border-white"
            >
              Start Your Project
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-black">
                <div
                  className="h-72 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.28em] text-white/45">
                    <span>{project.type}</span>
                    <span>{project.suburb}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-medium">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{project.summary}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-black p-8">
              <div className="text-xs uppercase tracking-[0.35em] text-white/50">What our clients say</div>
              <h3 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight">Trusted by builders & homeowners.</h3>
              <div className="mt-8 grid gap-5">
                {testimonialCards.map((item) => (
                  <div key={item.quote} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-lg leading-8 text-white/78">“{item.quote}”</p>
                    <div className="mt-4 text-xs uppercase tracking-[0.22em] text-white/45">{item.source}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#101010,rgba(255,255,255,0.04),#080808)] p-8">
              <div className="text-xs uppercase tracking-[0.35em] text-white/50">Why clients choose LPE</div>
              <div className="mt-6 grid gap-4">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm leading-7 text-white/78">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-black p-8">
            <div className="text-xs uppercase tracking-[0.35em] text-white/50">About LPE</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Electrical done the right way.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70">
              LPE Electrical was built on workmanship, communication and doing things properly. We take pride in every detail, treat each project like our own and deliver results that last.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Experienced and professional',
                'Focused on quality',
                'Clear communication',
                'Clean presentation on site'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/78">
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="text-xs uppercase tracking-[0.35em] text-white/50">How we work</div>
              <div className="mt-5 grid gap-4">
                {process.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-sm font-medium text-white/80">
                      {index + 1}
                    </div>
                    <div className="pt-1 text-sm leading-7 text-white/72">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <div
              className="h-full min-h-[620px] bg-cover bg-center"
              style={{ backgroundImage: `url(${aboutImage})` }}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/50">Get In Touch</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Let’s talk.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              Ready to get started? Send us a message and we’ll be in touch to discuss your project.
            </p>

            <div className="mt-8 text-xs uppercase tracking-[0.3em] text-white/45">Directors</div>
            <div className="mt-5 grid gap-5">
              {contacts.map((contact) => (
                <div key={contact.email} className="rounded-[1.5rem] border border-white/10 bg-black p-5">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/45">
                    {contact.name} • {contact.role}
                  </div>
                  <div className="mt-3 text-xl">{contact.phone}</div>
                  <div className="mt-1 text-white/60">{contact.email}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">Instagram</div>
              <div className="mt-2 text-xl text-white/80">@lpelectricalsolutions</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-white/45">Name</label>
                <div className="mt-2 rounded-sm border border-white/10 bg-[#090909] px-4 py-4 text-white/35">Name</div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-white/45">Phone</label>
                <div className="mt-2 rounded-sm border border-white/10 bg-[#090909] px-4 py-4 text-white/35">Phone</div>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-[0.25em] text-white/45">Email</label>
                <div className="mt-2 rounded-sm border border-white/10 bg-[#090909] px-4 py-4 text-white/35">Email</div>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-[0.25em] text-white/45">Project Details</label>
                <div className="mt-2 min-h-[150px] rounded-sm border border-white/10 bg-[#090909] px-4 py-4 text-white/35">Project details</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#090909] px-4 py-4 text-sm leading-7 text-white/60">
              Enquiry forms will be configured to send directly to both directors at ryan@lpelectrical.solutions and luke@lpelectrical.solutions.
            </div>

            <button className="mt-6 w-full rounded-sm bg-white px-6 py-4 text-xs font-medium uppercase tracking-[0.22em] text-black transition hover:opacity-90">
              Send Enquiry
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
          <div>
            <div className="text-4xl font-semibold tracking-[0.35em]">LPE</div>
            <div className="mt-2 text-xs uppercase tracking-[0.5em] text-white/55">Electrical</div>
            <p className="mt-6 max-w-md text-base leading-8 text-white/65">
              Premium electrical solutions built on precision, presentation and trust.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">Quick Links</div>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <div><a href="#home" className="transition hover:text-white">Home</a></div>
              <div><a href="#services" className="transition hover:text-white">Services</a></div>
              <div><a href="#projects" className="transition hover:text-white">Projects</a></div>
              <div><a href="#about" className="transition hover:text-white">About</a></div>
              <div><a href="#contact" className="transition hover:text-white">Contact</a></div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">Contact</div>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <div>Ryan • 0421 882 484</div>
              <div>Luke • 0413 644 367</div>
              <div>ryan@lpelectrical.solutions</div>
              <div>luke@lpelectrical.solutions</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs uppercase tracking-[0.2em] text-white/40 md:flex-row md:items-center md:justify-between lg:px-10">
            <div>© 2026 LPE Electrical. All rights reserved.</div>
            <div>Licensed • Insured • Professional</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
