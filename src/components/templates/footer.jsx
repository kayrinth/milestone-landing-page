// components/organisms/Footer.jsx
import { footerLinks, footerSocials } from "@/data/footer.config";

export function Footer() {
  return (
    <footer className="bg-[#23262F] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-semibold">FurniShop</h2>

          <div className="flex gap-4">
            {footerSocials.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <hr className="my-10 border-white" />
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 font-medium">{section.title}</h3>
              <ul className="space-y-3 text-sm text-white/80">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-white/60">
          © NameBrand 2022 – All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
