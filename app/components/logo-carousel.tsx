import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import { useRef } from "react";

/**
 * @param {{ logos: { src: string; alt?: string }[] }} props
 */
export default function LogoCarousel() {
    const autoplay = useRef(
        Autoplay({
            delay: 2000,
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
        { src: "/logos/logo-avl-no-bg.png", alt: "Logo AVL" },
        { src: "/logos/logo-brasil-recupera-no-bg.png", alt: "Logo BrasilRecupera" },
        { src: "/logos/logo-grazi-soares-no-bg.png", alt: "Logo Grazi Soares" },
        { src: "/logos/logo-hrs-no-bg.png", alt: "Logo HRS" },
        { src: "/logos/logo-multi-afeto-no-bg.png", alt: "Logo Multiafeto" },
    ]

    if (!Array.isArray(logos) || logos.length === 0) {
        return null;
    }

    return (
        <Carousel
            orientation="vertical"
            opts={{ align: "start", loop: true, watchDrag: false }}
            plugins={[autoplay.current]}
            className="w-full max-w-md mx-auto"
            aria-label="Carrossel de logos de parceiros"
        >
            {/* Altura fixa = uma logo por vez; rola verticalmente (para cima). */}
            <CarouselContent className="-mt-4 h-[320px] md:h-[400px]">
                {logos.map((logo, index) => (
                    <CarouselItem key={index} className="pt-4 basis-full">
                        <div className="relative h-full w-full">
                            <Image
                                src={logo.src}
                                alt={logo.alt ?? `Logo ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 80vw, 420px"
                                className="object-contain p-6"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export { LogoCarousel };
