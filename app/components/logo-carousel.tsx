import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { useRef } from "react";

/**
 * @param {{ logos: { src: string; alt?: string }[] }} props
 */
export default function LogoCarousel() {
    const autoplay = useRef(
        Autoplay({
            delay: 1000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );
    
    const logos = [
        { src: "/logos/logo-alanza-no-bg.png", alt: "Logo Alanza" },
        { src: "/logos/logo-dra-luciane-no-bg.png", alt: "Logo Dra. Luciane" },
        { src: "/logos/logo-ellius-no-bg.png", alt: "Logo Ellius" },
        { src: "/logos/logo-global-no-bg.png", alt: "Logo Global" },
        { src: "/logos/logo-keila-de-bem-no-bg.png", alt: "Logo Keila de Bem" },
        { src: "/logos/logo-monkey-no-bg.png", alt: "Logo Monkey" },
        { src: "/logos/logo-rdo-no-bg.png", alt: "Logo RDO" },
        { src: "/logos/logo-rm-no-bg.png", alt: "Logo RM" },
        { src: "/logos/logo-rodes-no-bg.png", alt: "Logo Rodes" },
        { src: "/logos/logo-rodima-no-bg.png", alt: "Logo Rodima" },
    ]

    if (!Array.isArray(logos) || logos.length === 0) {
        return null;
    }

    return (
        <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplay.current]}
            className="w-full"
            aria-label="Carrossel de logos de parceiros"
        >
            <CarouselContent className="-ml-2">
                {logos.map((logo, index) => (
                    <CarouselItem
                        key={index}
                        className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                    >
                        <div className="flex items-center justify-center h-64 w-full rounded-2xl bg-transparent">
                            <img
                                src={logo.src}
                                alt={logo.alt ?? `Logo ${index + 1}`}
                                className="h-64 w-auto rounded-full object-contain transition"
                                loading="lazy"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export { LogoCarousel };