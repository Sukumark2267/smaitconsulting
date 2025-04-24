import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">OUR STORY</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <p className="mb-4">
              Founded in 2018, Dreamland Athletics began as a small training facility with a big vision - to create a space where athletes of all levels could come together to push their limits and achieve extraordinary results.
            </p>
            <p className="mb-4">
              What started as a passion project has grown into Brampton&rsquo;s most dynamic fitness community, with over 1,000 members and counting.
            </p>
            <p>
              We believe fitness is more than physical - it&rsquo;s mental resilience, community support, and personal growth.
            </p>
          </div>
          
          <div className="md:w-1/2 relative aspect-video">
            <Image 
              src="/gym-interior.jpg" 
              alt="Dreamland Athletics Gym"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}