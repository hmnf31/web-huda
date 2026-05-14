import { MessageCircle, Instagram, Github, Linkedin, Leaf } from "lucide-react"

const socials = [
  { label: "WhatsApp", href: "https://wa.me/6281219995475", icon: MessageCircle },
  { label: "Instagram", href: "https://instagram.com/hudamuhamadnf", icon: Instagram },
  { label: "GitHub", href: "https://github.com/hudamuhamadnf", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/huda-mnf", icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* brand */}
        <div className="flex items-center gap-2 text-foreground">
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Leaf className="size-4 text-primary" aria-hidden />
          </div>
          <div>
            <p className="font-bold text-sm">Huda Muhammad Nur Fauzi</p>
            <p className="text-xs text-muted-foreground">Garut, Jawa Barat</p>
          </div>
        </div>

        {/* social links */}
        <nav aria-label="Tautan sosial media">
          <ul className="flex items-center gap-3" role="list">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center size-9 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* copyright */}
        <p className="text-xs text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} Huda Muhammad Nur Fauzi.
          <br className="sm:hidden" />
          {" "}Dibuat dengan ♥ di Garut.
        </p>
      </div>
    </footer>
  )
}
