'use client';

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import ShareButtons from './ShareButtons';
import Head from 'next/head'

const imageData = [
  {
    img: 'https://schoolcalendar.net/public/assets/images/calendar-images/Mississippi-School-Holidays-2025.jpg',
    pdf: 'https://schoolcalendar.net/public/assets/images/calendar-images/Mississippi-School-Holidays-2025.pdf',
  },
  {
    img: 'https://schoolcalendar.net/public/assets/images/calendar-images/Mississippi-School-Calendar-2025.jpg',
    pdf: 'https://schoolcalendar.net/public/assets/images/calendar-images/Mississippi-School-Calendar-2025.pdf',
  },
  {
    img: 'https://schoolcalendar.net/public/assets/images/calendar-images/Mississippi-School-Holiday-Calendar-2025.jpg',
    pdf: 'https://schoolcalendar.net/public/assets/images/calendar-images/Mississippi-School-Holiday-Calendar-2025.pdf',
  },
  {
    img: 'https://schoolcalendar.net/public/assets/images/calendar-images/Mississippi-School-Holiday-Schedule-2025.jpg',
    pdf: 'https://schoolcalendar.net/public/assets/images/calendar-images/Mississippi-School-Holiday-Schedule-2025.pdf',
  },
];

export default function StateCalendarPage({ state, data }) {
  const router = useRouter();
  const handleSchoolClick = (schoolName) => {
    const slug = schoolName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/${state}/${slug}`);
  };

  return (
    <>
      <Head>
        <title>{state} Holidays Calendar 2025-2026</title>
        <meta name="description" content={`Download ${state} Holidays & Calendar PDFs 2025-2026 – State-wise schedules and important dates for schools across the United States.`} />
        <meta name="keywords" content={`${state} Calendar 2025, school holidays 2025, school calendar state wise, school schedule USA`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <main className="w-full font-sans bg-white text-gray-800">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden animate-fade-in">
      
        <img
          src="/images/stateSchool.jpg"
          alt="US School Calendar Background"
           style={{ objectFit: 'cover' }}
          className="absolute inset-0  w-full h-full lg:h-auto  object-cover opacity-100"
          loading="lazy"
        />
  
        <div className="absolute inset-0 bg-transparent z-10" />
        <div className="relative z-20 text-white px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide animate-slide-in">
            {state.toUpperCase()} Calendar 2025-2026
          </h2>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 w-full flex flex-col lg:flex-row">
        {/* Table of Contents */}
        <aside className="lg:w-1/4 hidden  pr-8 text-sm text-gray-700 sticky top-24 self-start animate-fade-in">
          <div className="border-l-4 border-blue-800 pl-4">
            <h3 className="text-lg font-semibold mb-4">Contents</h3>
            <ul className="space-y-2">
              <li><a href="#intro" className="hover:underline">Introduction</a></li>
              <li><a href="#start-date" className="hover:underline">School Start Date</a></li>
              <li><a href="#school-list" className="hover:underline">Select Your School</a></li>
              <li><a href="#calendar-images" className="hover:underline">Download Calendar</a></li>
              <li><a href="#disclaimer" className="hover:underline">Disclaimer</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full">
          <section id="intro" className="mb-12 animate-fade-in-up">
            <h1 className="text-3xl font-extrabold mb-4">{state.toUpperCase()} School Calendar 2025-26 | When Does School Start</h1>
            <ShareButtons />
            <div className="space-y-4 mt-6">
              <p>
                Looking forward to enjoying the <strong>{state.toUpperCase()} School Calendar?</strong> You can find school holiday
                calendars here and plan accordingly.
              </p>
              <p>
                {state.toUpperCase()} state government has announced the academic year for 2025. This includes holidays throughout the
                year. Use this information to plan accordingly.
              </p>
            </div>
          </section>

          <section id="start-date" className="mb-12 bg-gray-50 p-6 rounded shadow-sm animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-2">When does school start in {state}?</h2>
            <p>
              Schools generally start from <span className="text-red-600 font-bold">(01 August 2025)</span>. Scroll down for the full calendar.
            </p>
          </section>

          <section id="school-list" className="mb-12 animate-fade-in-up">
            <h2 className="bg-blue-800 text-white text-xl py-3 px-4 uppercase rounded-t">Select your School</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 border border-blue-800 rounded-b">
              {data.schools.map((school) => (
                <div
                  key={school.name}
                  onClick={() => handleSchoolClick(school.name)}
                  className="border p-4 text-center text-black cursor-pointer rounded shadow hover:shadow-lg transition-transform hover:scale-105"
                >
                  {school.name}
                </div>
              ))}
            </div>
          </section>

          <section id="calendar-images" className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            {imageData.map(({ img, pdf }, i) => (
              <div key={i} className="text-center border p-4 rounded shadow hover:shadow-md transition">
                <a href={img} target="_blank" rel="noopener noreferrer">
                  <img src={img} alt={`${state} Calendar ${i + 1}`} className="w-full h-auto mb-4" />
                </a>
                <a href={pdf} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Download PDF
                </a>
              </div>
            ))}
          </section>

          <section id="disclaimer" className="mt-12 bg-gray-100 p-4 text-sm rounded animate-fade-in-up">
            <p className="text-gray-700">
              <strong>Disclaimer:</strong> {state} School Holidays are subject to change by the State Government. Please verify via the official website.
            </p>
          </section>
        </div>
      </div>
    </main>
    </>
  );
}
