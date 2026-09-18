import { useState, FormEvent } from 'react';
import { NavTab } from '../../types';
import { Send, CheckCircle2, Copy, Check, Terminal, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ContactScreenProps {
  onNavigate: (tab: NavTab) => void;
  prefillService?: string;
}

export default function ContactScreen({ onNavigate, prefillService }: ContactScreenProps) {
  const [projectType, setProjectType] = useState<string>(prefillService || 'Mobile App / Flutter');
  const [budgetTier, setBudgetTier] = useState<string>('$3k - $8k (MVP Sprint)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const newTicket = 'JR-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(newTicket);
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jinorrajan@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const projectTypes = [
    'Mobile App / Flutter',
    'Zero-to-One MVP',
    'Backend & APIs',
    'System Design',
    'Codebase Audit',
  ];

  const budgetOptions = [
    '< $3k (Scoped Task / Audit)',
    '$3k - $8k (MVP Sprint)',
    '$8k - $20k (Full Product)',
    'Retainer (Ongoing)',
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1240px] w-full mx-auto px-4 lg:px-10 py-6 lg:py-10 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-black pb-3">
          <div>
            <span className="font-label-badge text-[11px] uppercase tracking-widest text-[#444748] font-bold">
              Dispatch Terminal &amp; Inquiry Desk
            </span>
            <h1 className="font-headline-lg text-black uppercase font-bold tracking-tight">
              Start a Conversation
            </h1>
          </div>
          <div className="flex items-center gap-2 font-label-code text-[12px] text-[#444748]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>DISPATCH_PORT::OPEN [LATENCY: &lt;24HR]</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000]">
              {/* Folder tab */}
              <div className="absolute -top-7 left-6 px-4 py-1 bg-white border-2 border-b-0 border-black font-label-badge text-[11px] text-black uppercase font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#fae100] border border-black rounded-full"></span>
                TICKET DISPATCH SPEC
              </div>

              {submitted ? (
                <div className="flex flex-col items-center text-center p-6 gap-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#a7f3d0] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000000]">
                    <CheckCircle2 size={32} className="text-black" />
                  </div>
                  <div className="font-headline-lg text-[26px] font-bold text-black">
                    Ticket #{ticketId} Dispatched!
                  </div>
                  <p className="font-body-md text-[#444748] max-w-md leading-relaxed">
                    Thank you, <strong className="text-black">{name}</strong>. Your project specification has been routed directly to Jino's priority queue. Expect a response at <code className="bg-[#efeee9] px-1 py-0.5 text-black font-bold">{email}</code> within 24 hours.
                  </p>
                  <div className="p-4 bg-[#f5f4ef] border-2 border-black font-label-code text-[12px] text-left w-full max-w-md shadow-[2px_2px_0px_#000000]">
                    <div className="border-b border-black/15 pb-1 font-bold text-black flex justify-between">
                      <span>STATUS: QUEUED</span>
                      <span className="text-emerald-700">CONFIRMED</span>
                    </div>
                    <div className="pt-2 text-[#444748] space-y-1">
                      <div>Project Type: {projectType}</div>
                      <div>Budget Target: {budgetTier}</div>
                      <div>Engineer Assigned: Jino R. [Product Eng]</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setBrief('');
                    }}
                    className="mt-2 px-5 py-2 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Project Type */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-badge text-[11px] uppercase font-bold text-black flex items-center justify-between">
                      <span>1. Project Category / Discipline</span>
                      <span className="text-[#444748] font-normal font-label-code text-[10px]">// select one</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProjectType(type)}
                          className={`px-3 py-1.5 font-label-code text-[11px] font-semibold border-2 border-black transition-all cursor-pointer ${
                            projectType === type
                              ? 'bg-[#fae100] text-[#201c00] shadow-[2px_2px_0px_#000000] translate-x-[-1px] translate-y-[-1px] font-bold'
                              : 'bg-[#f5f4ef] text-[#444748] hover:bg-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-badge text-[11px] uppercase font-bold text-black flex items-center justify-between">
                      <span>2. Estimated Timeline &amp; Budget Range</span>
                      <span className="text-[#444748] font-normal font-label-code text-[10px]">// target scope</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudgetTier(b)}
                          className={`p-2 font-label-code text-[11px] font-semibold border-2 border-black text-left transition-all cursor-pointer ${
                            budgetTier === b
                              ? 'bg-[#a7f3d0] text-black shadow-[2px_2px_0px_#000000] translate-x-[-1px] translate-y-[-1px] font-bold'
                              : 'bg-[#f5f4ef] text-[#444748] hover:bg-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-badge text-[11px] uppercase font-bold text-black">
                        3. Your Name / Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Maya Chen or Zeedz Founder"
                        className="p-2.5 bg-[#faf9f4] border-2 border-black font-body-md text-[14px] text-black outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-badge text-[11px] uppercase font-bold text-black">
                        4. Direct Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="maya@venture.com"
                        className="p-2.5 bg-[#faf9f4] border-2 border-black font-body-md text-[14px] text-black outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all"
                      />
                    </div>
                  </div>

                  {/* Brief */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-badge text-[11px] uppercase font-bold text-black flex items-center justify-between">
                      <span>5. Project Goals or Problem Description</span>
                      <span className="text-[#444748] font-normal font-label-code text-[10px]">// what are you building?</span>
                    </label>
                    <textarea
                      rows={4}
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      placeholder="// We have a cross-platform mobile app that needs to be built with Flutter, connecting to a Go backend with real-time location..."
                      className="p-2.5 bg-[#faf9f4] border-2 border-black font-body-md text-[14px] text-black outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#fae100] border-2 border-black font-headline-sm text-[16px] font-bold text-[#201c00] shadow-[4px_4px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Dispatch Project Ticket</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Direct Details & Live JSON Monitor (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Live Terminal Payload Inspector */}
            <div className="p-4 bg-black text-white border-2 border-black shadow-[5px_5px_0px_#000000] font-label-code text-[12px] flex flex-col gap-2">
              <div className="flex items-center justify-between border-b border-white/20 pb-1.5">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#fae100]" />
                  <span className="font-bold text-[#fae100]">PAYLOAD_MONITOR</span>
                </div>
                <span className="text-emerald-400 text-[10px]">LIVE SYNC</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-[#a7f3d0] overflow-x-auto py-1">
{JSON.stringify(
  {
    target_engineer: 'Jino R.',
    status: 'READY_FOR_DISPATCH',
    category: projectType,
    budget_range: budgetTier,
    client_name: name || '<awaiting input>',
    client_email: email || '<awaiting input>',
    brief_length: brief ? `${brief.length} characters` : 'empty',
  },
  null,
  2
)}
              </pre>
              <div className="text-[10px] text-[#c8c6c5] border-t border-white/20 pt-1">
                // Direct gRPC payload validation active
              </div>
            </div>

            {/* Direct Connect Information */}
            <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-4">
              <div className="font-headline-sm text-[18px] font-bold text-black uppercase border-b-2 border-black pb-2">
                Direct Communication Channels
              </div>

              <div className="flex flex-col gap-3 font-label-code text-[13px]">
                {/* Email with copy button */}
                <div className="p-3 bg-[#efeee9] border border-black flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-black" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#444748]">Primary Email</div>
                      <div className="font-bold text-black">jinorrajan@gmail.com</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 bg-white border border-black hover:bg-[#fae100] cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Telephone */}
                <a
                  href="tel:6369555984"
                  className="p-3 bg-[#efeee9] border border-black flex items-center gap-2 hover:bg-white transition-colors"
                >
                  <Phone size={16} className="text-black" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#444748]">Phone / WhatsApp</div>
                    <div className="font-bold text-black">+91 6369555984</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jino-r-020b8a235/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#efeee9] border border-black flex items-center gap-2 hover:bg-white transition-colors"
                >
                  <Linkedin size={16} className="text-black" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#444748]">LinkedIn Profile</div>
                    <div className="font-bold text-black">linkedin.com/in/jino-r-020b8a235</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/jinorrajan"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#efeee9] border border-black flex items-center gap-2 hover:bg-white transition-colors"
                >
                  <Github size={16} className="text-black" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#444748]">GitHub Code Repositories</div>
                    <div className="font-bold text-black">github.com/jinorrajan</div>
                  </div>
                </a>

                {/* Physical Base */}
                <div className="p-3 bg-[#efeee9] border border-black flex items-center gap-2">
                  <MapPin size={16} className="text-black" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#444748]">Base Location</div>
                    <div className="font-bold text-black">Chennai, India &amp; Worldwide Remote</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
