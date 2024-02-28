import { Carousel } from "flowbite-react";
import Image from "next/image";
import styles from "styles/Gallery.module.css";

function Gallery() {
  return (
    <Carousel slide={true} pauseOnHover className={styles.gallery}>
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-lg`}
        style={{ width: "100%", height: "100%" }}
      >
        <Image
          src="/images/gallery/7.JPG"
          alt="..."
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-lg`}
        style={{ width: "100%", height: "100%" }}
      >
        <Image
          src="/images/gallery/8.JPG"
          alt="..."
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      {/* <div
        className={`relative flex items-center justify-center overflow-hidden rounded-lg`}
        style={{ width: "100%", height: "100%" }}
      >
        <video
          controls
          muted
          autoPlay
          onLoadedMetadata={(e) => {
            // Set the playback duration (in seconds)
            const duration = 1000; // Example: 10 seconds

            // Pause the video after the specified duration
            setTimeout(() => {
              e.target.pause();
            }, duration * 1000);
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="/images/gallery/10.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      {/* <div
        className={`relative flex items-center justify-center overflow-hidden rounded-lg`}
        style={{ width: "100%", height: "100%" }}
      >
        <video
          controls
          muted
          autoPlay
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="/images/gallery/4.MOV" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </Carousel>
  );
}

export default Gallery;
