import Link from "next/link"
import { Menu, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#c8c6f5] p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="mr-4">
            <Menu className="h-6 w-6" />
          </button>
          <div className="bg-[#d9d9d9] px-4 py-2 text-center">logo</div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium">login</button>
          <button className="flex items-center bg-white px-4 py-1 rounded text-sm font-medium">
            get started <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">CONTENT CREATION MADE SIMPLE</h1>
          <p className="max-w-xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#c8c6f5] px-6 py-2 rounded">I&apos;m a creator</button>
            <button className="bg-[#c8c6f5] px-6 py-2 rounded">I need a creator</button>
          </div>
        </section>

        {/* Section 2 */}
        <section className="border-t border-gray-200 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="bg-[#d9d9d9] w-full h-[80vh]"></div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-t border-gray-200 h-screen flex flex-col justify-center px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">WHY CHOOSE US</h2>
            <p className="max-w-xl mx-auto mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex flex-col">
                  <div className="bg-[#d9d9d9] aspect-square mb-4"></div>
                  <p className="text-sm font-medium">Testimonial #{num}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-gray-200 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">FAQs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-[#d9d9d9] h-16"></div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#c8c6f5] py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#d9d9d9] h-32 flex items-center justify-center">logo</div>
          <div className="flex flex-col justify-center space-y-2">
            <Link href="#" className="hover:underline">
              Home
            </Link>
            <Link href="#" className="hover:underline">
              About
            </Link>
            <Link href="#" className="hover:underline">
              Portal
            </Link>
            <Link href="#" className="hover:underline">
              FAQs
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
