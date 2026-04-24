import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin, Globe,
  Award, Calendar, Play, BookOpen, Users, Building2,
  GraduationCap, Heart, Brain, Zap, Microscope, Smile,
  ChevronRight, Plus, Minus, Trophy, Quote, Star,
  Facebook, Instagram, Twitter, Linkedin
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [institution, setInstitution] = useState<'school' | 'college'>('school');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const schoolNav = [
    { name: 'Home', href: '#' },
    {
      name: 'About Us',
      items: ['About BKG', 'Our Vision', 'Core Values', 'Chairman Desk', 'Leadership Team']
    },
    {
      name: 'Academics',
      items: ['Curriculum', 'Early Years of Learning — Pre-Primary', 'Key Stage 1 — Grades 1 to 5 (Primary)', 'Key Stage 2 — Grades 6 to 10 (Middle & High School)', 'KKARE']
    },
    { name: 'Boarding', href: '#' },
    {
      name: 'Admissions',
      items: ['Online Application', 'Front Office', 'Fees Structure']
    },
    { name: 'Our Achievements', href: '#' },
    { name: 'Contact US', href: '#' },
  ];

  const collegeNav = [
    { name: 'Home', href: '#' },
    {
      name: 'About Us',
      items: ['About BKG', 'Our Vision', 'Core Values', 'Chairman Desk', 'Leadership Team']
    },
    {
      name: 'Academics',
      mega: true,
      sections: [
        { title: 'Academic Programs', items: ['KCET', 'KVPY', 'COMED-K'] },
        { title: 'Engineering Entrance Exams', items: ['JEE', 'JEE Advanced', 'BITSAT', 'NATA'] },
        { title: 'Medical Entrance Exams', items: ['NEET', 'NEET Long Term', 'AFMC'] },
        { title: 'Commerce', items: ['CA Foundation', 'Commerce Olympiads'] }
      ]
    },
    { name: 'Boarding', href: '#' },
    {
      name: 'Admissions',
      items: ['Online Application', 'Front Office', 'Fees Structure']
    },
    { name: 'Our Achievements', href: '#' },
    { name: 'Contact US', href: '#' },
  ];

  const currentNav = institution === 'school' ? schoolNav : collegeNav;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-black/5">
      {/* Institution Switcher */}
      <div className="bg-black py-2.5 px-4 md:px-8 flex justify-center md:justify-end gap-4 md:gap-6 rounded-t-2xl">
        <button
          onClick={() => setInstitution('school')}
          className={`text-[9px] font-display font-semibold uppercase tracking-widest italic transition-all ${institution === 'school'
            ? 'bg-gradient-to-r from-[#ff0000] to-[#fdcf58] gradient-text-fix'
            : 'text-white hover:text-white/80'
            }`}
        >
          BKG Global School
        </button>
        <div className="w-px h-3 bg-white/20 self-center" />
        <button
          onClick={() => setInstitution('college')}
          className={`text-[9px] font-display font-semibold uppercase tracking-widest italic transition-all ${institution === 'college'
            ? 'bg-gradient-to-r from-[#ff0000] to-[#fdcf58] gradient-text-fix'
            : 'text-white hover:text-white/80'
            }`}
        >
          BKG PU College
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <div className="h-16 py-2">
              <img
                src="https://bkgglobalschool.com/wp-content/uploads/2022/12/Global-School-1.png"
                alt="BKG Logo"
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              {currentNav.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href || '#'}
                    className="text-text-main hover:text-primary text-[12px] font-bold transition-colors flex items-center gap-1 italic py-8"
                  >
                    {item.name}
                    {(item.items || item.mega) && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                  </a>

                  {/* Standard Dropdown */}
                  {item.items && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-black/5 rounded-2xl overflow-hidden py-4"
                    >
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-6 py-3 text-[11px] font-bold text-text-main hover:bg-bg-main hover:text-primary italic transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </motion.div>
                  )}

                  {/* Mega Menu for College Academics */}
                  {item.mega && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full -right-48 w-[800px] bg-white shadow-2xl border border-black/5 rounded-2xl overflow-hidden p-10 grid grid-cols-2 gap-10"
                    >
                      {item.sections?.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-[10px] font-display font-semibold text-accent uppercase tracking-widest mb-4 italic">{section.title}</h4>
                          <div className="space-y-2">
                            {section.items.map((subItem) => (
                              <a
                                key={subItem}
                                href="#"
                                className="block text-[13px] font-bold text-text-main hover:text-primary italic transition-colors"
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="h-6 w-px bg-black/10 mx-2" />
              <div className="flex items-center gap-2 text-primary font-black text-sm italic">
                <Phone size={16} />
                <span>+91 63666 44472</span>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-black/5 overflow-hidden max-h-[80vh] overflow-y-auto rounded-b-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {currentNav.map((item) => (
                <div key={item.name} className="border-b border-black/5 last:border-0">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="w-full flex justify-between items-center py-4 text-base font-bold text-text-main italic"
                  >
                    {item.name}
                    {(item.items || item.mega) && <ChevronDown size={18} className={activeDropdown === item.name ? 'rotate-180' : ''} />}
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-bg-main rounded-xl mb-4"
                      >
                        {item.items?.map((subItem) => (
                          <a key={subItem} href="#" className="block px-6 py-3 text-sm font-bold text-text-muted italic">{subItem}</a>
                        ))}
                        {item.sections?.map((section) => (
                          <div key={section.title} className="px-6 py-4">
                            <h4 className="text-[10px] font-display font-semibold text-accent uppercase tracking-widest mb-2 italic">{section.title}</h4>
                            {section.items.map((subItem) => (
                              <a key={subItem} href="#" className="block py-2 text-sm font-bold text-text-muted italic">{subItem}</a>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const marqueeText = "WHERE GLOBAL EDUCATION SHAPES FUTURE LEADERS • ADMISSION OPEN 2026-27 • CLICK HERE FOR REGISTRATION • WORLD-CLASS LEARNING • ";

  return (
    <section className="relative h-[85vh] min-h-[500px] lg:h-[105vh] lg:min-h-[750px] flex items-center overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-70"
          src="https://www.youtube.com/embed/GByDjPu5QEw?autoplay=1&mute=1&controls=0&loop=1&playlist=GByDjPu5QEw&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          title="BKG Global School Hero Video"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-semibold text-white leading-[1] tracking-tighter mb-4">
              Where Global Education <br />
              <span className="italic font-medium bg-gradient-to-r from-[#ff0000] to-[#fdcf58] gradient-text-fix">Shapes Future Leaders</span>
            </h1>
            <p className="text-base text-white/90 leading-relaxed max-w-md italic font-light mb-6">
              Empowering young minds with world-class learning, innovation, and values to thrive in a global future.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-black text-[11px] flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl italic tracking-widest">
                REGISTER NOW
              </button>
              <button className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-full font-black text-[11px] flex items-center justify-center gap-3 hover:bg-white hover:text-black hover:border-white transition-all italic tracking-widest">
                ADMISSION OPEN 2026–27
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-r from-[#ff0000] to-[#fdcf58] py-6 md:py-8 overflow-hidden pointer-events-none border-t border-white/10">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="text-[40px] md:text-[80px] font-black text-white uppercase leading-none px-6 md:px-12 select-none italic tracking-tighter">
            {marqueeText}
          </span>
          <span className="text-[40px] md:text-[80px] font-black text-white uppercase leading-none px-6 md:px-12 select-none italic tracking-tighter">
            {marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { label: 'Campus Area', value: '17 Acres' },
    { label: 'Sq Ft Construction', value: '3 Lakhs' },
    { label: 'Athletics Track', value: '400M' },
    { label: 'CBSE Curriculum', value: '100%' },
  ];

  return (
    <section className="pt-12 pb-6 bg-bg-main border-b border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-12 w-full lg:w-auto">
            <div className="flex flex-col gap-1 items-center text-center flex-1 lg:flex-none">
              <span className="text-2xl sm:text-3xl font-black text-primary italic tracking-tighter">{stats[0].value}</span>
              <p className="text-[9px] sm:text-[10px] text-text-muted font-bold uppercase tracking-widest leading-tight italic max-w-[140px] sm:max-w-[180px]">
                {stats[0].label}
              </p>
            </div>
            <div className="w-px h-12 sm:h-16 bg-black/10"></div>
            <div className="flex flex-col gap-1 items-center text-center flex-1 lg:flex-none">
              <span className="text-2xl sm:text-3xl font-black text-primary italic tracking-tighter">{stats[1].value}</span>
              <p className="text-[9px] sm:text-[10px] text-text-muted font-bold uppercase tracking-widest leading-tight italic max-w-[140px] sm:max-w-[180px]">
                {stats[1].label}
              </p>
            </div>
          </div>

          <div className="w-px h-16 bg-black/10 hidden lg:block"></div>

          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-12 w-full lg:w-auto">
            <div className="flex flex-col gap-1 items-center text-center flex-1 lg:flex-none">
              <span className="text-2xl sm:text-3xl font-black text-primary italic tracking-tighter">{stats[2].value}</span>
              <p className="text-[9px] sm:text-[10px] text-text-muted font-bold uppercase tracking-widest leading-tight italic max-w-[140px] sm:max-w-[180px]">
                {stats[2].label}
              </p>
            </div>
            <div className="w-px h-12 sm:h-16 bg-black/10"></div>
            <div className="flex flex-col gap-1 items-center text-center flex-1 lg:flex-none">
              <span className="text-2xl sm:text-3xl font-black text-primary italic tracking-tighter">{stats[3].value}</span>
              <p className="text-[9px] sm:text-[10px] text-text-muted font-bold uppercase tracking-widest leading-tight italic max-w-[140px] sm:max-w-[180px]">
                {stats[3].label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WelcomeSection = () => {
  return (
    <section className="pt-8 pb-16 md:pb-20 bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative group">
              <img
                src="https://i.postimg.cc/TwJG7KfQ/BG.jpg"
                alt="BKG Global School Academy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full text-primary font-black text-[9px] uppercase tracking-widest mb-6 italic">
              WELCOME TO BKG GLOBAL SCHOOL
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-primary leading-[1.1] tracking-tighter mb-8">
              Residential & Day School <br />
              <span className="bg-gradient-to-r from-[#ff0000] to-[#fdcf58] gradient-text-fix italic">Learning for Life</span>
            </h2>
            <div className="space-y-6 text-sm text-text-muted leading-relaxed italic mb-10 font-light opacity-80">
              <p>
                BKG Global School is a day-cum-residential school for boys and girls. It aims at providing a stimulating learning environment with truly international standards within the formal CBSE curriculum.
              </p>
              <p>
                We nurture our students to become global citizens with tolerance, respect, and appreciation for different cultures and religions and to become self-motivated, independent, confident, decision-making leaders of tomorrow.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5">
                <div className="w-10 h-10 bg-gradient-to-r from-[#ff0000] to-[#fdcf58] rounded-xl flex items-center justify-center text-white mb-4">
                  <BookOpen size={20} />
                </div>
                <h4 className="font-black text-primary mb-2 italic">CBSE Standards</h4>
                <p className="text-xs text-text-muted italic opacity-70">Truly international standards of learning.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5">
                <div className="w-10 h-10 bg-gradient-to-r from-[#ff0000] to-[#fdcf58] rounded-xl flex items-center justify-center text-white mb-4">
                  <Users size={20} />
                </div>
                <h4 className="font-black text-primary mb-2 italic">Global Citizens</h4>
                <p className="text-xs text-text-muted italic opacity-70">Nurturing future decision-making leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SmileSection = () => {
  const [activeLetter, setActiveLetter] = useState(0);

  const smileData = [
    {
      letter: 'S',
      title: 'Spiritual Resilience',
      subtitle: 'Nurturing the Soul',
      items: [
        'Aksharabhyasha & Vidyarambham',
        'Ambience for Agnihotram',
        'Saraswathi Vandana',
        'Chanting of Bhagwat Geetha, Slokas & Veda Mantras',
        'Yoga',
        'Meditation with Instrumental Music'
      ]
    },
    {
      letter: 'M',
      title: 'Mental Intelligence',
      subtitle: 'Cognitive Excellence',
      items: [
        'Life Skills Studio',
        'Activity Lab',
        'Montessori Lab',
        'Astronomy Centre',
        'Science Park',
        'Yoga'
      ]
    },
    {
      letter: 'I',
      title: 'Infrastructure & Facilities',
      subtitle: 'World-Class Campus',
      items: [
        'Spread over 17 acres of land with a construction area of 300,000 square feet, situated in a serene residential area.',
        '400-meter track playground with facilities for Cricket, Football, Throwball, Volleyball, Basketball, Hockey, Kabaddi & Kho Kho, etc.',
        'Facilities for various indoor games i.e. Table Tennis, Carrom, Chess & Badminton.',
        'Well-ventilated, resourceful classrooms with multimedia facilities',
        'Library with digital facilities',
        'Play area with sand pit',
        'Indoor games',
        'Amphitheatre',
        'Highly sophisticated auditorium',
        'Swimming pool with baby pool',
        'Trekking',
        'NSS',
        'NCC'
      ]
    },
    {
      letter: 'L',
      title: 'Laboratory-Based Teaching',
      subtitle: 'Hands-on Learning',
      items: [
        'Physics Lab',
        'Chemistry Lab',
        'Biology Lab',
        'Social Science Lab',
        'Computer Lab',
        'Language Lab',
        'Research Centre',
        'Maths Lab'
      ]
    },
    {
      letter: 'E',
      title: 'Emotional Resilience',
      subtitle: 'Connecting with Nature',
      items: [
        'Zoological Garden',
        'Nature Park',
        'Heritage Centre',
        'Kala Kutira',
        'Toys Museum',
        'Puppetry Theatre',
        'Field Trip',
        'Excursion',
        'Digital Martyrs Gallery'
      ]
    }
  ];

  return (
    <section className="pt-12 pb-10 md:pt-20 md:pb-12 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full text-primary font-display font-semibold text-[9px] uppercase tracking-widest mb-6 italic">
            THE BKG PHILOSOPHY
          </div>
          <h3 className="text-2xl md:text-5xl font-display font-semibold text-primary italic tracking-tighter">
            Our <span className="bg-gradient-to-r from-[#ff0000] to-[#fdcf58] gradient-text-fix">SMILE</span> approach to education
          </h3>
        </div>

        {/* 3D Interactive Letters */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-16">
          {smileData.map((item, idx) => (
            <motion.div
              key={item.letter}
              onMouseEnter={() => setActiveLetter(idx)}
              className={`relative cursor-pointer group perspective-1000`}
              whileHover={{ scale: 1.1, rotateY: 15 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl text-2xl sm:text-3xl md:text-5xl font-display font-bold transition-all duration-500 shadow-2xl relative preserve-3d
                ${activeLetter === idx
                    ? 'bg-gradient-to-r from-[#ff0000] to-[#fdcf58] text-white'
                    : 'bg-bg-main text-primary/40'}`}
              >
                {/* 3D Sides for the letter block */}
                <div className={`absolute inset-0 rounded-2xl bg-black/5 -translate-z-4 blur-sm group-hover:blur-md transition-all`}></div>
                <span className="relative z-20 drop-shadow-md">{item.letter}</span>
              </div>

              {activeLetter === idx && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#ff0000] to-[#fdcf58]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Interactive Content Card */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLetter}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-bg-main/50 backdrop-blur-xl border border-black/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
            >
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/10 transition-colors"></div>

              <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
                <div className="space-y-4 md:w-2/5">
                  <div className="text-[10px] font-display font-semibold text-accent uppercase tracking-[0.2em] italic">
                    {smileData[activeLetter].subtitle}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-display font-semibold text-primary italic leading-tight">
                    {smileData[activeLetter].title}
                  </h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#ff0000] to-[#fdcf58]"></div>
                </div>

                <div className="md:w-3/5">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {smileData[activeLetter].items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`flex items-start gap-3 text-text-muted text-[13px] italic leading-relaxed font-light ${smileData[activeLetter].items.length === 1 ? 'sm:col-span-2' : ''}`}
                      >
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/20 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is BKG Global School and where is it located?",
      a: "BKG Global School is a premier co-educational CBSE day-cum-residential school located in Sandur, Ballari district, Karnataka. It is part of the BKG Group of Institutions and offers education from Pre-Primary (Nursery) through Class X."
    },
    {
      q: "Is BKG Global School affiliated with CBSE?",
      a: "Yes, BKG Global School is affiliated with the Central Board of Secondary Education (CBSE), New Delhi. The school follows the CBSE curriculum framework from pre-primary through Class X."
    },
    {
      q: "Does the school have residential/boarding facilities?",
      a: "Yes. We have separate, secure residential facilities for boys and girls from Grade V to Grade X. Our boarding program is supervised round the clock by dedicated dorm parents, house masters, and trained staff."
    },
    {
      q: "What safety and security measures are in place?",
      a: "Student safety is our highest priority. Our campus is equipped with 24/7 CCTV surveillance, RFID student tracking, school ambulance on standby, GPS on buses, and regular emergency drills."
    },
    {
      q: "What is the food policy for residential students?",
      a: "All students are served well-balanced, nutritious vegetarian meals planned by expert dieticians. We use organic, home-grown fruits, vegetables, and dairy products sourced from our own farms."
    },
    {
      q: "What is the admission procedure?",
      a: "Admissions are processed fully online. Parents are required to download and fill the application form, submit it online with the application fee, and keep a copy for reference."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square">
            <img
              src="https://i.postimg.cc/158qVS9W/asdfasdfasdfasdfasdf.webp"
              alt="BKG Campus FAQ Section"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full text-primary font-black text-[9px] uppercase tracking-widest mb-6 italic">
                FAQ & ANSWER
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-primary leading-tight tracking-tighter italic">
                Answers to your questions, every step of the way.
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-black/5 pb-4">
                  <button
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <span className="font-display font-semibold text-primary text-sm italic group-hover:bg-gradient-to-r group-hover:from-[#ff0000] group-hover:to-[#fdcf58] group-hover:bg-clip-text group-hover:text-transparent transition-all">{faq.q}</span>
                    {activeIndex === idx ? <Minus size={20} className="text-[#ff0000]" /> : <Plus size={20} className="text-[#ff0000]" />}
                  </button>
                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-text-muted leading-relaxed text-[13px] italic opacity-80 pb-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementsSection = () => {
  const awards = [
    { title: 'Best Infrastructure School', year: '2024', provider: 'Education World' },
    { title: 'Excellence in CBSE Curriculum', year: '2023', provider: 'National School Awards' },
    { title: 'Top Residential School in Karnataka', year: '2023', provider: 'Times Education' },
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-r from-[#ff0000] to-[#fdcf58]">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white font-display font-semibold tracking-[0.2em] uppercase text-[9px] mb-4 italic drop-shadow-sm">Excellence</h2>
          <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter italic drop-shadow-md">OUR ACHIEVEMENTS AND AWARDS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl text-center group hover:bg-white/20 transition-all shadow-xl">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                <Trophy className="text-[#ff0000]" size={28} />
              </div>
              <h4 className="text-lg font-display font-bold mb-3 text-white italic leading-tight">{award.title}</h4>
              <p className="text-white/80 text-[11px] leading-relaxed mb-6 font-medium italic">{award.provider}</p>
              <div className="inline-block px-6 py-2 bg-black/20 rounded-full text-white font-display font-bold text-[10px] italic tracking-widest">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventsSection = () => {
  const news = [
    { date: 'JUN 18, 2026', title: 'Application of Psychological Principles to Workplace.' },
    { date: 'JUN 18, 2026', title: 'Harnessing Psychology for Enhanced Workplace' },
    { date: 'JUN 18, 2026', title: 'The Role of Behavioral Psychology in Shaping World' },
    { date: 'JUN 18, 2026', title: 'Psychological Strategies for Improving Performance' },
  ];

  return (
    <section className="py-12 md:py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full text-primary font-display font-semibold text-[9px] uppercase tracking-widest mb-6 italic">
              BLOG & INSIGHTS
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary italic tracking-tighter">
              News about our BKG <br className="hidden md:block" /> Global School
            </h3>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-full font-display font-semibold text-[9px] flex text-nowrap items-center gap-2 hover:scale-105 transition-all italic uppercase tracking-widest">
            MORE BLOGS <ChevronRight size={14} />
          </button>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
          {news.map((item, idx) => (
            <div key={idx} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 md:p-8 gap-4 sm:gap-0 hover:bg-bg-main transition-colors cursor-pointer group ${idx !== news.length - 1 ? 'border-b border-black/5' : ''}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-12">
                <span className="text-[9px] font-display font-semibold text-text-muted uppercase tracking-widest italic">{item.date}</span>
                <h4 className="text-base md:text-lg font-display font-semibold text-primary italic group-hover:bg-gradient-to-r group-hover:from-[#ff0000] group-hover:to-[#fdcf58] group-hover:bg-clip-text group-hover:text-transparent transition-all pr-4 sm:pr-0">{item.title}</h4>
              </div>
              <div className="w-10 h-10 rounded-full border border-black/10 flex flex-shrink-0 items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all self-end sm:self-auto">
                <Plus size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section className="py-12 md:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="https://picsum.photos/seed/campus/1920/1080" alt="Campus" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-zinc-950"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-12 italic tracking-tight">Explore BKG Global School: <span className="bg-gradient-to-r from-[#ff0000] to-[#fdcf58] gradient-text-fix">A New Dimension of Learning</span></h3>
        <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white/10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/GByDjPu5QEw?autoplay=1&mute=1&controls=1&loop=1&playlist=GByDjPu5QEw&modestbranding=1&rel=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="BKG Global School Academy Video"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const galleryImages = [
    { src: 'https://i.postimg.cc/RhmYXyGY/MAHATHVA.jpg', rotate: -6 },
    { src: 'https://i.postimg.cc/hPpY1CmM/DSC-4105.jpg', rotate: 4 },
    { src: 'https://i.postimg.cc/CLLP5j2R/DSC-4071.jpg', rotate: -3 },
    { src: 'https://i.postimg.cc/HW3zqrkN/DSC04367.jpg', rotate: 7 },
    { src: 'https://i.postimg.cc/j5xNchP7/SPP-3143.jpg', rotate: -5 },
    { src: 'https://i.postimg.cc/TwNy9vTV/DSC-6514.jpg', rotate: 3 },
    { src: 'https://i.postimg.cc/MGWvJpHx/SCHOOL-2.jpg', rotate: -4 },
    { src: 'https://i.postimg.cc/y6wh40zf/DSC-6570.jpg', rotate: 5 },
  ];

  return (
    <footer className="bg-white relative">
      {/* Polaroid Gallery */}
      <div className="hidden sm:flex justify-center -space-x-8 md:-space-x-12 lg:-space-x-16 px-4 pt-24 pb-12 relative z-10">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ rotate: img.rotate }}
            whileHover={{
              rotate: 0,
              y: -80,
              scale: 1.1,
              zIndex: 50,
              transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
            whileTap={{
              rotate: 0,
              y: -80,
              scale: 1.1,
              zIndex: 50,
              transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
            className={`relative flex-shrink-0 w-[32vw] sm:w-32 md:w-44 lg:w-56 aspect-[3/4] bg-white p-2 sm:p-2 md:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/5 cursor-pointer ${idx >= 4 ? 'hidden sm:block' : ''}`}
          >
            <img
              src={img.src}
              alt={`Campus Life ${idx}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-b from-black to-zinc-950 pt-16 sm:pt-32 pb-12 relative z-20 mt-0 sm:-mt-24 md:-mt-32 lg:-mt-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section: Quote & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24 relative">
            {/* Lightbulb Background Illustration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-lg font-display font-semibold text-white mb-6 italic">Contact Info</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 text-white/70 text-[13px] italic">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#ff0000] to-[#fdcf58] flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <span>Ballari Road, Krishnanagar, Ballari Dist. Sandur, Karnataka – 583119</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/70 text-[13px] italic">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#ff0000] to-[#fdcf58] flex items-center justify-center flex-shrink-0">
                        <Phone size={16} className="text-white" />
                      </div>
                      <span>+91 63666 44472, +91 63666 88872</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/70 text-[13px] italic">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#ff0000] to-[#fdcf58] flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-white" />
                      </div>
                      <span>info@bkgpucollege.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/70 text-[13px] italic">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#ff0000] to-[#fdcf58] flex items-center justify-center flex-shrink-0">
                        <Globe size={16} className="text-white" />
                      </div>
                      <span>bkgpucollege.com</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                  <h4 className="text-base font-display font-semibold text-white mb-4 italic">BKG Way of Education</h4>
                  <p className="text-white/60 text-[13px] italic leading-relaxed">
                    We believe that school life should not only be valued for itself but also as a preparation for adulthood. We believe in learning for life.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white/10">
                <img
                  src="https://i.postimg.cc/158qVS9W/asdfasdfasdfasdfasdf.webp"
                  alt="BKG Campus Aerial View"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Middle Section: Horizontal Nav */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16 border-t border-white/10 pt-16">
            <div className="flex-shrink-0">
              <img
                src="https://bkgglobalschool.com/wp-content/uploads/2022/12/Global-School-1.png"
                alt="BKG Logo"
                className="h-16 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-wrap gap-8 md:gap-12 justify-center">
              {['ABOUT', 'FAQ', 'CLASS', 'CONTACT'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs font-display font-semibold text-white hover:text-accent transition-colors tracking-[0.2em] italic"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section: Copyright & Socials */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[9px] font-bold uppercase tracking-widest italic text-center md:text-left">
            <p>COPYRIGHT © 2026 - DESIGNED AND DEVELOPED BY <br className="block sm:hidden" /><span className="text-white">TEAM MEDIAGARH</span></p>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-accent transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-white hover:text-accent transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-white hover:text-accent transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-white hover:text-accent transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="bg-gradient-to-r from-[#ff0000] to-[#fdcf58] gradient-text-fix font-display font-semibold tracking-[0.2em] uppercase text-[9px] mb-4 italic">Voices</h2>
          <h3 className="text-xl font-display font-semibold text-primary">TESTIMONIALS</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Rajesh Kumar", role: "Parent of Grade 5 Student", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=400&h=400&auto=format&fit=crop" },
            { name: "Sunita Sharma", role: "Parent of Grade 3 Student", image: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=400&h=400&auto=format&fit=crop" },
            { name: "Amit Patel", role: "Parent of Grade 8 Student", image: "https://images.unsplash.com/photo-1607081692251-d689f1b9af84?q=80&w=400&h=400&auto=format&fit=crop" }
          ].map((parent, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 max-w-sm relative group"
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-primary" />
              </div>
              <div className="flex gap-1 text-accent mb-5">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-text-muted italic mb-6 text-[13px] leading-relaxed opacity-90">
                "BKG Global School has provided my child with an exceptional learning environment. The focus on holistic development and values is truly commendable."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={parent.image}
                  alt={parent.name}
                  className="w-10 h-10 rounded-full object-cover border border-black/5"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-semibold text-primary text-[13px] italic">{parent.name}</h4>
                  <p className="text-[9px] text-text-muted font-display font-semibold uppercase tracking-wider opacity-70">{parent.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AssociatesSection = () => {
  return (
    <section className="py-12 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-text-muted font-display font-semibold uppercase tracking-[0.2em] text-[8px] mb-10 italic">Our Associates</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="text-base font-display font-semibold text-primary italic tracking-tighter">ASSOCIATE {i}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChairmanSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full text-primary font-display font-semibold text-[9px] uppercase tracking-widest mb-6 italic">
              CHAIRMAN'S DESK
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary leading-[1.1] tracking-tighter mb-8 italic">
              Leading with <span className="bg-gradient-to-r from-[#ff0000] to-[#fdcf58] gradient-text-fix">vision</span> and <span className="bg-gradient-to-r from-[#ff0000] to-[#fdcf58] gradient-text-fix">values</span>.
            </h2>
            <div className="space-y-6 text-base text-text-muted leading-relaxed italic opacity-90 mb-10 font-light">
              <p>
                "Our vision is to create an institution where every child is empowered to reach their full potential. At BKG Global School, we combine traditional values with modern innovation to prepare our students for the challenges of the 21st century."
              </p>
              <p>
                We nurture our students to become global citizens with tolerance, respect, and appreciation for different cultures and religions.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-primary"></div>
              <p className="font-display font-semibold text-primary uppercase tracking-widest text-[13px]">Shri B. Rudra Gouda, Chairman</p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative z-10">
              <img
                src="https://i.postimg.cc/02kSkS4C/asdfasdf.webp"
                alt="Chairman"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full -z-0 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <WelcomeSection />
      <ChairmanSection />
      <SmileSection />
      <AchievementsSection />
      <EventsSection />
      <VideoSection />
      <TestimonialsSection />
      <AssociatesSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
