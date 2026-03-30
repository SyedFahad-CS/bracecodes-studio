import React from 'react';
import { TEAM_MEMBERS } from '../../constants';
import ScrollReveal from '../../components/animations/ScrollReveal';
import RevealText from '../../components/animations/RevealText';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 relative border-t border-slate-200">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <ScrollReveal>
            <span className="text-indigo-600 font-semibold tracking-wider uppercase mb-4 block">Our Team</span>
          </ScrollReveal>
          <RevealText
            as="h2"
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            stagger={0.04}
          >
            The minds behind the machines.
          </RevealText>
          <ScrollReveal delay={200}>
            <p className="text-xl text-slate-500 leading-relaxed">
              We are a collective of architects, designers, and strategists obsessed with code quality and pixel perfection.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member: any, index: number) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative">
                <div className="relative overflow-hidden rounded-4xl mb-6 aspect-3/4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.15)] transition-all duration-500">
                  {/* Image */}
                  <img
                    src={`${member.image}?w=400&q=85`}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Social Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center gap-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">{member.name}</h3>
                  <p className="text-indigo-500 font-medium text-xs tracking-widest uppercase mt-1 mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;