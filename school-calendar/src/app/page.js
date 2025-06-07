import Head from 'next/head'
import Calendar from '@/components/Calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import ShareButtons from '@/components/ShareButtons'

export default function Home() {
  const states = [
    { name: 'Alabama', slug: 'alabama' },
    { name: 'Alaska', slug: 'alaska' },
    { name: 'South Carolina', slug: 'south-carolina' },
    { name: 'Virginia', slug: 'virginia' },
    { name: 'Washington', slug: 'washington' },
    { name: 'West Virginia', slug: 'west-virginia' },
    { name: 'Wisconsin', slug: 'wisconsin' },
    { name: 'Wyoming', slug: 'wyoming' },
  ]

  const calendarImages = [
    {
      imgSrc: 'https://schoolcalendar.net//public/assets/images/calendar-images/US-School-Calendar-2025.jpg',
      pdfSrc: 'https://schoolcalendar.net//public/assets/images/calendar-images/US-School-Calendar-2025.pdf',
      alt: 'US School Calendar 2025',
      title: 'US School Calendar 2025',
    },
    {
      imgSrc: 'https://schoolcalendar.net//public/assets/images/calendar-images/US-School-Holidays-2025.jpg',
      pdfSrc: 'https://schoolcalendar.net//public/assets/images/calendar-images/US-School-Holidays-2025.pdf',
      alt: 'US School Holidays Calendar 2025',
      title: 'US School Holidays Calendar 2025',
    },
    {
      imgSrc: 'https://schoolcalendar.net//public/assets/images/calendar-images/US-School-Holiday-Calendar-2025.jpg',
      pdfSrc: 'https://schoolcalendar.net//public/assets/images/calendar-images/US-School-Holiday-Calendar-2025.pdf',
      alt: 'US School Holiday Calendar 2025',
      title: 'US School Holiday Calendar 2025',
    },
    {
      imgSrc: 'https://schoolcalendar.net//public/assets/images/calendar-images/US-School-Schedule-2025.jpg',
      pdfSrc: 'https://schoolcalendar.net//public/assets/images/calendar-images/US-School-Schedule-2025.pdf',
      alt: 'US School Schedule 2025',
      title: 'US School Schedule 2025',
    },
  ]

  return (
    <>
      <Head>
        <title>US School Holidays Calendar 2025-2026</title>
        <meta name="description" content="Download US School Holidays & Calendar PDFs 2025-2026 – State-wise schedules and important dates for schools across the United States." />
        <meta name="keywords" content="US School Calendar 2025, school holidays 2025, school calendar state wise, school schedule USA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="font-sans text-gray-800 bg-gray-50">
        {/* ======= HERO ======= */}
        <section className="relative h-[400px]  flex items-center justify-center overflow-hidden">
          <img
            src="/images/school.jpg"
            alt="US School Calendar Background"
            className="absolute inset-0 w-full h-full object-cover opacity-100  "
            loading="lazy"
          />
          <div className="absolute inset-0 bg-transparent bg-opacity-50 z-10" />
          <div className="relative z-20 text-white px-4 text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">US School Holidays Calendar 2025-2026</h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-10 flex gap-8">
          {/* ======= SIDEBAR ======= */}
          <aside className="hidden w-1/4 sticky top-24 h-fit bg-white border p-6 shadow-lg rounded-xl font-medium text-sm text-blue-800 animate-slide-in-left">
            <h3 className="text-xl font-bold mb-4">📘 Table of Contents</h3>
            <ul className="space-y-3 list-disc list-inside">
              <li><a href="#intro" className="hover:underline">Introduction</a></li>
              <li><a href="#statewise" className="hover:underline">State-wise Calendar</a></li>
              <li><a href="#images" className="hover:underline">Calendar Images</a></li>
              <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
            </ul>
          </aside>

          {/* ======= MAIN CONTENT ======= */}
          <main className="w-full space-y-12">
            {/* ======= INTRO ======= */}
            <section id="intro" className="bg-white rounded-lg p-6 shadow-md animate-fade-in-up">
              <h2 className="text-3xl font-semibold mb-4 text-blue-900">US School Calendar 2025-2026</h2>
              <ShareButtons />
              <p className="leading-7 text-gray-700">
                The schools are getting opened again in the USA in accordance with the <strong>US school calendar</strong>. It’s time to plan your academic year effectively.
                <br /><br />
                After the disruptions caused by COVID-19, schools are back on track. Knowing your school’s calendar helps in planning vacations, exams, and study schedules.
                <br /><br />
                Here’s everything you need to keep your academic year well organized.
              </p>
            </section>

            {/* ======= STATEWISE ======= */}
            <section id="statewise" className="bg-blue-50 rounded-lg p-6 shadow-md animate-fade-in-up">
              <h2 className="text-3xl font-semibold text-blue-900 mb-4">US School Holidays Calendar [State Wise]</h2>
              <div className="bg-blue-500 text-white p-3 text-center text-xl font-semibold rounded mb-6">
                📍 Choose Your State
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {states.map(({ name, slug }) => (
                  <Calendar key={slug} name={name} slug={slug} />
                ))}
              </div>
            </section>

            {/* ======= IMAGES SECTION ======= */}
            <section id="images" className="bg-white rounded-lg p-6 shadow-md animate-fade-in-up">
              <h2 className="text-3xl font-semibold text-blue-900 mb-4">US School Calendar With Holidays</h2>
              <p className="mb-6 text-gray-700">
                Holidays are an integral part of the school calendar. Below are visual calendars you can preview and download in PDF format:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {calendarImages.map(({ imgSrc, pdfSrc, alt, title }) => (
                  <div key={title} className="text-center transition-transform duration-300 hover:scale-105">
                    <a href={imgSrc} target="_blank" rel="noopener noreferrer">
                      <img src={imgSrc} alt={alt} className="w-full h-auto border rounded-lg shadow-md" />
                    </a>
                    <a
                      href={pdfSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-blue-600 hover:text-blue-800"
                    >
                      <FontAwesomeIcon icon={faDownload} className="mr-1" /> Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* ======= CONCLUSION ======= */}
            <section id="conclusion" className="bg-gray-100 rounded-lg p-6 shadow-md animate-fade-in-up">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3">Conclusion</h2>
              <p className="text-gray-700 leading-7">
                This calendar is relevant for scholars and parents to help plan the academic year effectively.
                Don’t forget to bookmark or download the PDFs for your respective state’s schedule to stay informed.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
