import { Carousel } from "flowbite-react";
import Image from "next/image"; 
import styles from "styles/Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <Carousel>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
             // Use  prop for Next.js images
            style={{ objectFit: "cover" }}
            width={100}
            height={60}
          />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
            
            style={{ objectFit: "cover" }}
            width={100}
            height={60}
          />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
            
            style={{ objectFit: "cover" }}
            width={100}
            height={60}
          />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
            
            style={{ objectFit: "cover" }}
            width={100}
            height={60}
          />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
            
            style={{ objectFit: "cover" }}
            width={100}
            height={60}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
