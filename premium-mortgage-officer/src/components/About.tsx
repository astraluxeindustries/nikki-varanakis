import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Nikki Varanakis" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Nikki Varanakis
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Nikki Varanakis-D’Ambrosio grew up surrounded by the mortgage industry, watching both of her parents build their careers in the field. While that early exposure sparked her interest, she first chose to explore other professional paths to ensure the industry was truly the right fit for her. After living in Los Angeles and working as a successful recruiter for Disney’s IT teams, Nikki eventually returned to Utah and made the transition into mortgage lending. The move quickly proved to be the right one, and she found a natural passion for helping people navigate the home financing process.
              </p>
              <p>
                Nikki began her career in the mortgage industry working on the operations side, where she gained a deep understanding of the behind the scenes mechanics that keep loans moving efficiently. This experience allows her to guide clients through the process with clarity and confidence. She is passionate about helping people achieve their homeownership goals while balancing both the practical financial needs and the personal wants that come with purchasing a home. Having purchased her own property not long ago, Nikki also understands firsthand how exciting and sometimes overwhelming the process can feel.
              </p>
              <p>
                A strong believer in education and transparency, Nikki encourages her clients to ask questions and stay engaged throughout every step of the loan process. She works hard to make sure each client feels informed, comfortable, and confident in their decisions. Nikki is known for being highly responsive and accessible, keeping communication open and making it a priority to provide timely answers so her clients never feel left waiting or uncertain.
              </p>
              <p>
                Outside of her work in mortgage lending, Nikki enjoys spending time with her family. She has been married to her husband Mario for nine years, and together they are raising their daughter Keturah. In her free time she enjoys traveling, staying active, biking, and spending time outdoors in the mountains. Nikki values building lasting relationships with the people she works with and looks forward to helping clients achieve their homeownership goals.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in WA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
